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

## Phase 6 — Remaining UI parity

- `CommentReactions` + `AddReactionButton` (emoji picker, `reactions` field from Phase 1).
- `CustomColorPicker` (full palette UI behind existing `color-picker.tsx` pro branch).
- `RoleBadge` + role display in nav user menu.
- Group member management `ComingSoonWrapper` slot → real members UI **or** leave as the
  one remaining coming-soon (decision at implementation: pro also shows it as managed via
  project members — implement minimal version using Phase 4 members).
- Sidebar/nav pro items audit (rewards, assigned-to-\*), ProBadge rows in scheduler form
  (`calendar-refresh` job row added; **no license row**).
- Settings `→ Pro` links/copy: remove residual "coming soon" for now-implemented features.

## Phase 7 — Calendar sync (final, largest)

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

## Phase 8 — Verification & Docker compatibility

| Check           | How                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Typecheck       | `pnpm -r --if-present run typecheck:base` (root `typecheck` has pre-existing Windows `test -f` issue — document, don't regress)           |
| Lint            | `pnpm lint`                                                                                                                               |
| Tests           | `pnpm test` (all packages; new tests per component ≥ repo coverage bars)                                                                  |
| Build           | `pnpm build` (Next standalone build succeeds = Dockerfile's build step succeeds)                                                          |
| Frozen lockfile | `pnpm install --frozen-lockfile` clean after dep additions                                                                                |
| Docker          | CLI unavailable in this environment → structural review: `turbo prune web` inputs unchanged, no Dockerfile edits, compose files untouched |
| Data compat     | fixtures: base data file, pro-image data file → both load + migrate                                                                       |
| First-run       | fresh data dir → initial setup → healthy `/api/health` with `edition: "pro"`, no license env needed                                       |

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

- [ ] Phase 0 gates
- [ ] Phase 1 schemas + migration
- [ ] Phase 2 multi-user auth/API/UI + mobile login
- [ ] Phase 3 rewards (API + settings + task UI)
- [ ] Phase 4 people/assignees/assigned-to-\* views
- [ ] Phase 5 table + stats views
- [ ] Phase 6 reactions/color/roles/nav parity
- [ ] Phase 7 calendar sync
- [ ] Phase 8 verification
- [ ] `FINDINGS.md` updated as phases land; `plans/` kept as record
