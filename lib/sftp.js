import SftpClient from "ssh2-sftp-client";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

/**
 * Connect to the Createrington server over SFTP.
 */
export async function connect() {
  const sftp = new SftpClient();

  const config = {
    host: process.env.SFTP_HOST,
    port: parseInt(process.env.SFTP_PORT || "22", 10),
    username: process.env.SFTP_USERNAME,
  };

  if (process.env.SFTP_PRIVATE_KEY_PATH) {
    const keyPath = process.env.SFTP_PRIVATE_KEY_PATH.replace(
      "~",
      os.homedir(),
    );
    config.privateKey = fs.readFileSync(keyPath);
  } else {
    config.password = process.env.SFTP_PASSWORD;
  }

  await sftp.connect(config);
  return sftp;
}

/**
 * Recursively list all files in a remote directory.
 */
export async function listRemoteFiles(sftp, remotePath, basePath = remotePath) {
  const files = [];
  const listing = await sftp.list(remotePath);

  for (const item of listing) {
    const fullPath = path.posix.join(remotePath, item.name);
    if (item.type === "d") {
      const subFiles = await listRemoteFiles(sftp, fullPath, basePath);
      files.push(...subFiles);
    } else {
      files.push({
        remote: fullPath,
        relative: path.posix.relative(basePath, fullPath),
        size: item.size,
      });
    }
  }

  return files;
}

/**
 * Recursively list all files in a local directory.
 */
export function listLocalFiles(localPath, basePath = localPath) {
  const files = [];
  if (!fs.existsSync(localPath)) return files;

  const entries = fs.readdirSync(localPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(localPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...listLocalFiles(fullPath, basePath));
    } else {
      files.push({
        local: fullPath,
        relative: path.relative(basePath, fullPath).split(path.sep).join("/"),
        size: fs.statSync(fullPath).size,
      });
    }
  }

  return files;
}

/**
 * Ensure a remote directory exists (recursive).
 */
export async function ensureRemoteDir(sftp, dirPath) {
  try {
    await sftp.mkdir(dirPath, true);
  } catch (err) {
    // directory might already exist
  }
}

/**
 * Remove a directory and all its contents locally.
 */
export function cleanLocalDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
  fs.mkdirSync(dirPath, { recursive: true });
}

// Mapping between remote *_scripts/ dirs and src/ dirs
const SCRIPT_DIR_MAP = {
  "server_scripts/": "server/",
  "startup_scripts/": "startup/",
  "client_scripts/": "client/",
};
const SCRIPT_DIR_REVERSE = Object.fromEntries(
  Object.entries(SCRIPT_DIR_MAP).map(([k, v]) => [v, k]),
);

/**
 * Map a remote relative path to its src/ equivalent.
 * e.g. "server_scripts/foo.js" → "server/foo.ts"
 * Non-script paths are returned unchanged.
 */
export function remoteToSrc(rel) {
  for (const [remote, src] of Object.entries(SCRIPT_DIR_MAP)) {
    if (rel.startsWith(remote)) {
      return src + rel.slice(remote.length).replace(/\.js$/, ".ts");
    }
  }
  return rel;
}

/**
 * Map a src/ relative path to its remote equivalent.
 * e.g. "server/foo.ts" → "server_scripts/foo.js"
 * Non-script paths are returned unchanged.
 */
export function srcToRemote(rel) {
  for (const [src, remote] of Object.entries(SCRIPT_DIR_REVERSE)) {
    if (rel.startsWith(src)) {
      return remote + rel.slice(src.length).replace(/\.ts$/, ".js");
    }
  }
  return rel;
}
