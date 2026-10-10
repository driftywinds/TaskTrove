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
- Phase 7 (calendar sync) DEFERRED by user decision.
- Phase 8 (verification) local pass done; heavy checks run in GitHub Actions
  (.github/workflows/phase8-verify.yml) on origin = driftywinds/TaskTrove (user's fork).
  User supplies CI failure logs.

## Tooling
- tools/deob/decode-module.mjs <file> <moduleId> [out] — decodes obfuscated webpack modules
  (solves string-array rotation via checksum IIFE). Generalized: handles client chunks and
  small single-family modules. Commit decoded-*.js artifacts as reference.
- isPro() is hardcoded true in apps/web/lib/utils/env.ts; pro export conditions repointed
  to default files.

## Gotchas
- **Shell sandbox broken on W:\repos\TaskTrove**: every pwsh call needs
  sandbox_permissions=danger-full-access (grantWrite ACL fails, SetNamedSecurityInfoW err 5).
- quick-add-dialog.test.tsx fails ONLY under full-suite parallelism on constrained Windows
  hosts (~9-18 tests); passes standalone; pre-existing resource flake. Full web suite =
  182/184 files green with it + 1 skip.
- Root scripts historically had POSIX `test -f` guards; fixed via
  scripts/run-pro-if-present.mjs. Use `pnpm -r --if-present run typecheck` (tsgo, NOT raw
  tsc — tsc surfaces pre-existing lib errors in app/api/v1/assets/route.test.ts).
- eslint-config allowDefaultProject reserves *.pro.ts for ABSENT pro files; a real .pro.ts
  file fails lint — use plain .ts (project-permissions.ts precedent).
- Radix Select in jsdom: test-setup.ts has pointer-capture/scrollIntoView polyfills; drive
  with @testing-library/user-event.
- Upstream .github/workflows/docker-build-deploy.yml guarded with
  `if: github.repository == 'dohsimpson/TaskTrove'` (pushes to upstream registry).
