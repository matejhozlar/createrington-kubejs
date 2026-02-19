# createrington-kubejs

Version-controlled KubeJS scripts for the Createrington Minecraft server. Scripts are written in TypeScript under `src/`, compiled to JavaScript via `@kubejs/plugin`, and synced with the server over SFTP.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your connection:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with the Createrington server's SFTP credentials:
   ```env
   SFTP_HOST=gamesfra1113.bisecthosting.com
   SFTP_PORT=2022
   SFTP_USERNAME=your-username
   SFTP_PASSWORD=your-password
   REMOTE_KUBEJS_PATH=/kubejs
   REMOTE_BACKUP_PATH=/kubejs-backup
   ```
   You can also use key-based auth by setting `SFTP_PRIVATE_KEY_PATH` instead of `SFTP_PASSWORD`.

3. **Pull the current scripts from the server:**
   ```bash
   npm run pull
   ```
   This downloads remote files into `src/`, mapping paths automatically (e.g. `server_scripts/foo.js` becomes `server/foo.ts`).

4. **Build to verify everything compiles:**
   ```bash
   npm run build
   ```

## Usage

| Command            | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `npm run pull`     | Download remote scripts into `src/` (overwrites local)             |
| `npm run build`    | Compile `src/*.ts` → `kubejs/*.js` via `@kubejs/plugin`            |
| `npm run watch`    | Same as build, but watches for changes                             |
| `npm run push`     | Upload `kubejs/` build output to the server (overwrites remote)    |
| `npm run status`   | Compare src/ and kubejs/ against remote (existence + size)         |
| `npm run extract-tags` | Extract tag resource locations from mod JARs into `.probe/`    |
| `node scripts/fix-probe-types.js` | Fix ProbeJS type bugs and inject real registry IDs |

### Typical workflow

```bash
# 1. Grab the latest scripts from the server
npm run pull

# 2. Edit TypeScript sources in src/
#    e.g. src/server/my_recipe.ts

# 3. Build to compile TS → JS
npm run build

# 4. Check what's changed vs the server
npm run status

# 5. Push the compiled output to the server
npm run push

# 6. Use /kubejs reload in-game to apply
```

## Project structure

```
createrington-kubejs/
├── src/                    ← TypeScript sources (edit these)
│   ├── server/             ← Server-side scripts
│   ├── startup/            ← Startup scripts
│   ├── client/             ← Client-side scripts
│   └── globals.d.ts        ← Hand-maintained type definitions
├── kubejs/                 ← Build output (compiled JS, git-ignored)
│   ├── server_scripts/
│   ├── startup_scripts/
│   └── client_scripts/
├── mods/                   ← Mod JARs from the modpack (git-ignored)
├── scripts/                ← SFTP sync tooling
│   ├── pull.js             ← Downloads remote → src/
│   ├── push.js             ← Uploads kubejs/ → remote
│   ├── status.js           ← Compares src/ & kubejs/ vs remote
│   ├── extract-tags.js     ← Extracts tag data from mod JARs
│   └── fix-probe-types.js  ← Patches ProbeJS type generation bugs
├── lib/
│   └── sftp.js             ← Shared SFTP & path-mapping helpers
├── .env                    ← Connection config (git-ignored)
├── .env.example
└── package.json
```

### Path mapping

Scripts are mapped between the remote server layout and the local `src/` layout:

| Remote (server)          | Local (src/)        |
| ------------------------ | ------------------- |
| `server_scripts/foo.js`  | `server/foo.ts`     |
| `startup_scripts/foo.js` | `startup/foo.ts`    |
| `client_scripts/foo.js`  | `client/foo.ts`     |
| `config/common.json`     | `config/common.json`|

The `_scripts` suffix is stripped and `.js` is swapped to `.ts` for script directories. Non-script files (configs, etc.) keep their paths unchanged.

## Mod JARs

The modpack's `.jar` files must be present in the `mods/` directory for tag extraction to work. Place the mods from the latest serverpack into `mods/`. Alternatively, copy them from your Minecraft instance (e.g. `.minecraft/mods/`) or the server. The `mods/` folder is git-ignored.

## Type generation with ProbeJS

This project uses [ProbeJS](https://www.curseforge.com/minecraft/mc-mods/probejs) **7.7.2** to generate type definitions for the modpack. Run `/probejs dump` in-game to export type data, then place the generated `.probe/` folder in the project root. The `tsconfig.json` is already configured to pick up these definitions for autocomplete and type-checking in `src/`.

The raw ProbeJS output has several known bugs and uses opaque placeholder types. After dumping, run the full type setup pipeline:

```bash
# 1. Extract tag resource locations from mod JARs
npm run extract-tags

# 2. Fix syntax errors and inject real registry/tag IDs
node scripts/fix-probe-types.js
```

### Tag extraction (`extract-tags`)

Scans every `.jar` in `mods/` for tag definitions (e.g. `data/<namespace>/tags/items/foo.json`), deduplicates them across all mods, and writes the result to `.probe/tag_objects.json`. This gives you a complete map of all tag resource locations grouped by registry type (`minecraft:item`, `minecraft:block`, etc.), which is useful for referencing tags in KubeJS recipes and scripts.

### ProbeJS type fixer (`fix-probe-types`)

Runs two phases on the `.probe/` directory:

1. **Syntax fixes** — patches invalid TypeScript that ProbeJS generates:
   - Removes `public static` from get/set accessors inside interfaces
   - Closes an unclosed template literal in the `TagOf` type

2. **Registry ID injection** — replaces opaque `probejs$$` placeholder types with real unions:
   - `Special.Item`, `Special.Block`, `Special.Fluid`, etc. get unions of every registered ID from `.probe/registry_objects.json`
   - `Special.ItemTag`, `Special.BlockTag`, etc. get unions from `.probe/tag_objects.json` (produced by `extract-tags`)
   - `Special.Mod` gets a union of every mod namespace
   - `$ItemStack$$Type` is patched to use `Special.Item` for autocomplete
   - Any remaining `probejs$$` placeholders are replaced with `(string & {})` so they accept arbitrary strings without type errors

## Notes

- **Pull is destructive** — it replaces your local `src/` with the server version (except `globals.d.ts`, which is always preserved).
- **Push is destructive** — it removes remote files that don't exist locally, then uploads everything. A backup of the remote folder is created first if `REMOTE_BACKUP_PATH` is set.
- **Status has two checks** — file existence (src/ vs remote via path mapping) and size comparison (kubejs/ build output vs remote). This catches both unpushed new files and stale builds.
- Use `npm run status` to preview differences before pushing or pulling.
- The `.env` file is git-ignored so credentials stay local.
