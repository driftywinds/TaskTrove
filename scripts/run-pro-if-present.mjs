// Cross-platform guard for optional Pro-edition checks.
//
// Replaces the POSIX-only package-script pattern:
//   (test -f <file> && pnpm <script> || true)
// which fails on Windows shells ('test' is not a command there).
//
// Behavior is intentionally identical to the original:
//   - sentinel file missing  -> exit 0 (skip silently)
//   - sentinel file present  -> run the command, ignore its exit code
//     (the original `|| true` swallowed failures too; `check:pro` is the strict variant)
//
// Usage: node ../../scripts/run-pro-if-present.mjs <sentinel-file> <command> [args...]
import { existsSync } from "node:fs"
import { spawnSync } from "node:child_process"

const [sentinel, ...command] = process.argv.slice(2)

if (!sentinel || command.length === 0) {
  console.error("usage: run-pro-if-present.mjs <sentinel-file> <command> [args...]")
  process.exit(2)
}

if (!existsSync(sentinel)) {
  process.exit(0)
}

const result = spawnSync(command[0], command.slice(1), {
  stdio: "inherit",
  shell: true,
})

// Mirror the original `|| true`: presence of the sentinel opts the check in,
// but its outcome never fails the base pipeline.
process.exit(result.error ? 1 : 0)
