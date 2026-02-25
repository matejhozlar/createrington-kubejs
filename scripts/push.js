#!/usr/bin/env node
import dotenv from "dotenv";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import chalk from "chalk";
import ora from "ora";
import {
  connect,
  listRemoteFiles,
  listLocalFiles,
  ensureRemoteDir,
} from "../lib/sftp.js";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ quiet: true });

const LOCAL_KUBEJS = path.resolve(__dirname, "..", "kubejs");
const REMOTE_KUBEJS = process.env.REMOTE_KUBEJS_PATH;
const MANIFEST_PATH = path.resolve(__dirname, "..", ".push-manifest.json");

function hashFile(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(content).digest("hex");
}

function loadManifest() {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function saveManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
}

async function push() {
  console.log(chalk.cyan.bold("\nCreaterington — Push\n"));

  if (!REMOTE_KUBEJS) {
    console.error(chalk.red("Error: REMOTE_KUBEJS_PATH is not set in .env"));
    process.exit(1);
  }

  // Confirm before pushing
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = await rl.question(
    chalk.yellow(`Push local scripts to Createrington (${REMOTE_KUBEJS})? (y/N) `),
  );
  rl.close();

  if (answer.toLowerCase() !== "y") {
    console.log(chalk.gray("Push cancelled.\n"));
    return;
  }

  console.log("");
  const spinner = ora("Connecting to server...").start();
  let sftp;

  try {
    sftp = await connect();
    spinner.succeed("Connected to server");

    // Back up existing scripts on Createrington
    const backupPath = process.env.REMOTE_BACKUP_PATH;
    if (backupPath) {
      spinner.start("Backing up remote scripts...");
      try {
        await new Promise((resolve, reject) => {
          sftp.client.exec(
            `rm -rf "${backupPath}" && cp -r "${REMOTE_KUBEJS}" "${backupPath}"`,
            (err, stream) => {
              if (err) return reject(err);
              stream.on("close", (code) => {
                if (code === 0) resolve();
                else reject(new Error(`Backup command exited with code ${code}`));
              });
              stream.on("data", () => {});
              stream.stderr.on("data", () => {});
            },
          );
        });
        spinner.succeed(
          `Backed up remote kubejs to ${chalk.gray(backupPath)}`,
        );
      } catch {
        // Remote folder might not exist yet (first push)
        spinner.warn("No existing remote folder to back up");
      }
    } else {
      console.log(
        chalk.yellow(
          "  ⚠  REMOTE_BACKUP_PATH not set — skipping backup",
        ),
      );
    }

    // List local files
    spinner.start("Scanning local files...");
    const localFiles = listLocalFiles(LOCAL_KUBEJS);
    spinner.succeed(`Found ${chalk.yellow(localFiles.length)} local files`);

    if (localFiles.length === 0) {
      console.log(
        chalk.yellow(
          "\n⚠  No local files to push. Run `npm run pull` first or add scripts to ./kubejs/",
        ),
      );
      await sftp.end();
      return;
    }

    // Remove remote files that no longer exist locally
    spinner.start("Scanning remote files...");
    let remoteFiles = [];
    try {
      remoteFiles = await listRemoteFiles(sftp, REMOTE_KUBEJS);
    } catch {
      // Remote dir might not exist yet
    }
    spinner.succeed(
      `Found ${chalk.yellow(remoteFiles.length)} existing remote files`,
    );

    const localRelativePaths = new Set(localFiles.map((f) => f.relative));

    // Delete remote files that no longer exist locally
    let deleted = 0;
    for (const rf of remoteFiles) {
      if (!localRelativePaths.has(rf.relative)) {
        spinner.start(`Removing ${chalk.gray(rf.relative)}`);
        await sftp.delete(rf.remote);
        deleted++;
      }
    }
    if (deleted > 0) {
      spinner.succeed(`Removed ${chalk.red(deleted)} stale remote files`);
    }

    // Hash local files and compare against last push manifest
    spinner.start("Hashing local files...");
    const prevManifest = loadManifest();
    const newManifest = {};

    for (const file of localFiles) {
      newManifest[file.relative] = hashFile(file.local);
    }
    spinner.succeed("Hashed local files");

    // Upload only changed or new files
    console.log("");
    let uploaded = 0;
    let skipped = 0;

    for (const file of localFiles) {
      const hash = newManifest[file.relative];

      if (prevManifest[file.relative] === hash) {
        skipped++;
        continue;
      }

      const remoteDest = path.posix.join(REMOTE_KUBEJS, file.relative);
      const remoteDir = path.posix.dirname(remoteDest);

      await ensureRemoteDir(sftp, remoteDir);

      spinner.start(`Uploading ${chalk.gray(file.relative)}`);
      await sftp.fastPut(file.local, remoteDest);
      uploaded++;
    }

    if (skipped > 0) {
      console.log(chalk.gray(`  Skipped ${skipped} unchanged files`));
    }
    spinner.succeed(`Uploaded ${chalk.green(uploaded)} files`);

    // Save manifest after successful upload
    saveManifest(newManifest);
    console.log(chalk.green.bold("\nPush complete!\n"));
  } catch (err) {
    spinner.fail("Push failed");
    console.error(chalk.red(`\nError: ${err.message}`));
    if (err.message.includes("connect")) {
      console.log(chalk.gray("Check the Createrington SFTP credentials in .env."));
    }
    process.exit(1);
  } finally {
    if (sftp) await sftp.end();
  }
}

push();
