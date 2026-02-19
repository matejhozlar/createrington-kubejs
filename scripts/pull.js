#!/usr/bin/env node
import dotenv from "dotenv";
import fs from "node:fs";
import chalk from "chalk";
import ora from "ora";
import { connect, listRemoteFiles, cleanLocalDir } from "../lib/sftp.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ quiet: true });

const LOCAL_KUBEJS = path.resolve(__dirname, "..", "kubejs");
const REMOTE_KUBEJS = process.env.REMOTE_KUBEJS_PATH;

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

    // Clean local kubejs directory
    spinner.start("Cleaning local kubejs folder...");
    cleanLocalDir(LOCAL_KUBEJS);
    spinner.succeed("Cleaned local kubejs folder");

    // Download each file
    console.log("");
    let downloaded = 0;

    for (const file of remoteFiles) {
      const localDest = path.join(LOCAL_KUBEJS, file.relative);
      const localDir = path.dirname(localDest);

      fs.mkdirSync(localDir, { recursive: true });

      spinner.start(`Downloading ${chalk.gray(file.relative)}`);
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
