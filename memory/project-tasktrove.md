# TaskTrove Pro-Parity Fork (W:\repos\TaskTrove)

## Mission & stop condition

- Fork of dohsimpson/TaskTrove restoring full parity with the server-locked TaskTrove Pro,
  with all license shackles removed (no Keygen, no machine-ID, no phone-home). Creator gave
  written permission. Development STOPS once stability + parity reached (no show-stopping
  bugs); open to handover afterward. See README "Purpose of This Fork" + FINDINGS.md.
- Plan: plans/PLAN-pro-default.md. Reference: FINDINGS.md, tools/deob/ (deobfuscated Pro
  bundles, tracked in git).

## Phase status (as of 2026-10-10)

- Phases 0-6 complete (gates, schemas/migration, multi-user, rewards, people/assignees,
  stats+table views, reactions/colorpicker/RoleBadge, project member management).
- Phase 7 (calendar sync) = the ONLY remaining phase — STARTED 2026-10-11 (user assent).
  P7a recovery done: routes+engine decoded to tools/deob/out/routes/decoded-\*.js; FINDINGS
  §5.5b = the contract. CRITICAL: Pro calendar state is an IN-MEMORY process singleton
  (globalThis.**tasktrove**, module 29276 BY) — no calendar data file; remote is source of
  truth; cache rebuilt by syncs (schedule runOnInit re-warms after restart). GET /api/v1/
  calendar = state; POST = run sync; events POST/PATCH/DELETE push local changes in-request;
  NO GET /events. Remaining decode targets: schema module 85425, pushLocalChanges internals,
  client calendar atoms. decode-module.mjs handles single-line route chunks + minified
  rotations (dir is prettier-ignored: use --ignore-path override to format artifacts).
- Phase 8 (verification) is COMPLETE: CI all green on driftywinds/TaskTrove
  (.github/workflows/phase8-verify.yml) — typecheck, lint, TZ-pinned serial tests,
  Next standalone build, Docker image build + first-run smoke test, no-license guard.
- Testing infra (per user request): .github/workflows/docker-publish.yml builds/pushes
  multi-arch (amd64+arm64) images to ghcr.io/driftywinds/tasktrove:edge (+ sha-<short>).
  Staging host stack: selfhost/docker-compose.staging.yml + selfhost/.env.example
  (container tasktrove-staging, data dir ./data-staging, TASKTROVE_IMAGE/TASKTROVE_PORT
  overridable; .env.example un-ignored via .gitignore negation).

## Tooling

- tools/deob/decode-module.mjs <file> <moduleId> [out] — decodes obfuscated webpack modules
  (solves string-array rotation via checksum IIFE). Generalized: handles client chunks and
  small single-family modules. Commit decoded-\*.js artifacts as reference.
- isPro() is hardcoded true in apps/web/lib/utils/env.ts; pro export conditions repointed
  to default files.

## Gotchas

- **Shell sandbox broken on W:\repos\TaskTrove**: every pwsh call needs
  sandbox_permissions=danger-full-access (grantWrite ACL fails, SetNamedSecurityInfoW err 5).
- quick-add-dialog.test.tsx "Parsed Values Management" + recurring-task/week-picker date
  tests are a UPSTREAM FLAKE FAMILY with two causes: (1) TZ-dependence (fail under
  Asia/Kolkata, pass under America/New_York — CI must pin TZ); (2) quick-add timeouts under
  shared worker pools (fix: --no-file-parallelism). Verified fully green: 184 files /
  2449 tests with TZ=America/New_York + --no-file-parallelism. CI workflow
  phase8-verify.yml pins both; web shards run via scripts/run-vitest.mjs directly.
- Root scripts historically had POSIX `test -f` guards; fixed via
  scripts/run-pro-if-present.mjs. Use `pnpm -r --if-present run typecheck` (tsgo, NOT raw
  tsc — tsc surfaces pre-existing lib errors in app/api/v1/assets/route.test.ts).
- eslint-config allowDefaultProject reserves \*.pro.ts for ABSENT pro files; a real .pro.ts
  file fails lint — use plain .ts (project-permissions.ts precedent).
- Radix Select in jsdom: test-setup.ts has pointer-capture/scrollIntoView polyfills; drive
  with @testing-library/user-event.
- Upstream .github/workflows/docker-build-deploy.yml guarded with
  `if: github.repository == 'dohsimpson/TaskTrove'` (pushes to upstream registry).
- **First-run on a fresh instance (Docker staging incident 2026-10-11)**: a fresh data dir
  means NO data.json → `/api/health` = `needs_initialization` (200) and EVERY
  `/api/v1/*` route 500s with "File reading failed" BY DESIGN (`safeReadDataFile` returns
  undefined → routes fatal). The UI gate is the inline "First Time Setup Required"
  StartupAlert banner in main-content — NON-BLOCKING, so the app looks usable while
  everything 500s. User must click Initialize (POST /api/data/initialize) or POST
  /api/initial-setup first (CI smoke does the latter). Directory write-test passes even
  when file absent (health 200 needs_initialization proves /app/data is writable — not a
  permissions problem). USER SAW THE BANNER and chose KEEP UPSTREAM UX (no blocking-gate
  change); resolution = click Initialize.
