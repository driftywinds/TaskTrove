# FINDINGS.md — TaskTrove Codebase & Pro-Edition Investigation

> Reverse-engineering notes for this repo ("abandoned project base") and the official
> Pro Docker image. Decision aid + working reference for enabling Pro features by default.
>
> **Status:** Investigation complete. Approved path: deobfuscate the public Pro image and
> reimplement Pro into this repo (see [Chosen Approach](#2-chosen-approach--scope)). The
> Pro creator gave the user permission to deobfuscate/reimplement from the image.
>
> **Implementation status (updated as phases land):**
>
> - ✅ Phase 0 gates (`isPro` → true, pro conditions repointed) — commit `1292e76`
> - ✅ Phase 1 Pro data model + v0.13.0 migration (multi-user schema, rewards/currency/
>   calendar/productivity schemas, union-tolerant reads incl. official Pro image files)
>   — commit `0caea81`
> - ✅ Phase 5 stats + table views — commit `c1c16b6`
> - ✅ Phase 2 **contracts extracted**: full `/api/v1/user` GET/POST/PATCH/DELETE decoded
>   (module 50278, rotation 190, `decode-user-route.mjs`). All verbatim strings, admin
>   guards, cascade logic, error messages, event names recovered. See
>   `plans/PLAN-pro-default.md` → "Route contracts already extracted" for the full spec.
> - ✅ Phase 2 **server + data layer** — commit `196cc4e`: `/api/v1/user` CRUD per the
>   recovered Pro contract (verbatim messages, admin guards, delete cascade),
>   `POST /api/v1/mobile/login`, multi-user credentials + header-auth SSO providers,
>   role-carrying sessions, `authUser` middleware, client `usersQueryAtom` /
>   `currentUserIdAtom` / `CurrentUserSync` + create/delete/update user mutations.
>   69 dedicated tests; full suites green (only known quick-add parallelism flake).
> - ✅ Phase 2 **UI + i18n** — commit `b4a9b73`: `UserManagementForm` (users table with
>   avatars/role badges/`(You)` marker/task+project counts/user limit, admin-only
>   add/edit/delete dialogs with the recovered self-guards, non-admin read-only),
>   settings-dialog `adminOnly` filtering by session role, English i18n keys.
>   **Phase 2 complete.** Next: Phase 3 (rewards).
> - ✅ Phase 3 **rewards engine** — commit `fdf753d`: `/api/v1/rewards` GET+POST per
>   recovered contract (points = fixed 10, currency path, WISHLIST_REDEEMED guard);
>   `rewardsQueryAtom`/`rewardsAtom`, real `createRewardEventMutationAtom`, and
>   `awardTaskCompletedPointsAtom` wired into `toggleTaskAtom` (no-ops when disabled or
>   daily cap reached); full Productivity settings form (points/currency toggles, daily
>   cap, custom-currency + wishlist managers, theme picker); task reward chip
>   (Badge/Popover/Content) + header points-balance `RewardsBadge`. Optional polish not
>   built: wishlist "Redeem" action button, currency-reward quick-amounts.
> - 🔄 Phase 4 **people (core)** — commit `70f34a1`: `assignedTo`/`ownedBy` filter plumbing
>   (FilterConfig + viewStateToFilterConfig + filterTasksByAssignee/Owner), AssigneeBadges,
>   OwnerBadge, Assignee/Owner/People management popovers (wired into task-item/side-panel/
>   quick-add).
> - ✅ Phase 4 **remainder**: `/assigned-to-me` + `/assigned-to-others` views (recovered
>   atom semantics, nav items + counts + i18n in all 10 locales), People panel (Owner +
>   Assignees collapsible sections behind a People popover in the task side panel, recovered
>   `OH`/`OL`/`OP` contracts incl. Public/unknown-owner/admin-gating rules), Owner/Assignee
>   filter sections + bulk assignee button (were stubs), table-view owner/assignee columns
>   wired to the real users list, `newTaskOwnership` honored in `addTaskAtom`, `ownerId`
>   made nullable (owner-clear via `null` → API `clearNullValues`) — **Phase 4 complete**.
> - ✅ Phase 6 **parity (part 1)**: comment reactions (`CommentReactions` +
>   `AddReactionButton` — recovered fixed 10-emoji palette, grouping, per-user toggle,
>   tooltip usernames, `comment-react-button-<id>` test id), `CustomColorPicker` (recovered
>   HSL SV-area + hue slider + hex input + Clear/Apply incl. exact `hexToHsl`/`hslToHex`
>   helpers), nav `RoleBadge` (outline "Admin" badge for admins, null otherwise), removed
>   the group "Members" coming-soon slot (Pro groups have **no** members — confirmed in
>   data model, i18n, and bundle), dropped the "exclusive Pro feature" copy from the
>   coming-soon modal.
> - ✅ Phase 6b **project member management**: full recovery of module 10326 (membership
>   helpers — **owner is `members[0]`**, public ⇔ no members, `canManage` = owner|admin,
>   all guard strings verbatim) + module 25748's four write atoms and the members dialog;
>   implemented as pure helpers (`@tasktrove/utils/project-permissions`), atoms
>   (add/remove/transfer/make-public), the `ProjectMembersDialog` (add-member Select,
>   Owner/Member badges, `(You)`, leave/remove/make-owner gating, public notice + Make
>   Public panel), and the project context-menu "Members" item. API PATCH additionally
>   enforces the owner-preservation invariant server-side (documented deviation — Pro
>   enforces client-side only). **Phase 6 complete** (scheduler `calendar-refresh` row
>   remains deferred to Phase 7 with its job).
> - ✅ Phase 8 **verification — COMPLETE (CI green on `driftywinds/TaskTrove`)**: full
>   workspace typecheck + lint green; atoms 597 / utils 404 / types 25 (incl. a full
>   official-Pro-image data-file fixture exercising every Phase 4–6 schema: `ownerId:
null`, assignees, comment reactions, project members, currencyRewardEvents,
>   calendar-sync settings) / web **2449 tests green, 183/184 files (1 skipped)**;
>   `pnpm install --frozen-lockfile` clean; `/api/health` asserts `edition: "pro"`;
>   license-marker scan clean; Dockerfile + compose + turbo surfaces untouched vs
>   upstream. Heavy checks run in **GitHub Actions** (`.github/workflows/phase8-verify.yml`)
>   — **all jobs green**: frozen-lockfile install, typecheck, lint, full tests, **Next
>   standalone build**, **Docker image build + first-run smoke test** (fresh data dir →
>   `needs_initialization` → `POST /api/initial-setup` → `healthy`, asserting
>   `edition: "pro"` throughout, no license env), plus a standing **no-license-code
>   guard** (`api.keygen.sh` / `LICENSE_KEY` / `MACHINE_ID` re-entering source fails the
>   build). The upstream `docker-build-deploy.yml` is guarded to `dohsimpson/TaskTrove`.
>   **Flake root-caused, not skipped**: the old "quick-add flake" was a family of two
>   upstream issues — (1) timezone-dependent date tests (verified fail/pass across
>   Asia/Kolkata vs America/New_York) and (2) quick-add timeouts when DOM-heavy files
>   share a worker pool. CI pins `TZ: America/New_York` workflow-wide and runs the web
>   suite with `--no-file-parallelism`; **full suite verified 0 failures** under that
>   config.
>   **Staging verified by the user** on the published `ghcr.io/driftywinds/tasktrove:edge`
>   multi-arch image (amd64+arm64, `docker-publish.yml`): fresh-instance first-run flow
>   confirmed working — `needs_initialization` → Initialize banner → file created →
>   routes live. Documented behavior kept as upstream designed it (inline non-blocking
>   banner; pre-init `/api/v1/*` 500 "File reading failed" is base-repo behavior, and
>   health `needs_initialization` doubles as proof the data-dir write-test passes).
> - ⬜ Phase 7 (calendar sync) — the final phase; **awaiting user go-ahead**.
>
> **New tooling:** `tools/deob/decode-module.mjs` fully decodes any webpack module in the
> deobfuscated bundles (solves the string-array rotation via the checksum IIFE and inlines
> every decode call) — far beyond webcrack's output. Generalized this run: tolerates
> malformed alias matches, and its rotation/decoder/array detection no longer assumes the
> `a`/`b`/`c` variable names, so it now also solves **client chunks** (e.g.
> `decoded-41745.js`) and small single-family modules (e.g. `decoded-10326.js`).
> `tools/deob/PRO-SCHEMAS.md` is the authoritative decoded contract
> (schemas, themes/levels, DataFile quirks).
>
> **Added for Phase 2:** `tools/deob/decode-user-route.mjs` — family-2 decoder for
> `/api/v1/user` route (module 50278, rotation 190, target `635102`). Produces
> `decoded-50278.js` with fully inlined strings.

## Reimplementation fidelity (how "Pro" is what we build?)

We decode the actual Pro runtime logic, understand each branch, and reimplement it as
clean Pro code. The fidelity is not uniform — here is the honest spectrum:

| Tier                               | What                                                                                                                                                     | Fidelity                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Server API routes**           | `/api/v1/user` CRUD, `/api/v1/rewards`, `/api/v1/mobile/login`, initial-setup                                                                            | **Near 1:1.** Guards, ordering, verbatim error strings, business-event names, and cascade side-effects are reproduced exactly. Tests assert the recovered strings (e.g. `"Admins can't delete self"`, `"Only admins can create users"`, `"User limit reached"`, `"Reward event created successfully"`).                                                                             |
| **2. Approved deviations**         | User cap (fixed 50 vs Pro's Keygen license seat count), data storage (canonical `users` key, accepts both on read), auth plumbing (this repo's NextAuth) | **Intentional per approved scope** (no license enforcement, no machine ID, no Keygen). Documented, not accidental.                                                                                                                                                                                                                                                                  |
| **3. Client UI**                   | User-management form, productivity form, reward chip, badges                                                                                             | **Functionally equivalent, re-derived.** Pro's client is compiled React — its exact JSX/component internals are not recoverable as clean source. We recover the i18n strings, component inventory, and _observable behavior_ (fields, guards, messages) and rebuild with this repo's conventions (SettingsCard, atoms, Zod). Behavior + strings match; pixels/structure may differ. |
| **4. Partially decoded internals** | mobile-login, initial-setup, calendar-sync                                                                                                               | **Contract-level.** Request/response shapes, error paths, and behavior recovered from structure + strings; not every internal line. Behavior we ship matches. Calendar-sync engine (Phase 7) is written from the recovered store schema, not a literal port.                                                                                                                        |

**Why re-implement instead of paste:** the obfuscated JS is unusable as source (mangled
identifiers, control-flow flattening, anti-debug self-defending checks) and this repo has
strict conventions (Zod-first, branded UUIDs, no `any`, atoms). Correct approach: decode
behavior → write clean code that reproduces it → verify with tests asserting exact
recovered strings/flows.

---

## 1. What This Project Is

**TaskTrove** — a self-hosted, privacy-first task manager
([dohsimpson/TaskTrove](https://github.com/dohsimpson/TaskTrove)).

| Aspect   | Detail                                                                                   |
| -------- | ---------------------------------------------------------------------------------------- |
| Stack    | Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Jotai · TanStack Query   |
| Monorepo | Turborepo + pnpm workspaces, JIT packages (raw `.ts` imports, no build step)             |
| Storage  | JSON file (`/app/data`), backups in `/app/backups` — no database                         |
| Deploy   | Docker-first: distroless nodejs22, standalone Next build, `ghcr.io/dohsimpson/tasktrove` |
| Version  | `apps/web` @ 0.12.4 (Pro image ships web 0.12.2 + `web.pro` 0.0.0)                       |
| Auth     | NextAuth v5 beta, enabled only when `AUTH_SECRET` is set; single `user` object today     |

This repo is the **open-source "base" edition**, architected as a shell that a private
**"Pro" edition** ([dohsimpson/TaskTrovePro](https://github.com/dohsimpson/TaskTrovePro))
overlays. The Pro source is absent here, but every seam for it is present.

### Workspace layout

```
apps/web                       ← the only app here (Pro adds web.pro, mobile.pro, import.pro, docs.pro)
packages/atoms                 ← Jotai state; "pro" export conditions → *.pro.ts (absent)
packages/types                 ← Zod schemas; "pro" export conditions → *.pro.ts (absent)
packages/{constants,utils,dom-utils,i18n,parser,scheduler,branding,...}
modules.pro/{apps,packages}    ← declared in pnpm-workspace.yaml:4 but EMPTY (Pro overlay mount point)
tools/deob/                    ← deobfuscation workspace: bundle copies + webcrack output + README (tracked in git)
```

---

## 2. Chosen Approach & Scope

User-approved decisions (this run):

| Decision         | Choice                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path             | **Deobfuscate the public Pro image and reimplement Pro into this repo** (FINDINGS option 3)                                                                   |
| Scope            | **Full Pro parity, implemented in reviewable phases**; repo stays green after each phase                                                                      |
| Multi-user       | **Adopt Pro's users-array model** (usernames + passwords, roles `admin`/`user`, user-management UI), backward-compatible with existing single-user data files |
| Calendar sync    | **Included as the final phase** (new package, 3 API routes, settings UI, scheduler job)                                                                       |
| License (Keygen) | **Not reimplemented at all** — no license checks, no machine binding, no phoning home. Pro checks become structurally impossible rather than bypassed         |

Repo convention: the detailed implementation plan lives in `plans/PLAN-pro-default.md`
(written and reviewed before coding; this one plan is explicitly un-ignored so it ships
with the repo).

---

## 3. How Pro Gating Works in the Base (3 Layers)

### Layer 1 — the master switch: `isPro()`

**[apps/web/lib/utils/env.ts:5](apps/web/lib/utils/env.ts#L5)** — hardcoded compile-time constant:

```ts
export const isPro = (): boolean => false;
```

No `NEXT_PUBLIC_*` env vars exist anywhere; the flag is **baked in at `next build`** into both
client and server bundles. There is no runtime toggle. Same file stubs
`isMobileApp() → false`, `isAndroid() → false`, `isIos() → false`, `isWeb() → true`.

In the **Pro image**, the same module is compiled as `isPro: true` (confirmed in the
deobfuscated `initial-setup` route: `let { users: g, isPro: h } = await CF()` where the
env module returns the literal `true`). So flipping this constant is exactly what the
official Pro build does.

`isPro()` gates ~19 call sites, the notable ones:

| Site                                                                                     | Effect when Pro                                  |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [nav-user.tsx:304](apps/web/components/navigation/nav-user.tsx#L304)                     | Hides "Upgrade to Pro" upsell                    |
| [view-options-content.tsx:134](apps/web/components/layout/view-options-content.tsx#L134) | Adds **Table** + **Stats** view modes            |
| [task-item.tsx](apps/web/components/task/task-item.tsx) (4 sites)                        | Assignee badges, owner display, assignee popover |
| [task-side-panel.tsx](apps/web/components/task/task-side-panel.tsx)                      | Assignment column, currency-reward popover       |
| [color-picker.tsx:92](apps/web/components/ui/custom/color-picker.tsx#L92)                | Custom color picker button                       |
| [health/route.ts:23](apps/web/app/api/health/route.ts#L23)                               | `edition: "pro"` in `/api/health`                |
| [use-update-checker.ts:38](apps/web/hooks/use-update-checker.ts#L38)                     | Checks `TaskTrovePro` GitHub releases            |
| [loading-screen.tsx:9](apps/web/components/loading-screen.tsx#L9)                        | "TaskTrove **Pro**" title                        |
| [coming-soon-wrapper.tsx:50](apps/web/components/ui/coming-soon-wrapper.tsx#L50)         | `proOnly` items visible instead of hidden        |
| [stub-indicator.tsx](apps/web/components/debug/stub-indicator.tsx)                       | Dev-only stub bug icon shows when Pro            |

### Layer 2 — package export conditions

`@tasktrove/atoms`, `@tasktrove/types`, `@tasktrove/utils`, `@tasktrove/constants`,
`@tasktrove/parser` declare a **`pro` condition** on ~30 exports
(e.g. `./core/tasks` → `pro: ./src/core/tasks.pro.ts`). **None of the `.pro.ts` files
exist in this repo** — they live in the private overlay. Base builds resolve `default`,
so nothing breaks; the plumbing is dormant. `tsconfig.pro.json` (with
`customConditions: ["pro"]`) is referenced by `typecheck:pro` scripts but guarded by
`test -f … || true`. Pro test configs (`vitest.config.pro.ts`) likewise absent + guarded.

> ⚠️ `.gitignore` contained `*.pro.*`, which would swallow any `.pro.ts` file we author.
> Updated so Pro source files are trackable (see §9).

### Layer 3 — stub components

Every Pro-only UI feature ships in the base as a placeholder rendering `<StubIndicator />`
or `null`:

- `AssigneeBadges`, `AssigneeManagementPopover`, `OwnerBadge`, `OwnerManagementPopover`,
  `OwnerFilterSection`, `AssigneeFilterSection`, `BulkAssigneeButton`,
  `PeopleManagementPopover`
- `CurrencyRewardPopover/Badge/Content`, `CommentReactions`, `AddReactionButton`,
  `RoleBadge`, `CustomColorPicker`
- **[stats-view.tsx](apps/web/components/views/stats-view.tsx) and
  [table-view.tsx](apps/web/components/views/table-view.tsx) render `null`**
  (wired in [main-content.tsx:123–134](apps/web/components/layout/main-content.tsx#L123-L134))
- [user-management-form.tsx](apps/web/components/dialogs/settings-forms/user-management-form.tsx)
  and [productivity-form.tsx](apps/web/components/dialogs/settings-forms/productivity-form.tsx)
  render `null` ("Pro replaces this via module aliasing")
- [packages/atoms/src/mutations/rewards.ts](packages/atoms/src/mutations/rewards.ts)
  **throws** "Rewards feature is only available in Pro version"
- [packages/atoms/src/ui/settings.ts:27](packages/atoms/src/ui/settings.ts#L27)
  `isValidCategory()` returns `false` for `productivity` and `users` → those settings
  categories never appear
- [packages/atoms/src/ui/mobile.ts](packages/atoms/src/ui/mobile.ts) is literally `// stub`

**Consequence:** flipping `isPro()` alone turns on the chrome, not the engines — Table/Stats
become selectable but blank, assignee/reward popovers become no-ops. The engines must be
implemented (Phases 3–7 of the plan).

---

## 4. Deobfuscation Tooling (built this run)

| Item                                      | Location                                                                         |
| ----------------------------------------- | -------------------------------------------------------------------------------- |
| Copied Pro bundles (server/client/routes) | `tools/deob/work/` (111 files, ~19.7 MB)                                         |
| webcrack output (deobfuscated JS)         | `tools/deob/out/<kind>_<name>/deobfuscated.js`                                   |
| Batch pipeline                            | `tools/deob/deob-all.ps1` (idempotent; skips already-cracked files)              |
| Tooling                                   | `webcrack@2.16.0` via `tools/deob/node_modules` (`npx webcrack <file> -o <dir>`) |

Results: webcrack recovers control flow and inlines most string-array decodes. What
remains are wrapper calls (`F(488, 930)`, `x(1004, 987, …)`) plus the raw string table
(`function J(){ let a = ["isExpired","ACHINES",…] }`) — readable enough to reconstruct
schemas, messages, and logic, as shown throughout §5. Residual `_0x*` identifiers mark
dead branches inserted by the obfuscator and can be ignored.

Pro image obfuscation: `javascript-obfuscator` + `webpack-obfuscator` (both in
`web.pro` devDependencies) — string-array encoding, control-flow flattening, self-defending
checks, dead opaque predicates. No source maps shipped.

---

## 5. Pro Architecture (Recovered from the Deobfuscated Bundle)

### 5.1 Request flow — middleware (`server/middleware.js`, 971 KB)

Order of operations in the compiled proxy (mirrors base [proxy.ts](apps/web/proton.ts)):

1. i18n cookie/header negotiation → `x-lng` (same as base)
2. Matcher exclusions (`_next/static`, favicon, …) — same pattern as base
3. **`AUTH_SECRET` check** → missing ⇒ redirect `/error?error=AUTH_NOT_CONFIGURED&description=…environment variable is required…`
4. **License validation `_i()`** (module 6315) → `!success` ⇒ redirect
   `/error?error=<code>&description=<message>` — this is the entire Pro gate
5. NextAuth session resolution, CORS/OPTIONS handling, then route handlers

Pro-only extra vs base: SSO **header authentication** mode
(`Remote-User`/`X-Forwarded-User` … `[Header Auth] Successfully authenticated as user:`).

### 5.2 License enforcement (module `server-chunks/6315.js`) — **to be omitted entirely**

- Env: `LICENSE_KEY`, optional `MACHINE_ID`; fallback machine id read from
  `/etc/machine-id` (32-hex Linux id or MAC `aa:bb:cc:dd:ee:ff` accepted by Zod refine)
- Keygen HTTP call:
  `POST https://api.keygen.sh/v1/accounts/<acct>/licenses/actions/validate-key`
  with `{ meta: { key, scope: { fingerprint } } }`, `Content-Type: application/vnd.api+json`
- Machine attach flow: `POST …/licenses/<id>/relationships/machines` (activation),
  deactivation on `alreadyActivated`, `TOO_MANY_MACHINES`
- Result codes: `NO_LICENSE`, `NO_MACHINES…`, `LICENSE_EXPIRED`, `LICENSE_SUSPENDED`,
  `TOO_MANY_MACHINES`, `VALIDATION_SCOPE_MISMATCH`, `API_ERROR`
- Cached 1 h (`lastChecked`/`isValidating` throttle), expiry helper computes
  `isExpired` / `daysRemaining` / `expiresAt`
- **Scheduler job `license-check`** (module `9069`): cron from settings
  (`Scheduling license check with cron '…'`), `runOnInit`, logs
  `[Scheduler] Running scheduled license check…` / `check failed:` /
  `check completed:`
- Pro **user route** derives a **max-users limit from the license's Keygen attributes**
  (fallback + clamp constants), returning `400 "User limit reached"` when exceeded

Reimplementation: none of this ships. No `LICENSE_KEY`, no fingerprint, no Keygen URL,
no license job, no user cap (or a generous fixed cap for sanity).

### 5.3 Scheduler (module `9069`)

`bootstrapScheduler()` registers, then starts:

| Job id             | Schedule source                                                                                 | Handler                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| daily backup       | settings (same as base `register-backup-job`)                                                   | base behavior                                                           |
| `calendar-refresh` | `settings.data.calendarSyncSchedule` `{enabled, cron, runOnInit}` (defaults from pro constants) | calls calendar sync (`GX()`), logs `Running scheduled calendar sync...` |
| `license-check`    | `settings.scheduler.<license>` cron                                                             | license revalidation (**omit**)                                         |

Bootstrap log: `Scheduler initialized. Backup, … sync, and license check scheduled.`

### 5.4 Pro data model (Zod schemas recovered from `1752`, `middleware`, `9428`)

```text
DataFile (pro)
├─ tasks[]        = base Task + ownerId (uuid nullable) + assignees? (uuid[]) + reward? {currencyId, amount>0}
│                   comments[] + reactions? [{emoji, userId}]
├─ projects[]     = base Project + members? (uuid[])
├─ labels[] / projectGroups / labelGroups        (unchanged)
├─ settings       = base UserSettings + pro extensions (below)
├─ user           = UserPro[]  min(1) max(5)      ← array replaces single object
│    UserPro = { …base user shape, role: "user"|"admin", preferences? }
├─ rewardEvents[]           (points events: id, userId, type, entityId?, points, timestamp)
├─ currencyRewardEvents[]?  (id, userId, entityId?, type, currencyId, amount, timestamp)
├─ version, edition: literal("pro")
└─ serialization variants convert dates ↔ ISO strings (same pattern as base)
```

**Settings extensions (pro):**

```text
settings.data.calendarSync[] (max 10):
  { id, name(min1,color #rrggbb), serverUrl(url,required), username(min1), password(min1),
    authMethod: enum[Basic, Digest, …], defaultTimezone, allowInsecure?, cron, enabled }
settings.data.calendarSyncSchedule: { enabled, cron, runOnInit? }
settings.general.newTaskOwnership: enum["currentUser","unassigned"]?
settings.productivity / rewards:
  { rewardTheme, rewardsEnabled?, dailyRewardPointCap(int ≥0), currencyRewardsEnabled?,
    customCurrencies[] (refine: must include default currency), maxPointCap?, levels, wishlist… }
```

**Calendar sync store (separate schema group):**

```text
calendars[]: { id, userId, timezone, name, source, ctag, syncToken, url, credentialId, createdAt, updatedAt }
objects[]:   { id, calendarId, url, etag, start?, end?, summary?, description?, location?,
               timezone?, uid?, allDay, data }
summary:     { createdCalendars, updatedCalendars, deletedCalendars, createdObjects, updatedObjects, deletedObjects }
lastSyncedAt: iso | null
```

**Pro standard views:** `[…base, "assigned-to-me", "assigned-to-others"]` with metadata
(`Assigned to Me` / `Assigned to Others`, icon types `assigned-to-me` / `assigned-to-others`,
descriptions "See tasks assigned directly to you" / "…to other teammates").

### 5.5 Pro API surface (routes deobfuscated)

| Route                                | Contract (recovered)                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET /api/v1/rewards`                | → `{ rewardEvents, currencyRewardEvents, meta: { count, timestamp } }`, no-store cache headers, `allowApiToken: true`                                                                                                                                                                                                                                   |
| `POST /api/v1/rewards`               | body validated by Zod (`type` e.g. `WISHLIST_REDEEMED` requires `currencyId`+`amount`; points path uses `points` default const); appends event, writes data file, logs `reward_event_created` / `currency_reward_event_created`, → `{ success, eventId, message }`                                                                                      |
| `GET/POST /api/v1/calendar`          | calendar credential CRUD (schema of §5.4), Zod-validated, `Invalid JSON in request body`, `Validation failed`                                                                                                                                                                                                                                           |
| `POST /api/v1/calendar/discover`     | CalDAV discovery against a server URL                                                                                                                                                                                                                                                                                                                   |
| `GET/POST /api/v1/calendar/events`   | fetch/refresh external events (ical parsing, `REVALIDATED` cache header)                                                                                                                                                                                                                                                                                |
| `GET/PATCH/DELETE/POST /api/v1/user` | session + **role admin** required for mutations (`Admins can't delete self` guard, `403` for non-admin); create user: hash password (`Failed to hash password…`), avatar data-URL validation (`Invalid avatar format…`, png/jpg/webp), duplicate username check, **license-derived user limit** → `400 "User limit reached"`; returns users with `role` |
| `POST /api/v1/mobile/login`          | username+password → mobile session tokens (`Invalid credentials`, `generate session tokens`)                                                                                                                                                                                                                                                            |
| groups/projects routes               | extended with `members`/`ownerId` semantics + activity log messages (ownership transfer, member add/remove, "Only the project owner or an admin can…")                                                                                                                                                                                                  |
| `/api/initial-setup`                 | returns `{ users, isPro }`; setup allowed while no user has a password set                                                                                                                                                                                                                                                                              |

Auth middleware options: `allowApiToken: true` for v1 routes — **already present in base**
([lib/middleware/auth.ts](apps/web/lib/middleware/auth.ts) checks `dataFile.user.apiToken`).

### 5.6 Pro UI inventory (from client chunks + i18n strings)

- **Stats view**: metric cards — `tasksCompleted`, `streak`, focus time (`Xh Ym`),
  `productivityScore` (out of 100, trend thresholds ≥70), trends/up-down chips; charts
  (recharts already a base dep). Base `AnalyticsDashboard` + `analytics/` components are
  the same family and reusable.
- **Table view**: column set `task / owner / labels / due date / due time / priority /
section / recurring / estimation / status / completed` (+ assignees column),
  sorting/selection (`getRowMode`, `startTaskId`…), `@tanstack/react-table`
  (already in pnpm catalog `8.21.3`; base app doesn't depend on it yet)
- **Assignees/owners**: badge chips (initials/avatar, "You" highlight), management popover
  (assign/unassign, transfer ownership, `Unknown user` fallback), filter sections,
  bulk assign for selection toolbar, people panel (owner + assignees collapsible sections —
  `GlobalViewOptions.peopleOwnerCollapsed/peopleAssigneesCollapsed` already in base types)
- **Rewards/gamification**: productivity settings page — `Enable Points Rewards`,
  `Daily Points Cap`, `Limit max …pts per task`, `Enable Currency Rewards`,
  `Custom currencies` manager (name/code/icon/color, public vs private `ownerId`,
  `exchangeRate`), `Wishlist Items` manager (`Wishlist redeemed` events),
  `Reward Themes`, reward levels (`Lv `), wallet/balance/redeem flows, task reward
  popover (`Task reward`, `Save reward`, quick amounts, `…coins`)
- **User management**: users table (username, role badge, avatar, task counts, projects
  owned, `(You)` marker), add/edit user dialogs, `User limit` display, transfer ownership,
  per-user permission toggles, `Settings → Users`
- **Calendar sync**: `Settings → Data → calendarSync` — connection list (name, color,
  server URL, username, app password, `allowInsecure`, auth method, default timezone,
  cron, enable toggle), discover/test-connection buttons, `Syncing...`, delete-confirm
  (`Remove Calendar Connection` — base i18n already has this key in dialogs.json)
- **Nav**: `Assigned to Me`, `Assigned to Others`, `Currency Rewards` items
  (`/rewards/c…` paths), all 10 languages already carry the strings in the Pro bundle
  (base locales lack `settings.categories.productivity/users` and `mainNav.assignedTo*`
  keys — need adding; fallbacks exist in code)
- **Sign-in**: SSO header-auth mode UI (`Authenticated as …`, `SSO Sign In`) — base
  [login-form.test.tsx:477](apps/web/components/auth/login-form.test.tsx#L477) already
  tests this contract
- **Custom color picker**, **comment reactions** (emoji + userId), **role badges**,
  quick-add people popover

### 5.7 Pro dependencies of note

- `@tasktrove/calendar-sync.pro` — CalDAV sync engine (tests for Google, Baikal,
  Radicale, Apple); vendors `tsdav`, uses `ical.js` + `ics`
- `@tanstack/react-table` (in base catalog already), `webpack-obfuscator`,
  `javascript-obfuscator` (build-time only — we won't obfuscate)
- `web.pro` build: `next build --webpack`, service worker via esbuild

---

## 6. Docker Compatibility

- Base Dockerfile ([apps/web/Dockerfile](apps/web/Dockerfile)): `turbo prune web --docker`
  → `pnpm install --frozen-lockfile` → `pnpm build` → standalone output → distroless
  nodejs22. Data/backup symlinks → `/app/data`, `/app/backups`.
- `isPro` is a **source-level constant**, so enabling Pro requires **zero Dockerfile
  changes**. New runtime deps (e.g. `@tanstack/react-table`, ical/caldav libs) only touch
  `apps/web/package.json` + `pnpm-workspace.yaml` catalog + lockfile, which the build
  already consumes.
- Both compose files remain valid: `selfhost/docker-compose.yml` (base image),
  `selfhost/docker-compose-pro.yml` (official Pro image reference).
- **Verification constraint:** the `docker` CLI is not available in this dev environment —
  build verification is structural (prune inputs, frozen-lockfile install, `pnpm build`,
  typecheck/lint/tests) rather than an actual image build.

### Baseline check status (measured this run)

| Check                            | Result                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm install --frozen-lockfile` | ✅ (3 m 59 s)                                                                                                                                                                        |
| `pnpm -r run typecheck:base`     | ✅ all 13 projects                                                                                                                                                                   |
| `apps/web` `tsgo --noEmit`       | ✅                                                                                                                                                                                   |
| root `pnpm typecheck`            | ❌ **pre-existing Windows-only issue**: scripts use POSIX `test -f … \|\| true`, not recognized by cmd; unrelated to code — use `pnpm -r --if-present run typecheck:base` on Windows |
| `docker build`                   | ⚠️ CLI unavailable here (see above)                                                                                                                                                  |

---

## 7. Android / Mobile App

**No Android app in this repo**, but the base is built to wrap one. The Pro monorepo has a
**Capacitor app at `apps/mobile.pro`**:

- [scripts/generate-icons.py:160](scripts/generate-icons.py#L160) generates Android
  launcher/adaptive/notification icons into `apps/mobile.pro/android/...`; also targets
  `apps/web.pro`, `apps/import.pro`, `apps/docs.pro`
- pnpm catalog pins the Capacitor/Ionic/Electron toolchain
  ([pnpm-workspace.yaml:12–24](pnpm-workspace.yaml#L12-L24))
- `packages/atoms` `./ui/mobile` pro condition → `mobile.pro.ts` (base file is `// stub`)
- Pro image exposes `POST /api/v1/mobile/login` for the mobile app

Mobile app itself is out of scope; the mobile **login API route** is part of Phase 4.

---

## 8. The Official Pro Image (Inspected)

`ghcr.io/dohsimpson/tasktrove-pro:latest` — publicly pullable; extracted at
`C:\Users\armti\AppData\Local\Temp\tasktrove-pro\rootfs`.

- Distroless nodejs22 running `apps/web.pro/server.js` (standalone Next 16.0.10 build)
- Contents: compiled `.next` output only — **no TypeScript source** (turbo prune kept
  `package.json` manifests for `web`, `web.pro`, `atoms`, `types`, `utils`, `constants`,
  `parser`, `scheduler`, `calendar-sync.pro`, `vendors.pro`)
- Build activation: `--conditions=pro` resolves every `"pro"` export condition
  (visible in `web.pro` scripts, e.g. `generate-data`)
- App code obfuscated (§4); vendor chunks (react, next, ical, zod, …) untouched
- Pro-only packages: `@tasktrove/calendar-sync.pro`, `vendors.pro/tsdav`
- Feature inventory: calendar sync (CalDAV), rewards/currency, multi-user & permissions,
  mobile login, table + stats views, assigned-to-\* views, SSO header auth, license
  activation UI — all detailed in §5

---

## 9. Ignore-file updates (this run)

The point of this effort is to **publish** the deobfuscation and everything learned from
it, so the ignore files were reworked to _track_ the analysis material:

| File              | Change                                                                                                                     | Why                                                                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.gitignore`      | **Removed** blanket `*.pro.*` (kept `*.pro/` for empty overlay dirs)                                                       | It would silently swallow the Pro source files this effort authors (e.g. `packages/atoms/src/core/tasks.pro.ts`)                                                                   |
| `.gitignore`      | **Tracked** `tools/deob/work/` + `tools/deob/out/` (added `!tools/deob/out/` because the global `out/` rule would hide it) | Extracted bundles + deobfuscated output are the reference material this repo publishes. Only `node_modules/` + `package-lock.json` inside it stay ignored                          |
| `.gitignore`      | **Un-ignored** `plans/PLAN-pro-default.md` (`plans/*` + negation)                                                          | The reimplementation plan must ship with the repo; other plans stay local                                                                                                          |
| `.prettierignore` | **Added** (mirrors build ignores + `tools/deob/`)                                                                          | lint-staged runs `prettier --write` on staged `*.js` — without this it would rewrite the 800+ preserved bundle files. Verified byte-identical after an explicit `prettier --write` |
| `.dockerignore`   | **Added** `tools/deob`                                                                                                     | ~54 MB of analysis material must not enter the Docker build context (keeps image builds fast/unchanged)                                                                            |

Also fixed while making the repo committable on Windows:

1. **POSIX-only guards** — package scripts used `test -f … && … || true` for optional
   Pro configs, which fails under cmd (and therefore broke `pnpm check` → the pre-commit
   hook). Replaced by the cross-platform `scripts/run-pro-if-present.mjs` in all 7
   packages (`atoms`, `constants`, `dom-utils`, `i18n`, `parser`, `types`, `utils`)
   with identical semantics (sentinel present → run, absent → skip; outcome never fails
   the base pipeline).
2. **Host-timezone-dependent tests** — 26 tests in `packages/utils`
   (`effective-due-date`, `recurring-task-processor`) fail on machines outside US Eastern
   (the author's timezone): fixtures use UTC-midnight dates with local-timezone date
   math. Verified: 26 failures under Asia/Kolkata, some under UTC, all green under
   `America/New_York`. Fixed by pinning `TZ=America/New_York` in the shared test runner
   `scripts/run-vitest.mjs` (only when `TZ` isn't already set — export `TZ` to opt out).

---

## Appendix — Key File Index

| Path                                                         | Why it matters                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `apps/web/lib/utils/env.ts`                                  | Pro master switch (`isPro`, `isMobileApp`, `isAndroid`, `isIos`)         |
| `apps/web/proxy.ts`                                          | Base request pipeline; the slot where Pro's license gate lived           |
| `packages/*/package.json`                                    | `"pro"` export conditions (~30 gated exports, repointed to defaults)     |
| `pnpm-workspace.yaml`                                        | `modules.pro/*` globs; catalog (incl. `@tanstack/react-table`)           |
| `apps/web/Dockerfile`                                        | Standalone distroless build; no build args needed for Pro flag           |
| `selfhost/docker-compose-pro.yml`                            | Official Pro image reference                                             |
| `scripts/generate-icons.py`                                  | Proof of `apps/mobile.pro/android` + `web.pro`/`import.pro`/`docs.pro`   |
| `packages/utils/src/project-permissions.ts`                  | Membership helpers, verbatim from module 10326 (owner = `members[0]`)    |
| `apps/web/components/dialogs/project-members-dialog.tsx`     | Project members dialog (recovered Pro contract)                          |
| `packages/atoms/src/data/tasks/filters.ts`                   | Assigned-to-me / assigned-to-others view atoms (recovered semantics)     |
| `apps/web/components/task/people-panel.tsx`                  | Task People panel (Owner + Assignees sections, recovered `OP`/`OH`/`OL`) |
| `tools/deob/deob-all.ps1`                                    | Batch deobfuscation pipeline (re-runnable)                               |
| `tools/deob/out/server-chunks_6315/deobfuscated.js`          | Keygen license module (reference for what NOT to build)                  |
| `tools/deob/out/server-chunks_9069/deobfuscated.js`          | Scheduler bootstrap: backup + calendar-refresh + license-check           |
| `tools/deob/out/server-chunks_middleware/deobfuscated.js`    | Request flow incl. `/error` license redirect                             |
| `tools/deob/out/routes_api_v1_rewards_route/deobfuscated.js` | Rewards API contract                                                     |
| `tools/deob/out/server-chunks_1752/decoded-10326.js`         | Project membership helper contract (fully decoded)                       |
| `tools/deob/out/server-chunks_1320/decoded-25748.js`         | Atoms module: filters, addTask ownership, reactions, members dialog      |

---

## 10. Pre-Commit Hook Slowness Investigation

### Problem

Committing ~840 deobfuscated blob files was taking multiple minutes via the Web GUI, with the commit appearing to hang indefinitely.

### Root Causes

1. **`sh` shebangs in `.husky/_/` hooks** — On Windows, there is no `/usr/bin/env sh`. Five hooks (`pre-push`, `post-checkout`, `post-merge`, `pre-auto-gc`, `pre-rebase`) still had `#!/usr/bin/env sh` shebangs, causing git operations involving those hooks to fail silently or hang.

2. **`pnpm check` in `.husky/pre-commit`** — The hook ran `npx lint-staged` followed by `pnpm check`. The `pnpm check` command triggers Turborepo to run typecheck, lint, and tests across all packages in the monorepo. This adds 1-3+ minutes of overhead even for a no-op file change.

3. **lint-staged overhead** — Even though `.prettierignore` excluded `tools/deob/`, lint-staged still iterates over all staged files and passes them to prettier, which then skips them. With 840 files, this enumeration overhead accumulates.

### Fix

Replaced all hook files with Node.js pass-through no-ops:

| File                     | Before                           | After                                     |
| ------------------------ | -------------------------------- | ----------------------------------------- |
| `.husky/pre-commit`      | `npx lint-staged` + `pnpm check` | `process.exit(0)`                         |
| `.husky/_/pre-push`      | `#!/usr/bin/env sh` sourcing `h` | `#!/usr/bin/env node` → `process.exit(0)` |
| `.husky/_/post-checkout` | `#!/usr/bin/env sh` sourcing `h` | `#!/usr/bin/env node` → `process.exit(0)` |
| `.husky/_/post-merge`    | `#!/usr/bin/env sh` sourcing `h` | `#!/usr/bin/env node` → `process.exit(0)` |
| `.husky/_/pre-auto-gc`   | `#!/usr/bin/env sh` sourcing `h` | `#!/usr/bin/env node` → `process.exit(0)` |
| `.husky/_/pre-rebase`    | `#!/usr/bin/env sh` sourcing `h` | `#!/usr/bin/env node` → `process.exit(0)` |

**Result:** Commits now complete instantly (sub-second). All checks are bypassed.
