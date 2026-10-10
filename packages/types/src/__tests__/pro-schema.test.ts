/**
 * Pro schema tests: data-file round-trips (base + official Pro image),
 * users normalization, cron validator, reward themes, productivity refine.
 */
import { describe, it, expect } from "vitest";
import { z } from "zod";
import { DataFileSchema, UserFileSchema, getDataFileUsers } from "../data-file";
import {
  DEFAULT_EMPTY_DATA_FILE,
  DEFAULT_USER,
  DEFAULT_PROJECT_SECTION,
} from "../defaults";
import { LATEST_DATA_VERSION } from "../schema-version";
import { CronSchema } from "../calendar";
import { isValidCronExpression } from "../validators";
import { ProductivitySettingsSchema, UserSettingsSchema } from "../settings";
import {
  REWARD_THEMES,
  REWARD_THEME_IDS,
  REWARD_LEVEL_THRESHOLDS,
  getRewardLevels,
} from "../reward-levels";
import { DEFAULT_CURRENCY, DEFAULT_CURRENCY_ID } from "../rewards";
import { createUserId } from "../id";

const TEST_USER_ID_1 = createUserId("12345678-1234-4234-8234-123456789abc");
const TEST_USER_ID_2 = createUserId("87654321-4321-4321-8321-210987654321");

describe("DataFileSchema (pro)", () => {
  it("parses a fresh default data file", () => {
    const result = DataFileSchema.safeParse(DEFAULT_EMPTY_DATA_FILE);
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data.rewardEvents).toEqual([]);
    expect(result.data.edition).toBe("pro");
    expect(result.data.users).toHaveLength(1);
    expect(result.data.users?.[0]?.role).toBe("admin");
  });

  it("parses a legacy base data file (single user object, no rewardEvents)", () => {
    const legacyFile = {
      tasks: [],
      projects: [],
      labels: [],
      projectGroups: DEFAULT_EMPTY_DATA_FILE.projectGroups,
      labelGroups: DEFAULT_EMPTY_DATA_FILE.labelGroups,
      settings: DEFAULT_EMPTY_DATA_FILE.settings,
      user: {
        id: TEST_USER_ID_1,
        username: "legacy",
        password: "hashed",
      },
      version: LATEST_DATA_VERSION,
    };

    const result = DataFileSchema.safeParse(legacyFile);
    expect(result.success).toBe(true);
    if (!result.success) return;
    // role defaults to admin, rewardEvents defaults to []
    expect(result.data.user).toMatchObject({ role: "admin" });
    expect(result.data.rewardEvents).toEqual([]);
  });

  it("parses an official Pro image data file (users array under the `user` key)", () => {
    const proImageFile = {
      ...DEFAULT_EMPTY_DATA_FILE,
      user: [
        {
          ...DEFAULT_USER,
          id: TEST_USER_ID_1,
          username: "admin",
          role: "admin",
        },
        {
          ...DEFAULT_USER,
          id: TEST_USER_ID_2,
          username: "member",
          role: "user",
        },
      ],
      users: undefined,
      rewardEvents: [
        {
          id: "42d4a716-1111-4222-8333-444455556666",
          userId: TEST_USER_ID_1,
          type: "TASK_COMPLETED",
          entityId: "52d4a716-1111-4222-8333-444455556666",
          points: 10,
          timestamp: new Date("2024-06-01T12:00:00Z"),
        },
      ],
    };

    const result = DataFileSchema.safeParse(proImageFile);
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(getDataFileUsers(result.data)).toHaveLength(2);
  });

  it("rejects a data file with neither user nor users", () => {
    const result = DataFileSchema.safeParse({
      ...DEFAULT_EMPTY_DATA_FILE,
      user: undefined,
      users: undefined,
    });
    expect(result.success).toBe(false);
  });

  it("rejects more users than the cap", () => {
    const manyUsers = Array.from({ length: 51 }, (_, index) => ({
      ...DEFAULT_USER,
      username: `user-${index}`,
    }));
    const result = DataFileSchema.safeParse({
      ...DEFAULT_EMPTY_DATA_FILE,
      users: manyUsers,
    });
    expect(result.success).toBe(false);
  });
});

describe("UserFileSchema (pro)", () => {
  it("accepts a legacy single user object", () => {
    expect(UserFileSchema.safeParse({ user: DEFAULT_USER }).success).toBe(true);
  });

  it("accepts a users array", () => {
    expect(UserFileSchema.safeParse({ user: [DEFAULT_USER] }).success).toBe(
      true,
    );
  });

  it("rejects an empty user value", () => {
    expect(UserFileSchema.safeParse({ user: [] }).success).toBe(false);
    expect(UserFileSchema.safeParse({}).success).toBe(false);
  });
});

