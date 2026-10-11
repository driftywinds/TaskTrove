# PLAN-pro-default.md — Make TaskTrove Pro-by-Default

> Review document per CLAUDE.md. **Do not implement until approved.**
> Companion: `FINDINGS.md` (investigation + deobfuscation reference).

## Goal

Reimplement the Pro edition — recovered from the publicly distributed, deobfuscated
`ghcr.io/dohsimpson/tasktrove-pro` bundle — into this repo so that **every user, on first
setup, has all Pro features**, with **no license checks anywhere**, while the **existing
Docker build keeps working unchanged**.

Approved scope decisions (user, this run): full parity · adopt multi-user · calendar sync
as final phase · license enforcement omitted entirely.

## Guiding principles

1. **Fold Pro into the default source** — `apps/web` and `packages/*` become the single
   edition. `isPro()` returns `true`; the dormant `pro` export conditions are **repointed
   to the same files as `default`** so any `--conditions=pro` invocation also resolves
   (never broken, never required). No Dockerfile change; no build-arg toggle.
2. **No Keygen, no machine ID, no license env vars, no license scheduler job** — the
   feature simply doesn't exist in this codebase.
3. **Data compatibility**: existing base data files must load unchanged (automatic
   migration), and data files written by the _official_ Pro image should also load where
   feasible (union-tolerant schemas).
4. **Repo stays green after every phase**: `typecheck:base`, lint, full test suite pass.
   Existing tests that encode base-only behavior are updated to the new truth, not skipped.
5. Pro bundle is a **behavioral reference**, not code we paste: schemas/contracts/UI flows
   are re-derived from `tools/deob/out/**` into clean TypeScript that matches this repo's
   conventions (Zod-first, branded IDs, atoms, tests).

---

## Phase 0 — Flip the gates (small, unblocks everything)

