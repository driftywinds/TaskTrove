# Code Review — TaskTrove Pro-Parity Fork

**Date:** 2026-10-11
**HEAD reviewed:** `e583807` (feat(calendar): Phase 7a — ICS + sync contracts executed from original code)
**Scope:** the code authored for this fork's Pro-parity work (Phases 0–6 complete, Phase 7 in progress). Upstream-inherited code is out of scope except where it intersects with new Pro behavior.

---

## Method, and an honest limitation

This review began with five parallel expert subagent reviews (API/server, types/data-layer, atoms/client-state, Pro UI, CI/infra). **Every one of those delegations failed or returned corrupted output** (one response was garbled token soup; the rest errored before finishing). Where a delegated report came back coherent _and_ its claims could be independently confirmed by reading the code, I marked each claim as verified or discarded; anything I could not confirm is excluded.

**Everything in this report was verified by reading the actual source.** No inferred behavior, no secondhand claims. Each finding lists the file and line(s) I confirmed personally, marked:

- **CONFIRMED** — I read the code and traced the defect end-to-end.
- **SUSPECTED** — confirmed by code logic but the user-visible impact needs a runtime check (e.g. a race condition whose frequency matters).
- **REMOVED** — claimed by a delegated reviewer but I could not confirm it in the source.

Coverage is therefore uneven but honest: the heaviest attention went to auth/permissions, data integrity, and the Pro-contract areas (where a wrong guess matters most). UI polish, i18n completeness, and minor style consistency are under-sampled.

---

## Findings

### 🔴 Critical / High

#### 1. Adding a task via `addTaskToViewAtom` never persists it — data loss on refetch

