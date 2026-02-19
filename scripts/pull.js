#!/usr/bin/env node
import dotenv from "dotenv";
import fs from "node:fs";
import chalk from "chalk";
import ora from "ora";
import { connect, listRemoteFiles, remoteToSrc } from "../lib/sftp.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ quiet: true });

const LOCAL_SRC = path.resolve(__dirname, "..", "src");
const REMOTE_KUBEJS = process.env.REMOTE_KUBEJS_PATH;

/** Files in src/ that should not be deleted during clean. */
const PRESERVE = new Set(["globals.d.ts"]);

async function pull() {
  console.log(chalk.cyan.bold("\nCreaterington — Pull\n"));

  if (!REMOTE_KUBEJS) {
    console.error(chalk.red("Error: REMOTE_KUBEJS_PATH is not set in .env"));
    process.exit(1);
  }

  const spinner = ora("Connecting to server...").start();
  let sftp;

  try {
    sftp = await connect();
    spinner.succeed("Connected to server");

    // List remote files on Createrington
    spinner.start("Scanning remote files...");
    const remoteFiles = await listRemoteFiles(sftp, REMOTE_KUBEJS);
    spinner.succeed(`Found ${chalk.yellow(remoteFiles.length)} remote files`);

    if (remoteFiles.length === 0) {
      console.log(
        chalk.yellow("\nNo files found on remote. Is the path correct?"),
      );
      console.log(chalk.gray(`   Remote path: ${REMOTE_KUBEJS}`));
      await sftp.end();
      return;
    }

    // Clean local src/ directory, preserving specific files
    spinner.start("Cleaning local src/ folder...");
    if (fs.existsSync(LOCAL_SRC)) {
      for (const entry of fs.readdirSync(LOCAL_SRC)) {
        if (PRESERVE.has(entry)) continue;
        fs.rmSync(path.join(LOCAL_SRC, entry), { recursive: true, force: true });
      }
    } else {
      fs.mkdirSync(LOCAL_SRC, { recursive: true });
    }
    spinner.succeed("Cleaned local src/ folder");

    // Download each file, mapping remote paths to src/ layout
    console.log("");
    let downloaded = 0;

    for (const file of remoteFiles) {
      const srcRelative = remoteToSrc(file.relative);
      const localDest = path.join(LOCAL_SRC, srcRelative);
      const localDir = path.dirname(localDest);

      fs.mkdirSync(localDir, { recursive: true });

      spinner.start(`Downloading ${chalk.gray(file.relative)} → ${chalk.gray(srcRelative)}`);
      await sftp.fastGet(file.remote, localDest);
      downloaded++;
    }

    spinner.succeed(`Downloaded ${chalk.green(downloaded)} files`);
    console.log(chalk.green.bold("\nPull complete!\n"));
  } catch (err) {
    spinner.fail("Pull failed");
    console.error(chalk.red(`\nError: ${err.message}`));
    if (err.message.includes("connect")) {
      console.log(chalk.gray("Check the Createrington SFTP credentials in .env."));
    }
    process.exit(1);
  } finally {
    if (sftp) await sftp.end();
  }
}

pull();
