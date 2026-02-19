#!/usr/bin/env node
import dotenv from "dotenv";
import path from "node:path";
import chalk from "chalk";
import ora from "ora";
import { connect, listRemoteFiles, listLocalFiles } from "../lib/sftp.js";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ quiet: true });

const LOCAL_KUBEJS = path.resolve(__dirname, "..", "kubejs");
const REMOTE_KUBEJS = process.env.REMOTE_KUBEJS_PATH;

async function status() {
  console.log(chalk.cyan.bold("\nCreaterington — Status\n"));

  if (!REMOTE_KUBEJS) {
    console.error(chalk.red("Error: REMOTE_KUBEJS_PATH is not set in .env"));
    process.exit(1);
  }

  const spinner = ora("Connecting to server...").start();
  let sftp;

  try {
    sftp = await connect();
    spinner.succeed("Connected to server");

    // Gather both sides
    spinner.start("Comparing files...");
    const localFiles = listLocalFiles(LOCAL_KUBEJS);
    const remoteFiles = await listRemoteFiles(sftp, REMOTE_KUBEJS);
    spinner.succeed("Comparison complete");

    const localMap = new Map(localFiles.map((f) => [f.relative, f]));
    const remoteMap = new Map(remoteFiles.map((f) => [f.relative, f]));

    const localOnly = localFiles.filter((f) => !remoteMap.has(f.relative));
    const remoteOnly = remoteFiles.filter((f) => !localMap.has(f.relative));

    const modified = [];
    const unchanged = [];
    for (const [rel, local] of localMap) {
      const remote = remoteMap.get(rel);
      if (!remote) continue;
      if (local.size !== remote.size) {
        modified.push({ relative: rel, localSize: local.size, remoteSize: remote.size });
      } else {
        unchanged.push(rel);
      }
    }

    function formatSize(bytes) {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    if (modified.length > 0) {
      console.log(chalk.yellow(`\n  ~ Modified (${modified.length}):`));
      for (const f of modified) {
        console.log(chalk.yellow(`    ~ ${f.relative}  (${formatSize(f.localSize)} local, ${formatSize(f.remoteSize)} remote)`));
      }
    }

    if (localOnly.length > 0) {
      console.log(chalk.green(`\n  + Local only — would be added on push (${localOnly.length}):`));
      for (const f of localOnly) {
        console.log(chalk.green(`    + ${f.relative}  (${formatSize(f.size)})`));
      }
    }

    if (remoteOnly.length > 0) {
      console.log(chalk.red(`\n  - Remote only — would be added on pull (${remoteOnly.length}):`));
      for (const f of remoteOnly) {
        console.log(chalk.red(`    - ${f.relative}  (${formatSize(f.size)})`));
      }
    }

    if (unchanged.length > 0) {
      console.log(chalk.gray(`\n  = Unchanged: ${unchanged.length} file${unchanged.length === 1 ? "" : "s"}`));
    }

    if (modified.length === 0 && localOnly.length === 0 && remoteOnly.length === 0) {
      console.log(chalk.green("\n  Everything is in sync!"));
    }

    console.log("");
  } catch (err) {
    spinner.fail("Status check failed");
    console.error(chalk.red(`\nError: ${err.message}`));
    process.exit(1);
  } finally {
    if (sftp) await sftp.end();
  }
}

status();