| #   | Change                                                                                                                                                  | File(s)                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 0.1 | `isPro()` → `return true`                                                                                                                               | `apps/web/lib/utils/env.ts`                                  |
| 0.2 | `isValidCategory()` → allow all (incl. `productivity`, `users`)                                                                                         | `packages/atoms/src/ui/settings.ts`                          |
| 0.3 | Repoint every `"pro"` export condition to the default file                                                                                              | `packages/{atoms,types,utils,constants,parser}/package.json` |
| 0.4 | Update-checker: keep checking `dohsimpson/TaskTrove` (this repo's lineage); drop the `isPro() ? TaskTrovePro : …` branch                                | `apps/web/hooks/use-update-checker.ts` + test                |
| 0.5 | Audit tests that assert base behavior (`coming-soon-wrapper`, `nav-user`, `view-options`, `health`, `loading-screen`) and update expectations to Pro-on | respective `.test.*`                                         |
| 0.6 | `ProBadge`/upsell copy audit: "Upgrade to Pro" block disappears via `!isPro()` automatically; no code change                                            | —                                                            |

**Exit criteria:** UI shows Pro chrome (Table/Stats modes, productivity/users settings
categories, Pro title, `edition: "pro"`); `pnpm -r typecheck:base` + tests green.

> Known gaps at this point (expected, filled by later phases): Table/Stats render `null`,
> assignee/reward popovers are no-ops, rewards atom throws, user/productivity forms empty.

## Phase 1 — Data model & schemas (foundation for 2–7)

All in `packages/types` (+ `packages/constants` defaults, `packages/atoms` typing touch-ups).

- **Task**: `ownerId?: UserId | null`, `assignees?: UserId[]`, `reward?: {currencyId, amount>0}`.
- **Comment**: `reactions?: {emoji, userId}[]`.
- **User**: `role: "admin" | "user"` (default `"admin"` for first user), `preferences?`.
- **DataFile**: accept legacy single `user` object **and** arrays; normalize to `users`
  (1–5). Pro wrote the array back into the `user` key — we write `users` and accept both
  keys on read (union-tolerant, documented).
- **DataFile**: `rewardEvents[]`, `currencyRewardEvents?[]`, `edition?: "pro"`.
- **Project**: `members?: UserId[]`.
- **Settings**: `data.calendarSync[] (max 10)`, `data.calendarSyncSchedule {enabled, cron, runOnInit?}`,
  `general.newTaskOwnership?: "currentUser" | "unassigned"`, and the productivity block:
  `rewardsEnabled?`, `rewardTheme`, `dailyRewardPointCap`, `currencyRewardsEnabled?`,
  `customCurrencies[]` (refine: contains default currency), `wishlistItems[]`, `rewardLevels`.
- **Calendar store schemas**: `calendars[]`, `objects[]`, `summary`, `lastSyncedAt`
  (shape from FINDINGS §5.4) — persisted as a separate data file (pro read it via its own
  file helper; confirm exact filename during implementation from route code).
- **Views**: add `assigned-to-me`, `assigned-to-others` to `STANDARD_VIEW_IDS` +
  `STANDARD_VIEW_METADATA` (+ i18n).
- **API routes constants**: `V1_REWARDS`, `V1_CALENDAR`, `V1_CALENDAR_DISCOVER`,
  `V1_CALENDAR_EVENTS`, `V1_MOBILE_LOGIN`.
- **Migration**: extend schema-version + `/api/data/migrate` so base files upgrade
  (single user → `users[0]` role `admin`, defaults for new settings). Round-trip tests:
  base→pro, pro-image→ours.

**Exit criteria:** typecheck green; migration tests pass; old data file loads.

## Phase 2 — Multi-user auth, user API, user management UI

- **Auth** (`apps/web/auth.ts`): login iterates `users`, verifies username+password,
  puts `id` + `role` into JWT/session. Initial-setup: create first admin (multi-user aware).
- **Header/SSO auth** (Pro feature): `Remote-User`-style header handling in
  `proxy.ts` + login form `headerAuthUser` flow — base login-form tests already specify
  this contract (`SSO Header Authentication Mode`).
- **`/api/v1/user`**: GET (list, non-sensitive), POST (admin create; hash password via
  existing `@tasktrove/utils` bcrypt; duplicate-username check; **fixed generous user cap,
  no license lookup**), PATCH (admin update role/password/username; self-guard rules from
  pro bundle: "Admins can't delete self", "Admins can't…"), DELETE (admin, not self,
  cascade nothing — tasks keep ownerId; orphaned ids render "Unknown user").
- **Avatar**: keep base avatar file handling; add Pro's data-URL validation rules
  (png/jpg/webp) if base lacks them.
- **UI**: implement `user-management-form.tsx` (users table: username, role badge, avatar,
  task/project counts, add/edit/delete dialogs, `(You)` marker) using recovered strings.
- **`POST /api/v1/mobile/login`**: username/password → session token (uses existing auth
  utils; small route).
- **Settings → Users category** now renders (was `null`).

**Exit criteria:** two users can log in, roles enforced (admin-only mutations), tests.

## Phase 3 — Rewards & productivity

- **Atoms**: real `core/rewards.ts` + `mutations/rewards.ts` (fetch/cache reward events,
  create mutation with optimistic append), `rewardsQuery`/`currencyRewardsQuery` pattern
  matching pro (`usersQuery` style seen in bundle).
- **API**: `app/api/v1/rewards/route.ts` — GET (events + meta) and POST (validated event;
  points path + currency path; wishlist redemption requires `currencyId`+`amount`),
  `allowApiToken: true`, no-store caching, business-event logging — mirrors base route
  conventions (`withAuthentication` + `withApiVersion` + `withApiLogging`).
- **UI**:
  - `productivity-form.tsx`: points rewards enable + daily cap + per-task cap; currency
    rewards enable; custom currency manager (name/code/color/icon, public/private,
    exchange rate); wishlist manager; reward themes/levels.
  - `CurrencyRewardPopover/Badge/Content`: task-side reward chip, quick amounts, save.
  - Rewards badge in `page-header.tsx` (currently commented Pro-only slot).
  - Nav item(s) for currency rewards view per pro nav (`/rewards/…`).
- Task-completion hook: award points event (Pro logs `TASK_COMPLETED` reward event via the
  mutation atom — integrate where base completes tasks).

**Exit criteria:** enable rewards in settings → completing tasks accrues points → wallet
UI shows balance; wishlist redemption writes event; API tests included.

## Phase 4 — Assignees, owners, people panel, assigned-to-\* views

- Implement `AssigneeBadges`, `OwnerBadge`, `AssigneeManagementPopover`,
  `OwnerManagementPopover`, `PeopleManagementPopover`, `Owner/AssigneeFilterSection`,
  `BulkAssigneeButton` against `users` list (Phase 2) using pro strings/flows
  (transfer ownership, `Unknown user`, "You" highlight, public/private project semantics).
- **People panel** (side panel): owner + assignees collapsible sections —
  `peopleOwnerCollapsed/peopleAssigneesCollapsed` already exist in base types.
- **Views**: `assigned-to-me` / `assigned-to-others` nav items (base `main-nav-items` +
  route parsing + filter atoms; pro route grammar `/assigned-to-me`,
  `/assigned-to-others`, with `routeType`/`baseFilter` handling recovered from bundle).
- **Filter plumbing**: `activeFilters.ownedBy/assignedTo` extension in ViewState +
  `filters` atoms (pro `filters.pro.ts` behavior reimplemented in default file).
- **Permissions (light)**: project `members` + owner checks for group/project context
  menus (pro `project-permissions` behavior); full admin/owner rules recovered from bundle
  messages ("Only the project owner or an admin can…").
- Quick-add people popover + parser `@assignee` extraction (pro `AssigneeExtractor`).
- `newTaskOwnership` setting honored when creating tasks.

**Exit criteria:** assign tasks to users, filter by assignee/owner, assigned-to-\* routes work.

## Phase 5 — Table view & Stats view

- **`table-view.tsx`**: `@tanstack/react-table` (add to `apps/web/package.json` — already
  in catalog) with pro column set (task, owner, labels, due date/time, priority, section,
  recurring, estimation, status/completed, assignees), sorting, row selection, sticky
  header; respects `viewState` sort + project/section grouping.
- **`stats-view.tsx`**: metric cards (tasks completed, streak, focus time, productivity
  score /100 with trend thresholds) + charts. Reuse existing `components/analytics/*`
  (dashboard, heatmap, streak, chart) — wire `StatsView` to render the analytics dashboard
  in stats layout per pro's compact card header, rather than building from scratch.
- View options already expose modes (Phase 0); add any missing i18n labels.

**Exit criteria:** both modes render real data; component tests.

## Phase 6 — Remaining UI parity — **COMPLETE** ✅

Part 1:

- ✅ `CommentReactions` + `AddReactionButton` — recovered Pro contract (module 25748 /
  client 41745): fixed 10-emoji palette (`👍 ❤️ 😊 😂 🎉 🚀 👀 🔥 ✨ 💯`), per-emoji grouping
  with counts, per-user toggle semantics, reacting-usernames tooltip,
  `comment-react-button-<id>` test id; writes via the task comments array (draft
  comments are no-ops, matching Pro's task lookup).
- ✅ `CustomColorPicker` — recovered Pro contract (client 41745 `T5`/`T6`/`T7`): HSL
  saturation/lightness area + hue slider with window drag, live preview + validated hex
  input, Clear/Apply actions, exact `hexToHsl`/`hslToHex` implementations.
- ✅ `RoleBadge` — recovered contract: outline "Admin" badge for admins, null otherwise.
- ✅ Group "Members" coming-soon slot removed — Pro has **no** group-level members
  (absent from the Pro data model, i18n, and bundle); members are a project concept.
- ✅ Coming-soon modal copy: dropped the "exclusive Pro feature" upsell branch (every
  feature is Pro now).

Part 2 (project member management):

- ✅ Helpers (`@tasktrove/utils/project-permissions`, module 10326 verbatim): owner is
  **`members[0]`** (no separate ownerId field), public ⇔ members empty, `canManage` =
  owner|admin, and the exact guard errors ("Cannot remove member from public project",
  "Cannot remove owner. Transfer ownership first.", "Cannot remove last member. Use
  makeProjectPublic() instead.", "Cannot transfer ownership of a public project",
  "Project is already public", "Only the owner can make a project public").
- ✅ Atoms (`core/projects.ts`): `addProjectMemberAtom` (skip when already a member;
  first member of a public project becomes owner), `removeProjectMemberAtom` (soft
  owner guard + verbatim toast), `transferProjectOwnershipAtom` /
  `makeProjectPublicAtom` (owner|admin guard with the verbatim "Only the project owner
  or an admin…" toasts) — all persisting via the existing projects mutation (Pro's
  client-side PATCH flow).
- ✅ `ProjectMembersDialog` (recovered layout): add-member Select + button, members
  table (avatar / username / `(You)` / Owner badge with check for `members[0]` /
  Member badge), actions gated exactly like Pro (Actions column for members; make-owner
  for the owner; remove for owner-or-self with "Leave project"/"Remove member" titles),
  public notice vs owner-only "Make project public" panel.
- ✅ Project context menu: "Members" item + dialog mount (Pro `RL` wrapper behavior).
- ✅ Server-side deviation (documented): PATCH `/api/v1/projects` rejects member updates
  that strip `members[0]` while keeping others (400, verbatim message) — Pro enforces
  membership client-side only.
- ⬜ Scheduler `calendar-refresh` row — lands with Phase 7's scheduler job (**no license
  row**, ever).

## Phase 7 — Calendar sync — ⏸ **DEFERRED BY DECISION**

> Paused before starting. Phase 8 verification runs first (with the heavy build
> checks on GitHub Actions); calendar sync resumes after that passes. _(Phase 8 has since
> passed CI green; Phase 7 is the final phase and is awaiting the go-ahead.)_

- **New package** `packages/calendar-sync` (`@tasktrove/calendar-sync`): CalDAV client on
  `tsdav` + `ical.js`/`ics` (add to catalog: `ical.js`, `ics`, `tsdav`) — discovery,
  credential verify, event fetch/refresh with etag/syncToken, diff summary counters
  (created/updated/deleted calendars+objects) per schema §5.4.
- **API**: `/api/v1/calendar` (CRUD credentials, encrypted-at-rest if base has an
  encryption util — `@tasktrove/utils/encryption` exists), `/calendar/discover`,
  `/calendar/events`.
- **Settings UI**: `Settings → Data → Calendar Sync` connections manager (name, color,
  server URL, username, app password, auth method, timezone, allowInsecure, cron,
  enabled; test connection; delete confirm — i18n key already exists in base).
- **Scheduler**: register `calendar-refresh` job (cron from `settings.data.calendarSyncSchedule`)
  in bootstrap alongside backup — extend `apps/web/lib/scheduler/bootstrap.ts`.
- **Calendar view**: external events overlay in `calendar-view.tsx` (pro-only drag atoms
  `externalCalendarEvent*` already exist in `packages/atoms/src/ui/drag.ts`;
  `showCalendarEvents` + `calendarAutoSyncMinutes` settings already exist in base types).

**Exit criteria:** add a CalDAV connection → discover → events appear on calendar →
scheduled sync job listed in scheduler settings.

## Phase 8 — Verification & Docker compatibility — ✅ **COMPLETE — CI ALL GREEN**

CI run on `driftywinds/TaskTrove` (`phase8-verify.yml`): typecheck · lint · full tests
(TZ-pinned, serial files) · Next standalone build · Docker image build + first-run smoke
test (`needs_initialization` → `POST /api/initial-setup` → `healthy`, `edition: "pro"`
end-to-end) · no-license-code guard — **all jobs green**.

Follow-up deliverables (testing infrastructure, per user request):

- `.github/workflows/docker-publish.yml` — multi-arch (amd64+arm64) images published to
  `ghcr.io/driftywinds/tasktrove:edge` (+ immutable `sha-<short>` tags, optional manual
  extra tag).
- `selfhost/docker-compose.staging.yml` + `selfhost/.env.example` — staging host stack
  (container `tasktrove-staging`, data dir `./data-staging`, `TASKTROVE_IMAGE` /
  `TASKTROVE_PORT` overridable, `.env.example` un-ignored in git).

Staging test log (user-driven, 2026-10-11):

- **Multi-arch publish run #1 succeeded** in ~80 s — expected, not too fast: the amd64
  builder layers were 100% GHA-cache hits (the verification workflow had just built the
  same tree), and arm64 only adds the thin runner stage because the Dockerfile pins all
  build stages to `$BUILDPLATFORM` (Next build runs natively once, shared by both
  targets). Published `edge` + `sha-72e2009`, both platforms, index digest
  `sha256:09df223d…`.
- **First-run incident**: fresh instance → every `/api/v1/*` 500s "File reading failed"
  because `data.json` doesn't exist until initialized. **Not a permissions problem** —
  health 200 `needs_initialization` proves the directory write-test passed; the log shows
  no init call ever happened. The gate is the inline (non-blocking) "First Time Setup
  Required" banner; the user saw it and resolved via Initialize. **Decision: keep
  upstream UX** (no blocking-gate change). Pre-init 500s are base-repo designed behavior;
  `safeReadDataFile` has no default fallback by design.

| Check           | Result                                                                                                                                                                                                                                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Typecheck       | ✅ `pnpm -r --if-present run typecheck` green across all 13 projects (root POSIX issue long fixed via `run-pro-if-present.mjs`)                                                                                                                                                                                                  |
| Lint            | ✅ `pnpm lint` green (8/8 tasks)                                                                                                                                                                                                                                                                                                 |
| Tests           | ✅ atoms 597 · utils 404 · types 25 · web 182/184 files green (1 = known quick-add parallelism flake — passes standalone; 1 skipped)                                                                                                                                                                                             |
| Build           | 🔶 `pnpm build` — runs in **CI** (`phase8-verify.yml` → "Next.js standalone build"); too heavy for the local machine                                                                                                                                                                                                             |
| Frozen lockfile | ✅ `pnpm install --frozen-lockfile` clean (4.8 s, pnpm 10.18.1)                                                                                                                                                                                                                                                                  |
| Docker          | ✅ structural: Dockerfile / compose / turbo.json / workspace untouched vs upstream (only `.dockerignore` + Phase 5 lockfile importer differ); 🔶 image build + **first-run smoke test** in CI (fresh dir → `needs_initialization` → `POST /api/initial-setup` → `healthy`, `edition: "pro"` asserted throughout, no license env) |
| Data compat     | ✅ fixtures: legacy base file, official Pro-image file (users under `user`), and a new **full** Pro file covering Phase 4–6 schemas (`ownerId: null`, assignees, reactions, members, currencyRewardEvents, calendar-sync settings) — all parse + normalize                                                                       |
| First-run       | ✅ unit: `/api/health` asserts `edition: "pro"`; 🔶 end-to-end first-run exercised in the CI Docker smoke test                                                                                                                                                                                                                   |
| License absence | ✅ source scan clean (`api.keygen.sh` / `LICENSE_KEY` / `MACHINE_ID`); standing **CI guard** fails the build if any marker re-enters `apps/`, `packages/`, `scripts/`                                                                                                                                                            |

CI workflow: `.github/workflows/phase8-verify.yml` (push to `main`, PRs, manual dispatch).
The inherited upstream `docker-build-deploy.yml` is now guarded with
`if: github.repository == 'dohsimpson/TaskTrove'` so it skips on forks instead of failing
(it pushes to the upstream registry and needs the maintainer's secrets).

## Risk register

| Risk                                                  | Mitigation                                                                                                           |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Tests encode base-only expectations                   | Phase 0.5 audits and updates them; never disable tests                                                               |
| Data schema change breaks existing installs           | Union-tolerant read + explicit migration + fixtures (Phase 1)                                                        |
| Pro bundle strings recovered but some logic ambiguous | Deob reference stays available (`tools/deob/out`); ambiguity → choose simplest behavior matching strings; note in PR |
| Scope sprawl in rewards (exchange rates, themes)      | Implement in order: points → currencies → wishlist → themes/levels; each independently shippable                     |
| Windows host quirks (POSIX scripts)                   | Use `typecheck:base` / `pnpm -r --if-present`; don't "fix" unrelated scripts                                         |
| Adding deps breaks frozen lockfile                    | All new deps via `catalog:` + single `pnpm install` per phase                                                        |
| Multi-user security (privilege escalation)            | Admin-only mutation guards server-side (not just UI), covered by API tests                                           |

## Deliverables checklist

- [x] Phase 0 gates (commit `1292e76`)
- [x] Phase 1 schemas + migration (commit `0caea81`)
- [x] Phase 2 multi-user auth/API/UI + mobile login (commits `196cc4e`, `b4a9b73`)
  - [x] Route contract extraction (module 50278 fully decoded)
  - [x] `apps/web/auth.ts` — multi-user credentials provider, role in JWT, header-auth SSO provider
  - [x] `POST /api/v1/user` — admin create with duplicate check, user limit
  - [x] `PATCH /api/v1/user` — admin update with self-guard rules
  - [x] `DELETE /api/v1/user` — admin delete with cascade (tasks/comments/reactions/members)
  - [x] `GET /api/v1/user` — returns full users array (Pro contract)
  - [x] `POST /api/v1/mobile/login` — 7-day JWT for the mobile app
  - [x] Client data layer — `usersQueryAtom`, `usersAtom`, `currentUserIdAtom` +
        `CurrentUserSync` (session→atoms), create/delete/update user mutations
  - [x] `user-management-form.tsx` — users table, role badges, add/edit/delete dialogs,
        `(You)` marker, user limit, task/project counts, admin-only actions
  - [x] Settings → Users category renders (already wired in settings-dialog; `adminOnly`
        categories now actually filtered by session role)
  - [x] i18n keys — `usersManagement.*` (settings) + `categories.users/productivity`
        (dialogs) in `en` (repo convention: English is the only full namespace; other
        9 locales have `common.json` only and fall back to English)
  - [x] Typecheck + lint + tests green at phase close
- [x] Phase 3 rewards (API + settings + task UI) — commit `fdf753d` (core engine complete;
      optional polish pending: wishlist "Redeem" button, currency quick-amounts)
- [x] Phase 4 people/assignees/assigned-to-\* views — core `70f34a1` + remainder (assigned
      views, People panel, filter sections, bulk assign, table columns, newTaskOwnership)
      — **complete** (see Progress log)
- [x] Phase 5 table + stats views (commit `c1c16b6`; owner/assignee columns await Phase 4 wiring)
- [x] Phase 6 parity (parts 1+2: reactions/color/roles/nav + project members; scheduler
      `calendar-refresh` row deferred to Phase 7 with its job)
- [x] Phase 8 verification — **CI all green** (typecheck, lint, TZ-pinned serial tests,
      standalone build, Docker image build + first-run smoke, license guard); follow-ups
      landed: multi-arch `docker-publish.yml` + staging compose/env files
- [ ] Phase 7 calendar sync (final phase — **awaiting user go-ahead**)
- [x] `FINDINGS.md` updated as phases land; `plans/` kept as record (in progress per phase)

## Progress log (implementation)

| Date                        | Landed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Evidence                                                                                                                                                                                                                                                                                             |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase 0                     | `isPro()` → true; 38 pro conditions repointed to default files; settings categories open; update-checker pinned to TaskTrove; base-expectation tests updated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | typecheck + targeted tests green; commit `1292e76`                                                                                                                                                                                                                                                   |
| Tooling                     | `tools/deob/decode-module.mjs` (rotation-solver + string-array inliner for any webpack module in the deobfuscated bundles); `tools/deob/PRO-SCHEMAS.md` (exact recovered contract)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | commit `4c93af2`                                                                                                                                                                                                                                                                                     |
| Phase 1                     | Full Pro data model in `@tasktrove/types`: User role+preferences, Task ownerId/assignees/reward, Comment reactions, Project members, ViewState assignedTo/ownedBy filters; new rewards/calendar/reward-levels modules (7 themes × 10 levels, exact Pro names); settings extensions (calendarSync, calendarSyncSchedule, newTaskOwnership, productivity); DataFile with canonical `users` + union-tolerant reads (legacy single `user`, official Pro image array-under-`user`); `DEFAULT_MAX_USERS = 50` (no license logic); cron validator; migration v0.13.0; multi-user-aware auth/middleware/initial-setup/user-route reads                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | all package + web typecheck; lint clean; full package suites green; new pro-schema/migration/safe-file tests; commit `0caea81`                                                                                                                                                                       |
| Phase 5                     | `StatsView` renders the analytics dashboard (Pro metric set: completed/streak/focus-time/productivity-score ≥70 trend); `TableView` on @tanstack/react-table with the full Pro column set, viewState-initialized sorting, completion toggle, sticky header, empty state; `@tanstack/react-table` added from catalog                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | component tests (7 + 3); commit `c1c16b6`                                                                                                                                                                                                                                                            |
| Fixes                       | `.husky/pre-commit` was a JS file executed by `sh` (broke all commits) → proper sh no-op; previously-empty `safe-file-operations.test.ts` replaced with 13 real tests                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | commits above                                                                                                                                                                                                                                                                                        |
| Phase 2 contracts           | Extracted full `/api/v1/user` GET/POST/PATCH/DELETE contracts from `decoded-50278.js` using family-2 decoder (`decode-user-route.mjs`, rotation 190, target `635102`). Recovered all verbatim strings: error messages (`"Admins can't delete self"`, `"Cannot change own role"`, `"User limit reached"`, `"Username already exists"`, `"Cannot delete self"`), admin guards, user-limit logic, avatar/password processing, cascade cleanup on delete (tasks→ownerId nil, assignees filter, comments reactions filter, projects→members filter, rewardEvents filter), business event names (`user_created`, `user_updated`, `user_deleted`, `users_fetched`), response shapes (`user: User[]` with `meta.count`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | tools/deob/decode-user-route.mjs + decoded-50278.js (passes 2)                                                                                                                                                                                                                                       |
| Phase 2 server + data layer | `/api/v1/user` GET/POST/PATCH/DELETE per recovered contract (verbatim messages, admin guards from session-resolved role, fixed `DEFAULT_MAX_USERS` cap, full delete cascade incl. `currencyRewardEvents`); `POST /api/v1/mobile/login` (7-day JWT, `AUTH_SECRET` missing → 500, invalid → 401); multi-user credentials login (case-insensitive username, legacy username-less path only for single-user files) + `header-auth` SSO provider; session/JWT carry real user id + `role`; auth middleware attaches `authUser {id, role}` resolved from the data file per request (+ `getAuthUser()` helper, auth-disabled fallback = first user); `CreateUserRequestSchema`/`AdminUpdateUserRequestSchema`/`DeleteUserRequestSchema`/`MobileLoginRequestSchema` + response schemas; client: `USERS_QUERY_KEY`, `usersQueryAtom` (replaces `userQueryAtom`), real `usersAtom`, `currentUserIdAtom` + `CurrentUserSync` (NextAuth session → atoms), user mutations retargeted to users array (update/create/delete); `userByIdAtom` repurposed as id→user selector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | full workspace typecheck; lint clean (web/atoms/constants/types); web suite 168/170 files green (2 = known quick-add flake + pre-existing skip), atoms 577 green; 69 dedicated Phase 2 tests; commit `196cc4e`                                                                                       |
| Phase 2 UI + i18n           | `UserManagementForm` replaces the `null` stub: users table (avatar/username/role badge/`(You)` marker/task+project counts), user-limit line, admin-only Add/Edit/Delete dialogs (inline validation; edit hides role control for self per "Admins can't change own role"; delete disabled for self + last user; mutation failure keeps dialog open), non-admin read-only view; settings-dialog now enforces `adminOnly` (scheduler + users hidden from non-admins); `usersManagement.*` + `categories.users/productivity` English i18n; atoms-mocks `isValidCategory` updated to real Phase 0 behavior                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | full workspace typecheck; lint clean; web suite 169/171 files green (2 = known quick-add flake + pre-existing skip); 24/24 targeted UI tests; commit `b4a9b73`                                                                                                                                       |
| Phase 3 rewards             | `/api/v1/rewards` GET+POST per recovered contract (module 59451; points path = fixed `Uo=10`, currency path with `currencyId`+`amount`, `WISHLIST_REDEEMED` requires currencyId+amount, acting user from session, verbatim success messages); `CreateRewardEventRequest/Response` + `GetRewardsResponse` schemas; `REWARDS_QUERY_KEY` + `DEFAULT_REWARD_POINTS=10`; `rewardsQueryAtom`/`rewardsAtom`, real `createRewardEventMutationAtom` (replaces throwing stub), `awardTaskCompletedPointsAtom` wired into `toggleTaskAtom` (fire-and-forget; no-ops when `rewardsEnabled` false or daily cap reached); full Productivity settings form (points/currency toggles, daily cap, custom-currency manager with protected default currency, wishlist manager, theme picker with level preview); task reward chip `CurrencyRewardBadge/Popover/Content`; header points-balance `RewardsBadge`; i18n `productivity.*` + `rewards.*`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | full workspace typecheck; lint clean (types/atoms/constants/web); atoms 577 green; web suite 172/174 files green (2 = known quick-add flake + pre-existing skip); 21 reward tests (11 route + 7 productivity + 3 badge); commit `fdf753d`                                                            |
| Phase 4 remainder           | **Assigned views**: `assignedToMeTasksAtom`/`assignedToOthersTasksAtom` with the semantics decoded from module 25748 and triple-confirmed (server build, client build `decoded-41745.js`, search-candidate code): me = `assignees?.includes(me)`; others = `ownerId === me && assignees?.length > 0 && !assignees.includes(me)` (ownership condition reproduced verbatim); routed in `baseFilteredTasksAtom`, sidebar counts + nav items + `mainNav.assignedTo*` i18n **in all 10 locales using Pro's own translations**. **People panel** (`people-panel.tsx`): recovered `OP`/`OH`/`OL` contracts — Owner section (Public row → `ownerId: null`, destructive "Unknown owner" clear, admin-gated candidate list, non-admin self-only), Assignees section (destructive unknown-user removal, toggle, "(You)" badge), collapsible via `peopleOwnerCollapsed/peopleAssigneesCollapsed`, mounted through `PeoplePopover` (w-80/p-2/max-h-400 per recovered `RH`) in the task side panel. **Former stubs implemented**: `OwnerFilterSection`/`AssigneeFilterSection` (drive `activeFilters.ownedBy/assignedTo` with recovered `filters.owner/assignees` keys), `BulkAssigneeButton` (recovered `bulkAssignUsers` contract: add-to-selected + unassign-all). **Table view**: real `usersAtom` wiring (owner column), new Assignees column. **newTaskOwnership**: `addTaskAtom` reproduces Pro defaulting (`?? "currentUser"` → current user id, `"unassigned"` → public). `TaskSchema.ownerId` made `nullable().optional()` (owner-clear parity + accepts official Pro files storing `null`); `ownerId` added to `DEFAULT_NULLABLE_UPDATE_FIELDS`; `filterTasksByOwner` null-safe | full workspace typecheck green; full atoms suite 47 files / 597 tests green (incl. 9 assigned-view + 4 ownership tests); web suite per-file green (people-panel 10, filter sections 6, bulk 3, table-view, sidebar-nav, task-side-panel, selection-toolbar 21); 30+ new tests                        |
| Phase 6 (parity part 1)     | **Comment reactions** (`CommentReactions`/`AddReactionButton`): recovered fixed 10-emoji palette, per-emoji grouping + counts, per-user toggle (`toggleCommentReaction` pure helper), usernames tooltip, `comment-react-button-<id>` test id, writes through the task comments array (draft comments no-op like Pro's task lookup). **CustomColorPicker**: recovered HSL SV-area + hue slider with window drag, live preview + hex-validated input, Clear/Apply, exact `hexToHsl`/`hslToHex` from client module 41745. **nav RoleBadge**: outline "Admin" for admins, null otherwise. **Removed** the group "Members" coming-soon slot (Pro groups have no members — verified absent from Pro data model, i18n, and bundle). **Copy**: dropped the "exclusive Pro feature" branch from the coming-soon modal. i18n `reactions.*` keys added                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | web typecheck + lint green; new tests: comment-reactions 8, role-badge 2, custom-color-picker 4; affected existing tests green (comment-item, nav-user, group-context-menu, coming-soon-modal, color-picker = 38); full web suite 181/183 files green (1 = known quick-add flake, 1 skipped)         |
| Phase 6b (project members)  | **Module 10326 fully decoded** (`decoded-10326.js`): membership helpers with owner = `members[0]`, public ⇔ empty members, `canManage` = owner\|admin, six verbatim guard errors. Implemented as pure helpers in `@tasktrove/utils/project-permissions` (the pre-declared export map slot) + 14 helper tests. **Atoms** (`core/projects.ts`): `addProjectMemberAtom` (already-member no-op toast; first member of public project becomes owner), `removeProjectMemberAtom` (soft verbatim owner-guard toast), `transferProjectOwnershipAtom` / `makeProjectPublicAtom` (owner\|admin guard, verbatim "Only the project owner or an admin…" toasts), all via `updateProjectsMutationAtom` (Pro's client-side PATCH flow). **`ProjectMembersDialog`** (recovered layout): add-member Select + button, members table (avatar, username, `(You)`, Owner check-badge for `members[0]`, Member badge), Pro-exact action gating (Actions column for members; make-owner owner-only; remove for owner-or-self with "Leave project"/"Remove member" titles), public notice vs owner-only "Make project public" panel; wired into the project context menu ("Members" item). **Server deviation (documented)**: PATCH `/api/v1/projects` rejects stripping `members[0]` while keeping others (400 + verbatim "Cannot remove owner. Transfer ownership first.") — Pro enforces membership client-side only. jsdom pointer-capture polyfills added to test-setup for Radix Select                                                                                                                                                                                                        | full workspace typecheck + lint green; utils suite 404 green (14 membership); atoms suite 47 files / 597 tests green; full web suite 182/184 files green (1 = known quick-add flake — passes standalone, 1 skipped); new tests: project-members-dialog 6, project-context-menu +2, projects route +3 |

Known flake family (upstream, pre-dates this work) — two independent causes, both now
handled structurally in CI:

1. **Timezone-dependent date tests.** Recurring-task due dates and the week picker compare
   `new Date()`-derived local-time math; under a non-Eastern UTC offset the expected vs
   actual calendar day shifts (verified: 3 recurring-task tests fail under `Asia/Kolkata`,
   pass under `America/New_York`). CI did **not** pin `TZ` (only `scripts/run-vitest.mjs`
   did), so the runner image's shell timezone decided. Fixed by pinning
   `TZ: America/New_York` as workflow-level env in `phase8-verify.yml`.
2. **Quick-add "Parsed Values Management" timeouts.** These hang when many DOM-heavy test
   files share a worker pool: the file's `await import()` of the real parser plus its
   `waitFor` retry loops starve under contention (symptoms vary between an empty render,
   a missing spy call, and a 15 s timeout). Not timer- or fake-timer-based (verified: none
   present) and no module-level state in the parser. Passes standalone everywhere and
   passes when files run serially.

CI treats both structurally instead of skipping any test: the web suite runs with
`--no-file-parallelism` so each test file gets the worker pool to itself, and `TZ` is pinned
so date math is deterministic regardless of the runner image.

## Route contracts (Phase 2 — COMPLETE, kept as reference)

### Route contracts already extracted

Recovered verbatim from module 50278 (user route). Family-2 decoder solved (rotation 190, `aH(a,b) = as[a-199]`, target `635102`). See `tools/deob/out/routes_app_api_v1_user_route/decoded-50278.js`.

**GET /api/v1/user** _(handler at, line 209)_:

- Read data file → fail 500 `DATA_FILE_READ_ERROR`
- Parse DataFile schema → fail 500 `DATA_FILE_VALIDATION_ERROR`
- **Reads `dataFile["user"]`** (the canonical users array at key `"user"` in Pro image — our Phase 1 reads `getDataFileUsers()` which handles both `user`/`users` keys)
- Maps each user through `UserSerializationSchema.safeParse()` → fail 500 `DATA_FILE_VALIDATION_ERROR`
- Logs business event `"users_fetched"` (note: plural, unlike base `"user_fetched"`)
- Response: `{ user: User[], meta: { count: number, timestamp: ISO, version: string } }`
- Cache headers: `no-cache, no-store, must-revalidate`, `Pragma: no-cache`, `Expires: 0`
- Middleware: `withMutexProtection(withApiLogging(withAuthentication(at, {endpoint, module}), {allowApiToken: true}))`

**POST /api/v1/user** _(handler ax, line 282)_:

- Session check: `!session?.user?.id` → 401 `AUTHENTICATION_REQUIRED` / `"Authentication required"` / `"You must be authenticated to access this resource"`
- Current user = `dataFile.users.find(session.user.id)` → 404 `"User not found"` / `"Authenticated user not found in data file"`
- Role check: `currentUser.role !== "admin"` → 403 `"Permission denied"` / `"Only admins can create users"` / `PERMISSION_DENIED`
- Body validated: `_.Oq` schema → `{ username, password, role, avatar? }`
- User limit: read license seats attribute (→ **replace with our fixed `DEFAULT_MAX_USERS = 50`**), `Math.max(1, Math.min(licenseSeats, 5))` → `fileData.users.length >= limit` → 400 `"User limit reached"` / `"Maximum of ${p} users allowed"` / `VALIDATION_ERROR`
- Duplicate check: `users.some(u => u.username.toLowerCase() === body.username.trim().toLowerCase())` → 400 `"Username already exists"` / `"Username \"${username}\" is already in use"` / `VALIDATION_ERROR`
- Avatar: `processAvatarUpdate(avatar)`
- Password: `processPasswordUpdate(password)` → fail 500 `INTERNAL_SERVER_ERROR` / `"Password processing failed"`
- Create user: `{ id: uuidv4(), username: trim(), password: hashed||"", role, avatar: path||undefined }`
- Append: `users = [...fileData.users, newUser]`, `fileData.user = users`
- Write → fail 500 `DATA_FILE_WRITE_ERROR`
- Log `"user_created"` with `{ id, username, role }`
- Response: `{ success: true, user: newUser, message: "User created successfully" }`
- Middleware: same chain as GET

**PATCH /api/v1/user** _(handler aB, line 388)_:

- Session check → 401
- Read data file → 500
- Current user = `users.find(session.id)` → 404 `"User not found"` / `"Authenticated user not found in data file"`
- Body validated: `_.HS` schema → `{ id?, username?, password?, role?, avatar? }`
- **If body.id is set (admin targeting another user):**
  - `currentUser.role !== "admin"` → 403 `"Permission denied"` / `"Only admins can update users"` / `PERMISSION_DENIED`
  - Target user found by id
  - **If target.id === session.id AND body has role** → 400 `"Admins can't change own role"` / `"Cannot change own role"` / `INVALID_REQUEST_BODY`
- **If body.id is NOT set (self-update):**
  - `body.role && currentUser.role !== "admin"` → 403 `"Permission denied"` / `"Users cannot modify their own role"` / `PERMISSION_DENIED`
  - id = session.user.id (self)
- Avatar: `processAvatarUpdate(body.avatar)`
- Password: `processPasswordUpdate(body.password)`; if hashed, `body.password = hashedPassword`
- Find target index → -1 → 404 `"User not found"` / `"User with ID ${id} not found"` / `DATA_FILE_VALIDATION_ERROR`
- Merge: `updated = { ...existing, ...entries(body) filtered (avatar, apiToken, id) }`
- Avatar path handling: `null` → `undefined`
- apiToken: explicit null handling via `processApiTokenUpdate`
- `updated.id = existing.id` (immutable)
- `users[index] = updated`, write → fail 500 → log `"user_updated"` with `{ username, userId, fieldsUpdated, editedByAdmin }`
- Serialize user → fail 500 `DATA_FILE_VALIDATION_ERROR`
- Response: `{ success: true, user: serialized, message: "User updated successfully" }`

**DELETE /api/v1/user** _(handler aF, line 570)_:

- Session check → 401
- Read data file → 500
- Current user = `users.find(session.id)` → 404 → role check: `currentUser.role !== "admin"` → 403 `"Permission denied"` / `"Only admins can delete users"` / `PERMISSION_DENIED`
- Body validated: `_.h0` schema → `{ userId }`
- **If body.userId === session.id** → 400 `"Admins can't delete self"` / `"Admins cannot delete their own account"` / `INVALID_REQUEST_BODY`
- **Cascade cleanup** (iterate all data):
  - `tasks[]`: if `task.ownerId === userId` → `ownerId = undefined` (set flag)
  - `tasks[]`: if `task.assignees` contains userId → `task.assignees = task.assignees.filter(...)`
  - `tasks[].comments[]` where `comment.reactions` exists → filter reactions by userId
  - `projects[]`: if `project.members` contains userId → filter members
  - `dataFile.rewardEvents[]` where `rewardEvent.userId === userId` → count removed
- Write → fail 500
- Log `"user_deleted"` with `{ userId, username, affectedTasks, affectedProjects, affectedComments, affectedRewardEvents }`
- Response: `{ success: true, deletedUserId, message: "User deleted successfully" }`

### Phase 2 status — COMPLETE ✅ · Phase 3 status — COMPLETE ✅ · Phase 4 status — COMPLETE ✅

Server, auth, client data layer, user-management UI, and i18n all landed
(`196cc4e`, `b4a9b73`); close-out verification green (full workspace typecheck,
lint, web suite 169/171 files — 2 = known quick-add flake + pre-existing skip).
Phase 3 rewards engine landed (`fdf753d`, `a5346e3`) — API, atoms, productivity
form, task chip, header balance. Phase 4 people/assignees landed (`70f34a1` +
remainder: assigned-to-\* views, People panel, filter sections, bulk assign,
table columns, newTaskOwnership). See FINDINGS.md → "Reimplementation fidelity"
for how Pro is decoded and re-implemented (server 1:1, UI re-derived).

**Next phase: Phase 6 (remaining UI parity)** — `CommentReactions` +
`AddReactionButton`, `CustomColorPicker` (the `color-picker.tsx` pro branch
currently mounts a stub), `RoleBadge` in the nav user menu (stub), group member
management ComingSoon slot, scheduler `calendar-refresh` row (lands with Phase
7), residual "coming soon" copy cleanup. Then Phase 7 (calendar sync), Phase 8
(verification: `pnpm build` standalone, frozen lockfile, first-run flow,
structural Docker review).

### State of remaining decoded contracts (for later phases)

| File                                                    | Module                                     | Status                                                                                                                                              |
| ------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `routes_app_api_v1_user_route/decoded-50278.js`         | 50278 (GET/POST/PATCH/DELETE)              | ✅ Fully decoded (family 2 solved, rotation 190) — implemented in `196cc4e`                                                                         |
| `routes_app_api_v1_mobile_login_route/decoded-65543.js` | 65543 (mobile login)                       | ✅ Contract recovered (7-day JWT, 500/400/401 paths) — implemented in `196cc4e`; full decoder not yet solved (not needed)                           |
| `routes_api_initial-setup_route/deobfuscated.js`        | 1896 (initial-setup handler)               | ⬜ Not decoded (failed `original module is empty` error)                                                                                            |
| `routes_app_api_v1_rewards_route/deobfuscated.js`       | 59451 (rewards API)                        | ⬜ Not decoded for Phase 3                                                                                                                          |
| `server-chunks_middleware/deobfuscated.js`              | headers/auth                               | ⬜ Need SSO header name extraction                                                                                                                  |
| `server-chunks_1752/decoded-85119.js`                   | DataFile/settings schemas                  | ✅ Already decoded in Phase 1                                                                                                                       |
| `server-chunks_1320/decoded-25748.js`                   | 25748 (atoms: filters, addTask, people UI) | ✅ Fully decoded (258 families) — assigned-view semantics, `newTaskOwnership`, People panel (`OP`/`OH`/`OL`), bulk assign recovered and implemented |
| `client-chunks_layout-…/decoded-41745.js`               | 41745 (client atoms + UI)                  | ✅ Fully decoded (281 families; decoder generalized to client chunks) — independently cross-confirms the same contracts                             |

Then Phase 6 (parity), 7 (calendar sync), 8 (verification: `pnpm build`
standalone, frozen lockfile, first-run flow, structural Docker review).
