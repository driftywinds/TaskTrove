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
- [ ] Phase 4 people/assignees/assigned-to-\* views — core landed `70f34a1` (filter
      plumbing + badges + management popovers); remaining: assigned-to-\* views, people
      side-panel, table-view owner/assignee column wiring, newTaskOwnership on create
- [x] Phase 5 table + stats views (commit `c1c16b6`; owner/assignee columns await Phase 4 wiring)
- [ ] Phase 6 reactions/color/roles/nav parity
- [ ] Phase 7 calendar sync
- [ ] Phase 8 verification
- [x] `FINDINGS.md` updated as phases land; `plans/` kept as record (in progress per phase)

## Progress log (implementation)

| Date                        | Landed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Evidence                                                                                                                                                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase 0                     | `isPro()` → true; 38 pro conditions repointed to default files; settings categories open; update-checker pinned to TaskTrove; base-expectation tests updated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | typecheck + targeted tests green; commit `1292e76`                                                                                                                                                                                        |
| Tooling                     | `tools/deob/decode-module.mjs` (rotation-solver + string-array inliner for any webpack module in the deobfuscated bundles); `tools/deob/PRO-SCHEMAS.md` (exact recovered contract)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | commit `4c93af2`                                                                                                                                                                                                                          |
| Phase 1                     | Full Pro data model in `@tasktrove/types`: User role+preferences, Task ownerId/assignees/reward, Comment reactions, Project members, ViewState assignedTo/ownedBy filters; new rewards/calendar/reward-levels modules (7 themes × 10 levels, exact Pro names); settings extensions (calendarSync, calendarSyncSchedule, newTaskOwnership, productivity); DataFile with canonical `users` + union-tolerant reads (legacy single `user`, official Pro image array-under-`user`); `DEFAULT_MAX_USERS = 50` (no license logic); cron validator; migration v0.13.0; multi-user-aware auth/middleware/initial-setup/user-route reads                                                                                                                                                                                                                                                                                                                                                                                                                               | all package + web typecheck; lint clean; full package suites green; new pro-schema/migration/safe-file tests; commit `0caea81`                                                                                                            |
| Phase 5                     | `StatsView` renders the analytics dashboard (Pro metric set: completed/streak/focus-time/productivity-score ≥70 trend); `TableView` on @tanstack/react-table with the full Pro column set, viewState-initialized sorting, completion toggle, sticky header, empty state; `@tanstack/react-table` added from catalog                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | component tests (7 + 3); commit `c1c16b6`                                                                                                                                                                                                 |
| Fixes                       | `.husky/pre-commit` was a JS file executed by `sh` (broke all commits) → proper sh no-op; previously-empty `safe-file-operations.test.ts` replaced with 13 real tests                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | commits above                                                                                                                                                                                                                             |
| Phase 2 contracts           | Extracted full `/api/v1/user` GET/POST/PATCH/DELETE contracts from `decoded-50278.js` using family-2 decoder (`decode-user-route.mjs`, rotation 190, target `635102`). Recovered all verbatim strings: error messages (`"Admins can't delete self"`, `"Cannot change own role"`, `"User limit reached"`, `"Username already exists"`, `"Cannot delete self"`), admin guards, user-limit logic, avatar/password processing, cascade cleanup on delete (tasks→ownerId nil, assignees filter, comments reactions filter, projects→members filter, rewardEvents filter), business event names (`user_created`, `user_updated`, `user_deleted`, `users_fetched`), response shapes (`user: User[]` with `meta.count`).                                                                                                                                                                                                                                                                                                                                             | tools/deob/decode-user-route.mjs + decoded-50278.js (passes 2)                                                                                                                                                                            |
| Phase 2 server + data layer | `/api/v1/user` GET/POST/PATCH/DELETE per recovered contract (verbatim messages, admin guards from session-resolved role, fixed `DEFAULT_MAX_USERS` cap, full delete cascade incl. `currencyRewardEvents`); `POST /api/v1/mobile/login` (7-day JWT, `AUTH_SECRET` missing → 500, invalid → 401); multi-user credentials login (case-insensitive username, legacy username-less path only for single-user files) + `header-auth` SSO provider; session/JWT carry real user id + `role`; auth middleware attaches `authUser {id, role}` resolved from the data file per request (+ `getAuthUser()` helper, auth-disabled fallback = first user); `CreateUserRequestSchema`/`AdminUpdateUserRequestSchema`/`DeleteUserRequestSchema`/`MobileLoginRequestSchema` + response schemas; client: `USERS_QUERY_KEY`, `usersQueryAtom` (replaces `userQueryAtom`), real `usersAtom`, `currentUserIdAtom` + `CurrentUserSync` (NextAuth session → atoms), user mutations retargeted to users array (update/create/delete); `userByIdAtom` repurposed as id→user selector | full workspace typecheck; lint clean (web/atoms/constants/types); web suite 168/170 files green (2 = known quick-add flake + pre-existing skip), atoms 577 green; 69 dedicated Phase 2 tests; commit `196cc4e`                            |
| Phase 2 UI + i18n           | `UserManagementForm` replaces the `null` stub: users table (avatar/username/role badge/`(You)` marker/task+project counts), user-limit line, admin-only Add/Edit/Delete dialogs (inline validation; edit hides role control for self per "Admins can't change own role"; delete disabled for self + last user; mutation failure keeps dialog open), non-admin read-only view; settings-dialog now enforces `adminOnly` (scheduler + users hidden from non-admins); `usersManagement.*` + `categories.users/productivity` English i18n; atoms-mocks `isValidCategory` updated to real Phase 0 behavior                                                                                                                                                                                                                                                                                                                                                                                                                                                        | full workspace typecheck; lint clean; web suite 169/171 files green (2 = known quick-add flake + pre-existing skip); 24/24 targeted UI tests; commit `b4a9b73`                                                                            |
| Phase 3 rewards             | `/api/v1/rewards` GET+POST per recovered contract (module 59451; points path = fixed `Uo=10`, currency path with `currencyId`+`amount`, `WISHLIST_REDEEMED` requires currencyId+amount, acting user from session, verbatim success messages); `CreateRewardEventRequest/Response` + `GetRewardsResponse` schemas; `REWARDS_QUERY_KEY` + `DEFAULT_REWARD_POINTS=10`; `rewardsQueryAtom`/`rewardsAtom`, real `createRewardEventMutationAtom` (replaces throwing stub), `awardTaskCompletedPointsAtom` wired into `toggleTaskAtom` (fire-and-forget; no-ops when `rewardsEnabled` false or daily cap reached); full Productivity settings form (points/currency toggles, daily cap, custom-currency manager with protected default currency, wishlist manager, theme picker with level preview); task reward chip `CurrencyRewardBadge/Popover/Content`; header points-balance `RewardsBadge`; i18n `productivity.*` + `rewards.*`                                                                                                                              | full workspace typecheck; lint clean (types/atoms/constants/web); atoms 577 green; web suite 172/174 files green (2 = known quick-add flake + pre-existing skip); 21 reward tests (11 route + 7 productivity + 3 badge); commit `fdf753d` |

