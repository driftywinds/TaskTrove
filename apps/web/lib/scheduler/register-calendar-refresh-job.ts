import { Scheduler } from "@tasktrove/scheduler"
import { DEFAULT_CALENDAR_SYNC_RUN_ON_INIT } from "@tasktrove/constants"
import { safeReadDataFile } from "@/lib/utils/safe-file-operations"

const CALENDAR_REFRESH_JOB_ID = "calendar-refresh"

type CalendarSyncScheduleConfig = {
  enabled: boolean
  cron: string
  runOnInit: boolean
}

export async function registerCalendarRefreshJob(scheduler: Scheduler) {
  const config = await loadCalendarSyncScheduleConfig()

  if (!config.enabled) {
    const removed = scheduler.unregister(CALENDAR_REFRESH_JOB_ID)
    if (removed) {
      console.log(
        "Calendar sync disabled. Existing calendar refresh job removed from scheduler.",
      )
    } else {
      console.log(
        "Calendar sync disabled. No calendar refresh job registered.",
      )
    }
    return
  }

  console.log(
    `Scheduling calendar refresh for ${config.cron} (cron: ${config.cron})`,
  )

  scheduler.register(
    {
      id: CALENDAR_REFRESH_JOB_ID,
      schedule: {
        type: "cron",
        expression: config.cron,
      },
      runOnInit: config.runOnInit,
      handler: async () => {
        console.log(
          `[${new Date().toISOString()}] Running scheduled calendar sync...`,
        )
        try {
          const { runCalendarSync } = await import("./run-calendar-sync")
          await runCalendarSync()
          console.log(
            `[${new Date().toISOString()}] Scheduled calendar sync completed successfully.`,
          )
        } catch (error) {
          console.error(
            `[${new Date().toISOString()}] Scheduled calendar sync failed:`,
            error,
          )
        }
      },
    },
    { replace: true },
  )
}

async function loadCalendarSyncScheduleConfig(): Promise<CalendarSyncScheduleConfig> {
  try {
    const dataFile = await safeReadDataFile()
    if (!dataFile) {
      console.log(
        `Could not load data file, using defaults (enabled: true, cron: ${DEFAULT_CALENDAR_SYNC_CRON}, runOnInit: ${DEFAULT_CALENDAR_SYNC_RUN_ON_INIT})`,
      )
      return {
        enabled: true,
        cron: DEFAULT_CALENDAR_SYNC_CRON,
        runOnInit: DEFAULT_CALENDAR_SYNC_RUN_ON_INIT,
      }
    }
    const schedule = dataFile.settings?.data?.calendarSyncSchedule
    if (!schedule) {
      return {
        enabled: false,
        cron: DEFAULT_CALENDAR_SYNC_CRON,
        runOnInit: DEFAULT_CALENDAR_SYNC_RUN_ON_INIT,
      }
    }
    return {
      enabled: schedule.enabled !== false,
      cron: schedule.cron,
      runOnInit: schedule.runOnInit ?? DEFAULT_CALENDAR_SYNC_RUN_ON_INIT,
    }
  } catch {
    console.log(
      `Could not load calendar sync schedule, using defaults (enabled: true, cron: ${DEFAULT_CALENDAR_SYNC_CRON}, runOnInit: ${DEFAULT_CALENDAR_SYNC_RUN_ON_INIT})`,
    )
    return {
      enabled: true,
      cron: DEFAULT_CALENDAR_SYNC_CRON,
      runOnInit: DEFAULT_CALENDAR_SYNC_RUN_ON_INIT,
    }
  }
}

const DEFAULT_CALENDAR_SYNC_CRON = "0 4 * * *"
