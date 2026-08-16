#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COPY_DIRS = [
  {
    src: path.resolve(__dirname, "..", "src", "data"),
    dest: path.resolve(__dirname, "..", "kubejs", "data"),
    label: "src/data/ → kubejs/data/",
  },
  {
    src: path.resolve(__dirname, "..", "src", "assets"),
    dest: path.resolve(__dirname, "..", "kubejs", "assets"),
    label: "src/assets/ → kubejs/assets/",
  },
  {
    src: path.resolve(__dirname, "..", "src", "config"),
    dest: path.resolve(__dirname, "..", "kubejs", "config"),
    label: "src/config/ → kubejs/config/",
  },
];

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

for (const { src, dest, label } of COPY_DIRS) {
  if (fs.existsSync(src)) {
    copyDir(src, dest);
    console.log(`Copied ${label}`);
  }
}