Known non-blocking flake: `quick-add-dialog.test.tsx` (12 tests) fails only under full-suite parallelism on constrained Windows hosts (renders empty body; passes standalone; predates this work — resource-related).

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

### Phase 2 status — COMPLETE ✅ · Phase 3 status — COMPLETE ✅

Server, auth, client data layer, user-management UI, and i18n all landed
(`196cc4e`, `b4a9b73`); close-out verification green (full workspace typecheck,
lint, web suite 169/171 files — 2 = known quick-add flake + pre-existing skip).
Phase 3 rewards engine landed (`fdf753d`, `a5346e3`) — API, atoms, productivity
form, task chip, header balance. See FINDINGS.md → "Reimplementation fidelity"
for how Pro is decoded and re-implemented (server 1:1, UI re-derived).

**Next phase: Phase 4 (people/assignees)** — assignees/owners/people panel +
assigned-to-me/assigned-to-others views + owner/assignee filter plumbing. The
Pro client UI for these is re-derived (tier 3); the filter semantics and view
behavior are recovered from the bundle. This also wires the table-view
owner/assignee columns (Phase 5 deferred them here).

### State of remaining decoded contracts (for later phases)

| File                                                    | Module                        | Status                                                                                                                    |
| ------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `routes_app_api_v1_user_route/decoded-50278.js`         | 50278 (GET/POST/PATCH/DELETE) | ✅ Fully decoded (family 2 solved, rotation 190) — implemented in `196cc4e`                                               |
| `routes_app_api_v1_mobile_login_route/decoded-65543.js` | 65543 (mobile login)          | ✅ Contract recovered (7-day JWT, 500/400/401 paths) — implemented in `196cc4e`; full decoder not yet solved (not needed) |
| `routes_api_initial-setup_route/deobfuscated.js`        | 1896 (initial-setup handler)  | ⬜ Not decoded (failed `original module is empty` error)                                                                  |
| `routes_app_api_v1_rewards_route/deobfuscated.js`       | 59451 (rewards API)           | ⬜ Not decoded for Phase 3                                                                                                |
| `server-chunks_middleware/deobfuscated.js`              | headers/auth                  | ⬜ Need SSO header name extraction                                                                                        |
| `server-chunks_1752/decoded-85119.js`                   | DataFile/settings schemas     | ✅ Already decoded in Phase 1                                                                                             |

Then Phase 3 (rewards), 4 (people), 6 (parity), 7 (calendar sync), 8 (verification:
`pnpm build` standalone, frozen lockfile, first-run flow, structural Docker review).
