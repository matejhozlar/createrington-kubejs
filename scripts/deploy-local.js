#!/usr/bin/env node
import dotenv from "dotenv";
import path from "node:path";
import fs from "node:fs";
import chalk from "chalk";
import ora from "ora";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ quiet: true });

const LOCAL_KUBEJS = path.resolve(__dirname, "..", "kubejs");
const LOCAL_MODPACK_PATH = process.env.LOCAL_MODPACK_PATH;
const DEST_KUBEJS = LOCAL_MODPACK_PATH
  ? path.join(LOCAL_MODPACK_PATH, "kubejs")
  : undefined;

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function collectFiles(dir, base = dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(full, base));
    } else {
      results.push(path.relative(base, full));
    }
  }
  return results;
}

async function deployLocal() {
  console.log(chalk.cyan.bold("\nCreaterington — Deploy Local\n"));

  if (!LOCAL_MODPACK_PATH) {
    console.error(
      chalk.red("Error: LOCAL_MODPACK_PATH is not set in .env"),
    );
    console.log(
      chalk.gray(
        "Set LOCAL_MODPACK_PATH to the root folder of your local Minecraft instance.",
      ),
    );
    process.exit(1);
  }

  const spinner = ora("Scanning source files...").start();
  let files;
  try {
    files = collectFiles(LOCAL_KUBEJS);
    spinner.succeed(`Found ${chalk.yellow(files.length)} files in kubejs`);
  } catch (err) {
    spinner.fail("Failed to read source directory");
    console.error(chalk.red(`\nError: ${err.message}`));
    process.exit(1);
  }

  if (files.length === 0) {
    console.log(chalk.yellow("\n⚠  No files found in kubejs.\n"));
    return;
  }

  spinner.start(`Copying to ${chalk.gray(DEST_KUBEJS)}...`);
  try {
    copyDir(LOCAL_KUBEJS, DEST_KUBEJS);
    spinner.succeed(
      `Copied ${chalk.green(files.length)} files to ${chalk.gray(DEST_KUBEJS)}`,
    );
  } catch (err) {
    spinner.fail("Copy failed");
    console.error(chalk.red(`\nError: ${err.message}`));
    process.exit(1);
  }

  console.log(chalk.green.bold("\nDeploy complete!\n"));
}

deployLocal();
