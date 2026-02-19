#!/usr/bin/env node
import dotenv from "dotenv";
import path from "node:path";
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
        // Remove old backup if it exists
        try {
          await sftp.rmdir(backupPath, true);
        } catch {
          // Old backup didn't exist, that's fine
        }
        // Rename current remote folder to backup path
        await sftp.rename(REMOTE_KUBEJS, backupPath);
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

    // Upload each local file
    console.log("");
    let uploaded = 0;

    for (const file of localFiles) {
      const remoteDest = path.posix.join(REMOTE_KUBEJS, file.relative);
      const remoteDir = path.posix.dirname(remoteDest);

      await ensureRemoteDir(sftp, remoteDir);

      spinner.start(`Uploading ${chalk.gray(file.relative)}`);
      await sftp.fastPut(file.local, remoteDest);
      uploaded++;
    }

    spinner.succeed(`Uploaded ${chalk.green(uploaded)} files`);
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