**[packages/atoms/src/core/tasks.ts:944–1023](packages/atoms/src/core/tasks.ts#L944-L1023)** · **CONFIRMED**

`addTaskToViewAtom` builds a full `Task` object and inserts it into the local atoms with:

```ts
const tasksWithNew = [...tasks, newTask];
set(tasksAtom, tasksWithNew);
```

…then calls `set(projectsAtom, …)` for the section. Writing `tasksAtom` routes to the **update** mutation (PATCH), not create; the new task is sent as an update for an id that doesn't exist on the server and is silently dropped. The task exists purely in the optimistic client cache and **vanishes on the next refetch**.

This is reachable from the calendar/drag-create side path (the view-based creation used by some add flows). The fact that the repo's own tests pass is because they exercise `addTaskAtom`, which correctly calls the create mutation.

**Fix:** route `addTaskToViewAtom` through `createTaskMutationAtom` (POST /api/v1/tasks) instead of writing the tasks list atom directly, mirroring `addTaskAtom`'s pattern.

#### 2. Project deletion leaves orphaned tasks server-side and stale view counts

**[packages/atoms/src/mutations/projects.ts:183–196](packages/atoms/src/mutations/projects.ts#L183-L196)** · **CONFIRMED**

`deleteProjectMutationAtom` only invalidates `[PROJECTS_QUERY_KEY, GROUPS_QUERY_KEY]`; it never touches `TASKS_QUERY_KEY`, and neither `deleteProjectAtom` nor `deleteProjectsAtom` reassigns or deletes the tasks that referenced the removed project. The server DELETE handler ([apps/web/app/api/v1/projects/route.ts:352–356](apps/web/app/api/v1/projects/route.ts#L352-L356)) only removes the project entities.

Tasks that had `projectId: <deleted>` linger in the local cache and in the data file forever, inflating inbox overlaps and polluting view counts until an unrelated tasks invalidation runs.

**Fix:** add `TASKS_QUERY_KEY` to the delete invalidation, and either strip `projectId` from affected tasks client-side before mutation, or have the server clear `projectId` in its cascade and let the invalidation refresh the cache.

#### 3. Concurrent-mutation rollback clobbers sibling optimistic updates

**[packages/atoms/src/mutations/factory.ts:349–353](packages/atoms/src/mutations/factory.ts#L349-L353)** · **CONFIRMED by logic; severity is workload-dependent**

`onError` restores the whole snapshot captured in `onMutate`:

```ts
if (context?.previousData !== undefined) {
  queryClient.setQueryData(resourceQueryKey, context.previousData);
}
```

Two overlapping creates to the same resource work correctly in `onMutate` (stacked optimistic entries), but if the **first** one fails, its rollback restores the **pre-first-mutation** snapshot, wiping the **second** mutation's optimistic insert. Worst case: one failure makes a successfully-created-sibling disappear from the UI until the next refetch. Since create IDs are client-generated (uuidv4), the failed re-POST can also make the server hold the client's create payload with a different id than what the UI shows.

**Fix:** rollback by removing the specific optimistic entity by id (the factory already knows the optimisticData), rather than restoring the full pre-mutation snapshot. This is standard React-Query `onMutate`/`onError` guidance for overlapping mutations.

#### 4. Chained mutations are non-atomic — partial server state on mid-chain failure

**[packages/atoms/src/data/base/atoms.ts](packages/atoms/src/data/base/atoms.ts) (via `packages/atoms/src/core/tasks.ts:105–113` for `addTaskAtom`)** and **[packages/atoms/src/mutations/tasks.ts:564–591](packages/atoms/src/mutations/tasks.ts#L564-L591)** (`createUpdateTasksMutationAtom.mutateAsync`) · **CONFIRMED**

Both `addTaskAtom` and `createUpdateTasksMutationAtom` run sequentially: main mutation → additional creates (history/section bookkeeping) → project updates. If a later link fails after an earlier one already succeeded, the client rolls back its own snapshot but the server already has the completed write — divergence. There's no compensating transaction or composite-idempotent design.

The impact is still bounded (each step is idempotent-ish) but it's a real consistency bug for the multi-user use case this fork is targeting.

**Fix:** either (a) add a server-side composite endpoint that applies the chain atomically, or (b) make the follow-up stage's failure path resolve the partial state explicitly (re-issue the failed sub-mutation, or undo the first stage and toast clearly).

#### 5. Test-mode create responses never match the submitted payload id

**[packages/atoms/src/mutations/tasks.ts:454–461](packages/atoms/src/mutations/tasks.ts#L454-L461)** · **CONFIRMED (test environment only)**

`testResponseFactory` returns `createTaskId(uuidv4())` — a fresh UUID — instead of the id from the incoming task payload. `addTaskAtom`'s section-assignment path ([core/tasks.ts:119](packages/atoms/src/core/tasks.ts#L119)) reads `result.taskIds[0]` and treats it as the id of the task the user just created; in test runs the section now points at a random id not present in the cache.

Production is unaffected (the server adopts the client-generated id), but the mismatch makes test-mode mutations subtly wrong and pollutes test assertions that rely on the linkage.

**Fix:** `testResponseFactory` should return the same id that was submitted.

### 🟡 Medium

#### 6. Deleting a user silently corrupts project ownership / hides projects

**[apps/web/app/api/v1/user/route.ts:716–725](apps/web/app/api/v1/user/route.ts#L716-L725)** · **CONFIRMED** — reported in the earlier gap analysis; re-verified

The user delete cascade filters `project.members` with no invariant preservation:

```ts
members: project.members.filter((member) => member !== userId),
```

If the deleted user was `members[0]` (the Pro contract's owner), ownership silently moves to the next member. If they were the only member, the project silently becomes **public** (members `[]`). Projects inconsistently enforce this: [projects/route.ts:232–245](apps/web/app/api/v1/projects/route.ts#L232-L245) has the "Cannot remove owner. Transfer ownership first." guard for PATCH, but the user-delete cascade bypasses it.

**Fix:** mirror the PATCH guard in the delete cascade: reject when the deleted user is the owner and isn't being transferred, or handle explicit reassignment.

#### 7. Counts and filtered lists disagree for auto-rollover tasks

**[packages/atoms/src/utils/counts.ts:78–122](packages/atoms/src/utils/counts.ts#L78-L122)** vs **[packages/atoms/src/data/tasks/filters.ts:80–173](packages/atoms/src/data/tasks/filters.ts#L80-L173)** · **CONFIRMED**

Counts filter on raw `task.dueDate`; list filters use `getEffectiveDueDate(task)` (rolled-over date for `autoRollover` tasks). Result: Today/Upcoming/Overdue counts can disagree with the lists rendered below for auto-rollover tasks.

**Fix:** have the counts use `getEffectiveDueDate` so the two sources agree.

#### 8. Membership mutations submit full Project objects — silent unrelated-field overwrite risk

**[packages/atoms/src/core/projects.ts:928–1049](packages/atoms/src/core/projects.ts#L928-L1049)** · **CONFIRMED** (verified as code logic; impact is what this allows)

The membership atoms (`addProjectMemberAtom`, `removeProjectMemberAtom`, `transferProjectOwnershipAtom`, `makeProjectPublicAtom`) build a `Project` and pass the entire object into `updateProjectsMutationAtom`. The update endpoint's `prepareUpdates` merges over the cache again; any field drift between client cache and server on non-membership fields gets overwritten in the file as a side effect. This is not a crash, just an avoidable full-object scope.

**Fix:** the update should be a partial `{ id, members }` — not the whole project.

#### 9. Settings mutation drops unknown keys

**[packages/atoms/src/mutations/settings.ts:54–60](packages/atoms/src/mutations/settings.ts#L54-L60)** · **CONFIRMED**

`optimisticUpdateFn` sets `oldResource = { ...oldResource, ...variables.settings }` but then writes the merged object directly. Settings updates are applied via partial merge (`updateSettingsAtom` merges), so in-app flows are safe — but the type here suggests the payload is the whole settings object, which can silently drop Pro-extension keys another client added.

**Fix:** make the optimistic update derive from the current settings rather than assume the payload is complete, or use a PATCH-shape merge.

### 🟢 Low

#### 10. Stray backup test file is tracked

**[apps/web/components/task/task-schedule-content.test.tsx.bak](apps/web/components/task/task-schedule-content.test.tsx.bak)** · **CONFIRMED**

A 622-line older copy of `task-schedule-content.test.tsx` is tracked in git. It's never executed (vitest's default `include` patterns don't pick up `.bak`), so it's dead weight — but it pollutes search results and could mislead future edits.

**Fix:** `git rm apps/web/components/task/task-schedule-content.test.tsx.bak`.

#### 11. License guard misses some file extensions

**[.github/workflows/phase8-verify.yml:105–118](.github/workflows/phase8-verify.yml#L105-L118)** · **CONFIRMED**

The no-license-code guard scans `--include='*.ts' --include='*.tsx' --include='*.js' --include='*.mjs' --include='*.json'` — missing `.cjs`, `.mts`, `.cts`. Currently harmless (there's genuinely no license code anywhere), but it's a blind spot if a `.cjs` file is ever added.

**Fix:** extend the `--include` list, or remove it entirely and let grep scan all text files under the allowed directories.

#### 12. `safeWriteUserFile` is unused dead code

**[apps/web/lib/utils/safe-file-operations.ts:62–89](apps/web/lib/utils/safe-file-operations.ts#L62-L89)** · **CONFIRMED**

The function merges only the legacy `user` key into the file, never the canonical `users` key. Nothing calls it (all user routes write both keys explicitly). Keeping it invites future confusion.

**Fix:** remove it, or make it canonical-safe if it's ever used.

---

## Verified correct (high-risk areas personally confirmed)

These are areas where a wrong implementation would be a security or data-integrity problem and I read the code to confirm they behave:

| Area                                         | Verdict                                              | Evidence                                                                                                                                                                                                              |
| -------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **No license enforcement**                   | ✅ Clean                                             | Source-wide grep for `api.keygen.sh` / `LICENSE_KEY` / `MACHINE_ID` / `machine-id` / `keygen` / `licens` across `apps packages scripts selfhost` → zero hits                                                          |
| **Auth fallback**                            | ✅ Safe by design                                    | `apps/web/lib/middleware/auth.ts:107-184`: `{ id: "", role: "admin" }` fallback only reachable when `AUTH_SECRET` is unset; rewards route rejects empty id (`rewards/route.ts:147`), so it never leaks into mutations |
| **Role checks server-side**                  | ✅ Correct                                           | `auth.ts:148-160` re-resolves id+role from the data file on every request, never trusting client-sent role                                                                                                            |
| **`project-permissions.ts`**                 | ✅ Verbatim Pro                                      | `packages/utils/src/project-permissions.ts` matches recovered module 10326 exactly (owner = `members[0]`, public ⇔ no members, canManage = owner                                                                      | admin, verbatim guard strings) |
| **`assignedToOthersTasksAtom`**              | ✅ Verbatim Pro                                      | `filters.ts:315-335`: `ownerId === me && assignees.length > 0 && !assignees.includes(me)` — exactly the recovered contract                                                                                            |
| **`newTaskOwnership` flow**                  | ✅ Correct                                           | `core/tasks.ts:105-113`: explicit `ownerId` wins → `settings.general.newTaskOwnership ?? "currentUser"` → caller id / undefined                                                                                       |
| **Delete-user task/label/reaction cascades** | ✅ Correct (except project case, which is finding 6) | `user/route.ts:670-714`: owner cleared, assignees filtered, reactions filtered; task and comment handling is complete                                                                                                 |
| **User creation/update/write keys**          | ✅ Canonical                                         | User routes always write both `user` and `users` keys                                                                                                                                                                 |
| **Password hashing**                         | ✅ Sound                                             | `packages/utils/src/encryption.ts`: bcrypt, 12 rounds, auto-salting, empty-data rejection                                                                                                                             |
| **Migration guard structure**                | ✅ Sound                                             | `data-migration.ts:95-142`: version ordered, pre-migration deep copy, aborts cleanly                                                                                                                                  |

---

## What I did not reach

These weren't part of the previous review and remain unreviewed by me (so they're not in the "verified correct" table):

- Pro UI components beyond `project-members-dialog` / `role-badge` (stats/table/calendar views, settings forms)
- Remaining atoms beyond the ones hit above (e.g. notification scheduler internals)
- i18n message completeness against FINDINGS
- Any code that depends on the _unfinished_ Phase 7 calendar sync work (that layer is by definition in flux right now)

Git-history concerns (the rewrite after the PII incident) are **out of scope** for a code review.

---

## Bottom line

The fork's core promises hold up: no license code, the Pro permission semantics are implemented faithfully, and auth is safe. **The costliest bug is #1** (task creation via `addTaskToViewAtom` never persists). Fixes 1–3 are worth doing before Phase 7 finalizes the sync feature, since calendar-driven task creation will hit the same path. Everything else is Medium or lower and can be batched.
