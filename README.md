# createrington-kubejs

Version-controlled KubeJS scripts for the Createrington Minecraft server. Push and pull scripts to the server over SFTP, with backup support to keep things safe.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your connection:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with the Createrington server's SFTP credentials.

3. **Pull the current scripts from the server:**
   ```bash
   npm run pull
   ```

## Usage

| Command            | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `npm run pull`     | Download scripts from the server, **overwriting** local        |
| `npm run push`     | Upload local scripts to the server, **overwriting** remote     |
| `npm run status`   | Compare local vs remote files (shows new/missing/modified)     |

### Typical workflow

```bash
# Grab the latest scripts from the Createrington server
npm run pull

# Edit scripts locally in ./kubejs/
# e.g. kubejs/server_scripts/my_recipe.js

# Push your changes back to the server
npm run push

# Use /kubejs reload in-game to apply
```

## Project structure

```
createrington-kubejs/
├── kubejs/                 ← KubeJS scripts (synced with the server)
│   ├── server_scripts/
│   ├── client_scripts/
│   └── startup_scripts/
├── scripts/                ← Sync tooling
│   ├── pull.js
│   ├── push.js
│   └── status.js
├── lib/
│   └── sftp.js             ← Shared SFTP helpers
├── .env                    ← Connection config (git-ignored)
├── .env.example
├── .gitignore
└── package.json
```

## Notes

- **Pull is destructive** — it replaces your local `kubejs/` entirely with the server version.
- **Push is destructive** — it removes remote files that don't exist locally, then uploads everything. A backup of the remote folder is created first if `REMOTE_BACKUP_PATH` is set.
- Use `npm run status` to preview differences before pushing or pulling.
- The `.env` file is git-ignored so credentials stay local.
