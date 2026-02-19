#!/usr/bin/env node
import dotenv from "dotenv";
import path from "node:path";
import chalk from "chalk";
import ora from "ora";
import {
  connect,
  listRemoteFiles,
  listLocalFiles,
  srcToRemote,
  remoteToSrc,
} from "../lib/sftp.js";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ quiet: true });

const LOCAL_SRC = path.resolve(__dirname, "..", "src");
const LOCAL_KUBEJS = path.resolve(__dirname, "..", "kubejs");
const REMOTE_KUBEJS = process.env.REMOTE_KUBEJS_PATH;

/** Files in src/ to ignore during status (not from remote). */
const SRC_IGNORE = new Set(["globals.d.ts"]);

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

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

    // Gather all file lists
    spinner.start("Comparing files...");
    const srcFiles = listLocalFiles(LOCAL_SRC).filter(
      (f) => !SRC_IGNORE.has(f.relative),
    );
    const kubeFiles = listLocalFiles(LOCAL_KUBEJS);
    const remoteFiles = await listRemoteFiles(sftp, REMOTE_KUBEJS);
    spinner.succeed("Comparison complete");

    // --- Part 1: File existence (src/ ↔ remote via path mapping) ---
    // Map src files to their expected remote relative path
    const srcMappedToRemote = new Map(
      srcFiles.map((f) => [srcToRemote(f.relative), f]),
    );
    const remoteMap = new Map(remoteFiles.map((f) => [f.relative, f]));

    const srcOnlyFiles = []; // in src/ but not on remote
    const remoteOnlyFiles = []; // on remote but not in src/

    for (const [remoteRel, srcFile] of srcMappedToRemote) {
      if (!remoteMap.has(remoteRel)) {
        srcOnlyFiles.push({ srcRelative: srcFile.relative, remoteRelative: remoteRel });
      }
    }

    for (const [remoteRel] of remoteMap) {
      if (!srcMappedToRemote.has(remoteRel)) {
        remoteOnlyFiles.push({ remoteRelative: remoteRel, srcRelative: remoteToSrc(remoteRel) });
      }
    }

    // --- Part 2: Size comparison (kubejs/ build output ↔ remote) ---
    const kubeMap = new Map(kubeFiles.map((f) => [f.relative, f]));

    const sizeDiffs = [];
    let inSyncCount = 0;

    for (const [rel, remote] of remoteMap) {
      const local = kubeMap.get(rel);
      if (!local) continue;
      if (local.size !== remote.size) {
        sizeDiffs.push({
          relative: rel,
          localSize: local.size,
          remoteSize: remote.size,
        });
      } else {
        inSyncCount++;
      }
    }

    // --- Output ---
    if (srcOnlyFiles.length > 0) {
      console.log(
        chalk.green(`\n  + In src/ but missing from remote (${srcOnlyFiles.length}):`),
      );
      for (const f of srcOnlyFiles) {
        console.log(chalk.green(`    + ${f.srcRelative}  → ${f.remoteRelative}`));
      }
    }

    if (remoteOnlyFiles.length > 0) {
      console.log(
        chalk.red(`\n  - On remote but missing from src/ (${remoteOnlyFiles.length}):`),
      );
      for (const f of remoteOnlyFiles) {
        console.log(chalk.red(`    - ${f.remoteRelative}  → ${f.srcRelative}`));
      }
    }

    if (sizeDiffs.length > 0) {
      console.log(
        chalk.yellow(`\n  ~ Size differs between kubejs/ and remote (${sizeDiffs.length}):`),
      );
      for (const f of sizeDiffs) {
        console.log(
          chalk.yellow(
            `    ~ ${f.relative}  (${formatSize(f.localSize)} local, ${formatSize(f.remoteSize)} remote)`,
          ),
        );
      }
    }

    if (inSyncCount > 0) {
      console.log(
        chalk.gray(
          `\n  = In sync (kubejs/ ↔ remote): ${inSyncCount} file${inSyncCount === 1 ? "" : "s"}`,
        ),
      );
    }

    if (
      srcOnlyFiles.length === 0 &&
      remoteOnlyFiles.length === 0 &&
      sizeDiffs.length === 0
    ) {
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