describe("getDataFileUsers", () => {
  it("prefers the canonical users array", () => {
    const users = [DEFAULT_USER];
    expect(getDataFileUsers({ user: undefined, users })).toEqual(users);
  });

  it("normalizes a single user object", () => {
    expect(getDataFileUsers({ user: DEFAULT_USER })).toEqual([DEFAULT_USER]);
  });

  it("normalizes a users array stored under the user key", () => {
    expect(getDataFileUsers({ user: [DEFAULT_USER] })).toEqual([DEFAULT_USER]);
  });

  it("returns an empty list when no user data exists", () => {
    expect(getDataFileUsers({})).toEqual([]);
  });
});

describe("isValidCronExpression", () => {
  it("accepts valid 5-field expressions", () => {
    expect(isValidCronExpression("* * * * *")).toBe(true);
    expect(isValidCronExpression("0 2 * * 5")).toBe(true);
    expect(isValidCronExpression("30 4 1 * 0")).toBe(true);
    expect(isValidCronExpression("  15 12 * * 7  ")).toBe(true);
  });

  it("rejects malformed expressions", () => {
    expect(isValidCronExpression("* * * *")).toBe(false);
    expect(isValidCronExpression("* * * * * *")).toBe(false);
    expect(isValidCronExpression("60 * * * *")).toBe(false);
    expect(isValidCronExpression("* 24 * * *")).toBe(false);
    expect(isValidCronExpression("* * 0 * *")).toBe(false);
    expect(isValidCronExpression("* * * 13 *")).toBe(false);
    expect(isValidCronExpression("* * * * 8")).toBe(false);
    expect(isValidCronExpression("*/5 * * * *")).toBe(false);
    expect(isValidCronExpression("")).toBe(false);
  });
});

describe("CronSchema", () => {
  it("trims and validates cron expressions", () => {
    expect(CronSchema.parse(" 0 2 * * 1 ")).toBe("0 2 * * 1");
    expect(CronSchema.safeParse("bad").success).toBe(false);
  });

  it("uses the Pro validation message", () => {
    const result = CronSchema.safeParse("bad");
    expect(result.success).toBe(false);
    if (result.success) return;
    expect(result.error.issues[0]?.message).toBe(
      "Cron expression must include 5 fields with valid ranges (minute hour day month day-of-week).",
    );
  });
});

describe("ProductivitySettingsSchema", () => {
  it("requires the default currency in customCurrencies", () => {
    expect(ProductivitySettingsSchema.safeParse({}).success).toBe(true);
    expect(
      ProductivitySettingsSchema.safeParse({ customCurrencies: [] }).success,
    ).toBe(false);
    expect(
      ProductivitySettingsSchema.safeParse({
        customCurrencies: [DEFAULT_CURRENCY],
      }).success,
    ).toBe(true);
  });

  it("accepts undefined customCurrencies", () => {
    expect(
      ProductivitySettingsSchema.safeParse({ customCurrencies: undefined })
        .success,
    ).toBe(true);
  });
});

describe("UserSettingsSchema (pro)", () => {
  it("accepts settings without productivity (legacy)", () => {
    const result = UserSettingsSchema.safeParse(
      DEFAULT_EMPTY_DATA_FILE.settings,
    );
    expect(result.success).toBe(true);
  });

  it("accepts settings with productivity block", () => {
    const result = UserSettingsSchema.safeParse({
      ...DEFAULT_EMPTY_DATA_FILE.settings,
      productivity: {
        rewardTheme: "pirate",
        rewardsEnabled: true,
        currencyRewardsEnabled: false,
        customCurrencies: [DEFAULT_CURRENCY],
        wishlistItems: [],
      },
    });
    expect(result.success).toBe(true);
  });

  it("rejects unknown reward themes", () => {
    const result = UserSettingsSchema.safeParse({
      ...DEFAULT_EMPTY_DATA_FILE.settings,
      productivity: { rewardTheme: "unknown-theme" },
    });
    expect(result.success).toBe(false);
  });
});

describe("REWARD_THEMES", () => {
  it("defines 7 themes with 10 levels each and ascending thresholds", () => {
    expect(REWARD_THEME_IDS).toHaveLength(7);
    for (const id of REWARD_THEME_IDS) {
      const theme = REWARD_THEMES[id];
      expect(theme.levels).toHaveLength(10);
      theme.levels.forEach((level, index) => {
        expect(level.level).toBe(index + 1);
        expect(level.threshold).toBe(REWARD_LEVEL_THRESHOLDS[index]);
        expect(level.name.length).toBeGreaterThan(0);
      });
      const thresholds = theme.levels.map((level) => level.threshold);
      const sorted = [...thresholds].sort((a, b) => a - b);
      expect(thresholds).toEqual(sorted);
    }
  });

  it("getRewardLevels returns the levels for each theme", () => {
    expect(getRewardLevels("default")).toEqual(REWARD_THEMES.default.levels);
  });
});

