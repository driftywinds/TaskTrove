import { describe, it, expect, beforeEach, afterEach } from "vitest"
import fs from "fs/promises"
import os from "node:os"
import path from "node:path"
import {
  safeReadDataFile,
  safeWriteDataFile,
  safeReadUserFile,
  safeWriteUserFile,
} from "./safe-file-operations"
import { DataFileSchema, UserFileSchema } from "@tasktrove/types/data-file"
import { DEFAULT_EMPTY_DATA_FILE, DEFAULT_USER } from "@tasktrove/types/defaults"
import { createUserId } from "@tasktrove/types/id"

describe("safe-file-operations", () => {
  let tmpDir: string
  let filePath: string

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "tasktrove-sfo-"))
    filePath = path.join(tmpDir, "tasks.json")
  })

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true })
  })

  describe("safeReadDataFile", () => {
    it("returns undefined when the file does not exist", async () => {
      const result = await safeReadDataFile({ filePath })
      expect(result).toBeUndefined()
    })

    it("returns undefined for invalid JSON", async () => {
      await fs.writeFile(filePath, "{not json", "utf-8")
      const result = await safeReadDataFile({ filePath })
      expect(result).toBeUndefined()
    })

    it("returns undefined when schema validation fails", async () => {
      await fs.writeFile(
        filePath,
        JSON.stringify({ ...DEFAULT_EMPTY_DATA_FILE, version: "not-a-version" }),
        "utf-8",
      )
      const result = await safeReadDataFile({ filePath })
      expect(result).toBeUndefined()
    })

    it("parses a valid data file", async () => {
      await fs.writeFile(
        filePath,
        JSON.stringify(DEFAULT_EMPTY_DATA_FILE),
        "utf-8",
      )
      const result = await safeReadDataFile({ filePath })
      expect(result).toBeDefined()
      expect(result?.edition).toBe("pro")
      expect(result?.rewardEvents).toEqual([])
    })

    it("parses a legacy data file with a single user object", async () => {
      const legacy = {
        ...DEFAULT_EMPTY_DATA_FILE,
        users: undefined,
        user: {
          id: "12345678-1234-4234-8234-123456789abc",
          username: "legacy",
          password: "hashed",
        },
      }
      await fs.writeFile(filePath, JSON.stringify(legacy), "utf-8")
      const result = await safeReadDataFile({ filePath })
      expect(result).toBeDefined()
    })
  })

  describe("safeWriteDataFile", () => {
    it("writes a serializable data file that round-trips", async () => {
      const writeSuccess = await safeWriteDataFile({
        filePath,
        data: DEFAULT_EMPTY_DATA_FILE,
      })
      expect(writeSuccess).toBe(true)

      const readBack = await safeReadDataFile({ filePath })
      expect(readBack).toBeDefined()
      expect(DataFileSchema.safeParse(readBack).success).toBe(true)
    })

    it("serializes Date fields to ISO strings on write", async () => {
      const data = {
        ...DEFAULT_EMPTY_DATA_FILE,
        tasks: [
          {
            id: "12345678-1234-4234-8234-123456789abc",
            title: "Dated task",
            completed: false,
            priority: 2,
            labels: [],
            subtasks: [],
            comments: [],
            createdAt: new Date("2024-06-01T12:00:00Z"),
            recurringMode: "dueDate",
          },
        ],
      }

      const writeSuccess = await safeWriteDataFile({ filePath, data })
      expect(writeSuccess).toBe(true)

      const raw = JSON.parse(await fs.readFile(filePath, "utf-8"))
      expect(raw.tasks[0].createdAt).toBe("2024-06-01T12:00:00.000Z")

      const readBack = await safeReadDataFile({ filePath })
      expect(readBack?.tasks[0]?.createdAt).toBeInstanceOf(Date)
    })
  })

  describe("safeReadUserFile", () => {
    it("reads the legacy single-user form", async () => {
      const data = {
        ...DEFAULT_EMPTY_DATA_FILE,
        users: undefined,
        user: DEFAULT_USER,
      }
      await fs.writeFile(filePath, JSON.stringify(data), "utf-8")

      const result = await safeReadUserFile({ filePath })
      expect(result).toBeDefined()
      expect(UserFileSchema.safeParse(result).success).toBe(true)
    })

    it("reads a users array stored under the user key (official Pro image)", async () => {
      const data = {
        ...DEFAULT_EMPTY_DATA_FILE,
        users: undefined,
        user: [
          DEFAULT_USER,
          {
            ...DEFAULT_USER,
            id: createUserId("87654321-4321-4321-8321-210987654321"),
            username: "member",
            role: "user",
          },
        ],
      }
      await fs.writeFile(filePath, JSON.stringify(data), "utf-8")

      const result = await safeReadUserFile({ filePath })
      expect(result).toBeDefined()
      expect(UserFileSchema.safeParse(result).success).toBe(true)
    })

    it("returns undefined when the user field is missing", async () => {
      await fs.writeFile(
        filePath,
        JSON.stringify({ ...DEFAULT_EMPTY_DATA_FILE, user: undefined, users: undefined }),
        "utf-8",
      )
      const result = await safeReadUserFile({ filePath })
      expect(result).toBeUndefined()
    })
  })

  describe("safeWriteUserFile", () => {
    it("updates only the user field, preserving other data", async () => {
      await fs.writeFile(
        filePath,
        JSON.stringify(DEFAULT_EMPTY_DATA_FILE),
        "utf-8",
      )

      const updatedUser = { ...DEFAULT_USER, username: "renamed" }
      const writeSuccess = await safeWriteUserFile({
        filePath,
        data: { user: updatedUser },
        schema: UserFileSchema,
      })
      expect(writeSuccess).toBe(true)

      const raw = JSON.parse(await fs.readFile(filePath, "utf-8"))
      expect(raw.user.username).toBe("renamed")
      expect(raw.tasks).toEqual([])
      expect(raw.edition).toBe("pro")
    })

    it("rejects invalid user data", async () => {
      await fs.writeFile(
        filePath,
        JSON.stringify(DEFAULT_EMPTY_DATA_FILE),
        "utf-8",
      )

      const writeSuccess = await safeWriteUserFile({
        filePath,
        // invalid: empty users array
        data: { user: [] },
        schema: UserFileSchema,
      })
      expect(writeSuccess).toBe(false)

      const raw = JSON.parse(await fs.readFile(filePath, "utf-8"))
      expect(raw.user.username).toBe(DEFAULT_USER.username)
    })
  })
})
