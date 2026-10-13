import { getGlobalSingleton } from "@tasktrove/utils"
import { registerBackupJob } from "@/lib/backup/register-backup-job"
import { registerCalendarRefreshJob } from "./register-calendar-refresh-job"
import { getScheduler } from "./service"

const BOOTSTRAP_STATE_KEY = "scheduler.bootstrap"

type BootstrapState = {
  promise: Promise<void> | null
}

function getBootstrapState(): BootstrapState {
  return getGlobalSingleton<BootstrapState>(BOOTSTRAP_STATE_KEY, () => ({
    promise: null,
  }))
}

export async function bootstrapScheduler() {
  const state = getBootstrapState()

  if (!state.promise) {
    state.promise = (async () => {
      await refreshSchedulerJobs()
      console.log("Scheduler initialized. Backup and calendar refresh scheduled.")
    })()
  }

  try {
    await state.promise
  } catch (error) {
    state.promise = null
    throw error
  }
}

export async function refreshSchedulerJobs() {
  const scheduler = getScheduler()
  await registerBackupJob(scheduler)
  await registerCalendarRefreshJob(scheduler)
  scheduler.start()
}