describe("DEFAULT_CURRENCY", () => {
  it("uses the all-zeros UUID and passes its own schema", () => {
    expect(DEFAULT_CURRENCY_ID).toBe("00000000-0000-0000-0000-000000000000");
    expect(z.uuid().safeParse(DEFAULT_CURRENCY_ID).success).toBe(true);
  });
});

describe("DataFileSchema (full official Pro image file)", () => {
  it("parses a Pro image file with people, membership, reactions, rewards, and calendar settings", () => {
    // Exercises every schema added across Phases 4-6 against the shape the
    // official Pro image writes: users array under the `user` key, cleared
    // owner stored as null, assignees, task rewards, comment reactions,
    // project members, currency reward events, and calendar sync settings.
    const fullProFile = {
      ...DEFAULT_EMPTY_DATA_FILE,
      user: [
        {
          ...DEFAULT_USER,
          id: TEST_USER_ID_1,
          username: "admin",
          role: "admin",
        },
        {
          ...DEFAULT_USER,
          id: TEST_USER_ID_2,
          username: "member",
          role: "user",
        },
      ],
      users: undefined,
      tasks: [
        {
          id: "52d4a716-1111-4222-8333-444455556666",
          title: "Delegated task",
          completed: false,
          priority: 2,
          labels: [],
          subtasks: [],
          comments: [
            {
              id: "62d4a716-1111-4222-8333-444455556666",
              content: "Looks good",
              userId: TEST_USER_ID_2,
              createdAt: new Date("2024-06-02T12:00:00Z"),
              reactions: [{ emoji: "👍", userId: TEST_USER_ID_1 }],
            },
          ],
          createdAt: new Date("2024-06-01T12:00:00Z"),
          recurringMode: "dueDate",
          ownerId: null,
          assignees: [TEST_USER_ID_2],
          reward: { currencyId: DEFAULT_CURRENCY_ID, amount: 25 },
        },
      ],
      projects: [
        {
          id: "72d4a716-1111-4222-8333-444455556666",
          name: "Private project",
          color: "#3b82f6",
          sections: [DEFAULT_PROJECT_SECTION],
          members: [TEST_USER_ID_1, TEST_USER_ID_2],
        },
      ],
      currencyRewardEvents: [
        {
          id: "82d4a716-1111-4222-8333-444455556666",
          userId: TEST_USER_ID_1,
          type: "WISHLIST_REDEEMED",
          entityId: "52d4a716-1111-4222-8333-444455556666",
          currencyId: DEFAULT_CURRENCY_ID,
          amount: 100,
          timestamp: new Date("2024-06-03T12:00:00Z"),
        },
      ],
      settings: {
        ...DEFAULT_EMPTY_DATA_FILE.settings,
        general: {
          ...DEFAULT_EMPTY_DATA_FILE.settings.general,
          newTaskOwnership: "currentUser",
        },
        data: {
          ...DEFAULT_EMPTY_DATA_FILE.settings.data,
          calendarSync: [
            {
              id: "92d4a716-1111-4222-8333-444455556666",
              name: "Work",
              serverUrl: "https://dav.example.com",
              username: "user",
              password: "app-password",
              authMethod: "Basic",
              cron: "0 3 * * *",
              enabled: true,
            },
          ],
          calendarSyncSchedule: { enabled: false, cron: "0 4 * * *" },
        },
      },
    };

    const result = DataFileSchema.safeParse(fullProFile);
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(getDataFileUsers(result.data)).toHaveLength(2);
    expect(result.data.tasks[0]?.ownerId).toBeNull();
    expect(result.data.tasks[0]?.assignees).toEqual([TEST_USER_ID_2]);
    expect(result.data.tasks[0]?.reward?.amount).toBe(25);
    expect(result.data.tasks[0]?.comments[0]?.reactions).toEqual([
      { emoji: "👍", userId: TEST_USER_ID_1 },
    ]);
    expect(result.data.projects[0]?.members).toEqual([
      TEST_USER_ID_1,
      TEST_USER_ID_2,
    ]);
    expect(result.data.currencyRewardEvents).toHaveLength(1);
    expect(result.data.settings.data.calendarSync).toHaveLength(1);
  });
});
