# tools/deob — TaskTrove Pro image deobfuscation workspace

This directory contains the **extracted, publicly distributed TaskTrove Pro Docker
image** (`ghcr.io/dohsimpson/tasktrove-pro:latest`, pullable without auth) and the
**deobfuscated output** derived from it, plus the tooling to reproduce the analysis.

**Why this is committed:** the Pro edition's creator gave written permission for this
work to be deobfuscated and preserved here (see `FINDINGS.md` §2). The goal is to make
his work available and to reimplement Pro features openly in this repository
(`FINDINGS.md` §2, `plans/PLAN-pro-default.md`).

> Pro image code is the creator's work. It is kept here as reference material for the
> reimplementation effort — see FINDINGS.md before reusing anything from it.

## Layout

| Path | What it is |
| ---- | ---------- |
| `work/` | Raw bundles copied from the image (`rootfs/app/apps/web.pro/.next`), grouped as `server-chunks/`, `client-chunks/`, `routes/` — 111 files, ~19 MB. **Obfuscated as shipped.** |
| `out/` | webcrack output: `out/<group>_<name>/deobfuscated.js` — 708 files, ~35 MB. This is what you read during analysis. |
| `deob-all.ps1` | Batch pipeline (idempotent — skips files whose output is up to date). |
| `package.json` | Tooling manifest (`webcrack`). `node_modules/` and `package-lock.json` are git-ignored. |

## Prerequisites

- Node.js ≥ 22
- PowerShell 7+ (`pwsh`) for the batch script
- `npm install` inside this directory (installs `webcrack`)

## How to (re)run

```powershell
cd tools/deob
npm install                 # once
pwsh -File deob-all.ps1     # cracks everything in work/ into out/ (skips fresh outputs)
```

Single file:

```powershell
npx webcrack work\server-chunks\6315.js -o out\server-chunks_6315
```

To refresh `work/` from the image, re-extract and copy from
`rootfs/app/apps/web.pro/.next/{server/chunks,static/chunks,server/app}` — the original
extraction lives outside the repo (see FINDINGS.md §5 image location).

## How to read the output

- `out/**/deobfuscated.js` is **structured but not fully decoded**: control flow is
  flattened back, but many calls remain like `F(488, 930)` or `x(1004, 987, 1089, 1016)`.
- Those are **string-array decoder calls**. Each module has a decoder function
  (e.g. `function F(a, b) { … return c[a -= 388] }`) and a string table
  (e.g. `function J() { let a = ["isExpired", "ACHINES", …] }`).
  To decode a call: look up `table[index - offset]` from the module's table.
- The leftover `_0x…` identifiers are **dead-code decoys** injected by
  `javascript-obfuscator`; branches guarded by them never execute — ignore them.
- Literal fragments in concatenations (`"i.keygen.s"`, `"/licenses/"`, `"MACHINE_ID"`)
  are genuine strings the obfuscator split; concatenations of them reconstruct messages.
- Best starting points (already analyzed — see FINDINGS.md §5):
  - `out/server-chunks_6315/` — Keygen license module
  - `out/server-chunks_9069/` — scheduler (backup + calendar-refresh + license-check)
  - `out/server-chunks_middleware/` — request flow, `/error` license redirect
  - `out/server-chunks_1752/` — Pro data model (DataFile/settings/calendar schemas)
  - `out/routes_api_v1_rewards_route/` — rewards API contract
  - `out/routes_api_v1_user_route/` — multi-user API (admin guards, user limits)

## What we deliberately do NOT rebuild

License enforcement (Keygen API, machine fingerprints, license scheduler job).
It is documented in FINDINGS.md §5.2 purely so we can guarantee it never enters this
codebase. Pro here means "unlocked for everyone", not "phone home".
