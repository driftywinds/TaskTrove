/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { migrateDataFile, needsMigration, getMigrationInfo } from "@/lib/utils/data-migration"
import { getRegisteredMigrationVersions } from "@/lib/utils/data-migration"
import { compareVersions } from "@tasktrove/utils/version"
import type { Json } from "@tasktrove/types/constants"
import { createVersionString } from "@tasktrove/types/id"
import { DEFAULT_EMPTY_DATA_FILE } from "@tasktrove/types/defaults"
import { getDataFileUsers } from "@tasktrove/types/data-file"
import { LATEST_DATA_VERSION } from "@tasktrove/types/schema-version"

describe("Data Migration Utility", () => {
  let mockDataFile: Json

  function createJsonData(data: Record<string, unknown>): Json {
    return JSON.parse(JSON.stringify(data))
  }

  beforeEach(() => {
    const unmigrated = {
      tasks: [],
      projects: [],
      labels: [],
      ordering: { projects: [], labels: [] },
    }

    mockDataFile = createJsonData(unmigrated)
    vi.clearAllMocks()
  })

  it("keeps schema version in sync with latest migration", () => {
    const versions = getRegisteredMigrationVersions()
    expect(versions[versions.length - 1]).toBe(LATEST_DATA_VERSION)
  })

  describe("migrateDataFile", () => {
    it("should handle data that needs no migration", async () => {
      const highVersionData = createJsonData({
        ...DEFAULT_EMPTY_DATA_FILE,
        version: "v9.9.9",
      })

      const result = await migrateDataFile(highVersionData)
      expect(result.version).toBe(createVersionString("v9.9.9"))
      expect(result).toHaveProperty("tasks")
      expect(result).toHaveProperty("projects")
      expect(result).toHaveProperty("labels")
    })

    it("should reject migration attempts for versions below v0.8.0", async () => {
      const legacyData = createJsonData({
        tasks: [],
        projects: [],
        labels: [],
        ordering: { projects: [], labels: [] },
        version: "v0.7.9",
      })

      await expect(migrateDataFile(legacyData)).rejects.toThrow(
        /Minimum supported version is v0\.8\.0/,
      )
    })
  })

  describe("needsMigration", () => {
    it("should throw when version field is missing", () => {
      expect(() => needsMigration(mockDataFile)).toThrow(/version property/)
    })

    it("should detect when very old version data needs migration", () => {
      const oldData = createJsonData({
        tasks: [],
        projects: [],
        labels: [],
        ordering: { projects: [], labels: [] },
        version: "v0.2.0",
      })
      expect(needsMigration(oldData)).toBe(true)
    })

    it("should return false for future version data", () => {
      const futureVersionData = createJsonData({
        ...DEFAULT_EMPTY_DATA_FILE,
        version: "v9.9.9",
      })
      expect(needsMigration(futureVersionData)).toBe(false)
    })
  })

  describe("getMigrationInfo", () => {
    it("should throw when version field is missing", () => {
      expect(() => getMigrationInfo(mockDataFile)).toThrow(/version property/)
    })

    it("should return correct info pattern for old data needing migration", () => {
      const info = getMigrationInfo(
        createJsonData({
          ...(mockDataFile as Record<string, unknown>),
          version: "v0.2.0",
        }),
      )

      expect(info.currentVersion).toEqual(createVersionString("v0.2.0"))
      expect(info.targetVersion).toMatch(/^v\d+\.\d+\.\d+$/)
      expect(info.needsMigration).toBe(true)
      expect(compareVersions(info.targetVersion, info.currentVersion) > 0).toBe(true)
    })

    it("should return correct info pattern for future version data", () => {
      const futureVersionData = createJsonData({
        ...DEFAULT_EMPTY_DATA_FILE,
        version: "v9.9.9",
      })
      const info = getMigrationInfo(futureVersionData)

      expect(info.currentVersion).toEqual(createVersionString("v9.9.9"))
      expect(info.targetVersion).toMatch(/^v\d+\.\d+\.\d+$/)
      expect(info.needsMigration).toBe(false)
    })
  })

  describe("v0.13.0 multi-user migration", () => {
    // Object form of the fixture so tests can spread and override fields
    // (the JSON round-trip form returns `Json`, which is a union and cannot
    // be spread).
    const baseV0120FixtureData = (): Record<string, unknown> => ({
      tasks: [],
      projects: [],
      labels: [],
      projectGroups: DEFAULT_EMPTY_DATA_FILE.projectGroups,
      labelGroups: DEFAULT_EMPTY_DATA_FILE.labelGroups,
      settings: {
        data: {
          autoBackup: { enabled: false, backupTime: "02:00", maxBackups: 5 },
        },
        notifications: { enabled: true, requireInteraction: true },
        general: {
          startView: "all",
          soundEnabled: true,
          linkifyEnabled: true,
          markdownEnabled: true,
          popoverHoverOpen: false,
          preferDayMonthFormat: false,
        },
        uiSettings: {},
      },
      user: {
        id: "12345678-1234-4234-8234-123456789abc",
        username: "base",
        password: "hashed",
      },
      version: "v0.12.0",
    })

    const baseV0120Fixture = () => createJsonData(baseV0120FixtureData())

    it("migrates a v0.12.0 base file to users + role + pro defaults", async () => {
      const result = await migrateDataFile(baseV0120Fixture())

      expect(result.version).toBe(LATEST_DATA_VERSION)
      expect(result.edition).toBe("pro")
      expect(result.rewardEvents).toEqual([])

      // canonical users array created from the legacy single user object
      expect(result.users).toHaveLength(1)
      expect(result.users?.[0]?.username).toBe("base")
      expect(result.users?.[0]?.role).toBe("admin")
      // legacy `user` key stays in sync
      expect(getDataFileUsers(result)).toEqual(result.users)

      // productivity defaults added
      expect(result.settings.productivity).toMatchObject({
        rewardTheme: "default",
        rewardsEnabled: true,
        currencyRewardsEnabled: false,
        customCurrencies: [
          {
            id: "00000000-0000-0000-0000-000000000000",
            name: "coins",
            exchangeRate: 1,
          },
        ],
        wishlistItems: [],
      })
    })

    it("moves an official Pro image users array from `user` to `users`", async () => {
      const proImageFixture = createJsonData({
        ...baseV0120FixtureData(),
        user: [
          {
            id: "12345678-1234-4234-8234-123456789abc",
            username: "admin",
            password: "hashed",
            role: "admin",
          },
          {
            id: "87654321-4321-4321-8321-210987654321",
            username: "member",
            password: "hashed",
          },
        ],
        edition: "pro",
      })

      const result = await migrateDataFile(proImageFixture)

      expect(result.users).toHaveLength(2)
      expect(result.users?.[0]?.username).toBe("admin")
      expect(result.users?.[1]?.role).toBe("user")
      expect(result.user).toBeUndefined()
      expect(result.edition).toBe("pro")
    })

    it("keeps an existing canonical users array and adds roles", async () => {
      const fixture = createJsonData({
        ...baseV0120FixtureData(),
        user: undefined,
        users: [
          {
            id: "12345678-1234-4234-8234-123456789abc",
            username: "admin",
            password: "hashed",
          },
        ],
      })

      const result = await migrateDataFile(fixture)

      expect(result.users).toHaveLength(1)
      expect(result.users?.[0]?.role).toBe("admin")
    })
  })
})
