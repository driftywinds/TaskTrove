# Commit plan — Pro deobfuscation publication

Commit 1:

    chore(deob): publish TaskTrove Pro image extraction + deobfuscation workspace

    Extracted bundles from the publicly distributed ghcr.io/dohsimpson/tasktrove-pro
    image (server/client/route chunks) plus the full webcrack deobfuscated output are
    committed under tools/deob/ so the reference material ships with the repo and the
    Pro reimplementation can be audited against it.

    - tools/deob/work/   raw extracted bundles (111 files, ~19 MB, obfuscated as shipped)
    - tools/deob/out/    webcrack output (708 files, ~35 MB, readable reference)
    - tools/deob/README  what this is, how to re-run the pipeline, how to read the
                         residual string-array decoder calls, and what we deliberately
                         do NOT rebuild (Keygen license enforcement)
    - .gitignore: track the workspace (the global `out/` rule would otherwise hide
      tools/deob/out — re-included explicitly); only node_modules + package-lock stay
      ignored. Also un-ignore plans/PLAN-pro-default.md and drop the legacy `*.pro.*`
      blanket rule that would swallow Pro source files this repo will author.
    - .prettierignore: keep lint-staged/prettier from rewriting the preserved bundles
    - .dockerignore: keep ~54 MB of analysis material out of the Docker build context

    The Pro creator gave written permission to deobfuscate and preserve this work here;
    see FINDINGS.md §2 for the decision record and scope.

Commit 2:

    docs(findings): record Pro edition architecture and reimplementation plan

    FINDINGS.md now covers everything recovered from the deobfuscated bundle:
    middleware request flow and its license gate, the Keygen license module (documented
    as the thing we do NOT rebuild), scheduler jobs (backup + calendar-refresh +
    license-check), the Pro data model (users array with admin/user roles, task
    ownerId/assignees/reward, rewardEvents/currencyRewardEvents, calendar sync schemas,
    settings extensions, assigned-to-* views), API contracts (rewards, calendar x3,
    user CRUD with admin guards, mobile login), the Pro UI inventory, and Docker/baseline
    verification status.

    plans/PLAN-pro-default.md is the phased implementation plan (gates -> schemas ->
    multi-user -> rewards -> assignees -> table/stats -> UI parity -> calendar sync ->
    verification) with exit criteria and a risk register.

Commit 3 (if web tests need it — likely a separate fix commit):

    fix(tests): make package scripts and test suite host-independent

    Pre-existing failures unrelated to the Pro work, fixed because the pre-commit hook
    runs `pnpm check`:

    - package scripts used POSIX `test -f … || true` guards for optional Pro configs,
      which fail under cmd.exe and broke `pnpm check` on Windows. Replaced with the
      cross-platform scripts/run-pro-if-present.mjs in all 7 packages (same semantics:
      sentinel present -> run, absent -> skip, never fails the base pipeline).
    - 26 tests in packages/utils (effective-due-date, recurring-task-processor) depend
      on the host timezone (author's US-Eastern fixtures using UTC-midnight dates with
      local date math): 26 failures under Asia/Kolkata, some under UTC, green under
      America/New_York. scripts/run-vitest.mjs now pins TZ=America/New_York when TZ
      is not already set, making results deterministic across machines.
    - web test failures (if any remain): TBD
