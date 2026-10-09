# PRO-SCHEMAS.md — Exact Pro data model (decoded from the bundle)

> Extraction from `ghcr.io/dohsimpson/tasktrove-pro` (deobfuscated with webcrack +
> `tools/deob/decode-module.mjs`). This is the authoritative contract reimplemented in
> `packages/types` during Phase 1 of `plans/PLAN-pro-default.md`.
>
> Decoder usage: `node tools/deob/decode-module.mjs <deobfuscated.js> <moduleId> [out]`
> — solves the string-array rotation via the checksum IIFE and inlines all decoder calls.
> Module ids located by searching for a schema keyword and scanning back to the nearest
> `  <id>: (` header.

## 1. Core entity extensions (server chunk 1752, module 57133)

```text
UserPro = User(base: id, username, password, avatar?, apiToken?)
  + role: z.enum(["admin", "user"])              // REQUIRED in pro DataFile array form
  + preferences?: {
      theme?: string, language?: string,
      notifications?: { email?: bool, push?: bool, taskAssignments?: bool, projectUpdates?: bool },
      rewardsEnabled?: bool,
    }

TaskPro = Task(base) {
    comments: TaskCommentPro[],                  // replaces base comments (same key)
    ownerId?: UserId,
    assignees?: UserId[],                        // optional
    reward?: { currencyId: CurrencyId, amount: int },   // .optional(); amount int (no positive())
  }

TaskCommentPro = TaskComment(base) + reactions?: { emoji: string, userId: UserId }[]

ProjectPro = Project(base) + members?: UserId[]

ViewStatePro = ViewState(base) + activeFilters?: base.activeFilters & {
    assignedTo?: UserId[],
    ownedBy?: UserId[],
  }

UserPreferences = { theme?, language?, notifications?{...}, rewardsEnabled? }   // all optional
```

## 2. Rewards (module 57133)

```text
RewardEventType = enum["TASK_COMPLETED", "TASK_UNCOMPLETED", "WISHLIST_REDEEMED", "CURRENCY_EXCHANGE"]

RewardEvent = {
  id: z.string().uuid(),
  userId: UserId,
  type: RewardEventType,
  entityId: z.string().uuid(),     // REQUIRED uuid
  points: z.number().int(),
  timestamp: <datetime schema>,
}

CurrencyRewardEvent = {
  id: z.string().uuid(),
  userId: UserId,
  entityId: z.string().uuid(),
  type: RewardEventType,
  currencyId: CurrencyId,
  amount: z.number().int(),
  timestamp: <datetime schema>,
}

Currency = {
  id: CurrencyId,                          // z.uuid().brand("CurrencyId")
  name: string.min(1).max(50),
  ownerId?: UserId,                        // absent → public currency
  exchangeRate?: number.positive(),
  description?: string.max(200),
}

WishlistItem = {
  id: z.string().uuid(),
  ownerId?: UserId,
  value: number.int().nonnegative(),
  currencyId: CurrencyId,
  name: string.min(1).max(80),
  description?: string.max(240),
}

DEFAULT_CURRENCY_ID = "00000000-0000-0000-0000-000000000000"   // all-zeros; zod v4 z.uuid() accepts
DEFAULT_CURRENCY    = { id: DEFAULT_CURRENCY_ID, name: "coins", exchangeRate: 1 }
```

## 3. Settings extensions (module 8839)

```text
CronSchema = z.string().trim().refine(isValidCron, {
  message: "Cron expression must include 5 fields with valid ranges (minute hour day month day-of-week)."
})

CalendarSyncConnection = {
  id: CalendarSyncId,                      // z.uuid().brand("CalendarSyncId")
  name: string.trim().min(1),
  color?: string.trim().regex(/^#(?:[0-9a-fA-F]{6})$/, "Color must be a hex value like #3b82f6"),
  serverUrl: string.trim().url("Valid CalDAV server URL is required"),
  username: string.trim().min(1, "Username is required"),
  password: string.min(1, "Password is required"),
  authMethod?: enum["Basic", "Digest", "Oauth", "Custom"],
  defaultTimezone?: string,
  allowInsecure?: boolean,
  cron?: CronSchema,
  enabled?: boolean,
}

CalendarSyncSchedule = { enabled: boolean, cron: CronSchema, runOnInit?: boolean }

DataSettingsPro = DataSettings(base: autoBackup) & {
  calendarSync?: CalendarSyncConnection[]  (max 10),
  calendarSyncSchedule?: CalendarSyncSchedule,
}

GeneralSettingsPro = GeneralSettings(base) & {
  newTaskOwnership?: enum["currentUser", "unassigned"],
}

ProductivitySettings = {
  rewardTheme?: enum["default", "fantasy", "space", "nature", "matrix", "dojo", "pirate"],
  rewardsEnabled?: boolean,                       // pro default: true
  dailyRewardPointCap?: number.int().min(0),
  currencyRewardsEnabled?: boolean,               // pro default: false
  customCurrencies?: Currency[]  (optional;
      refine: value?.length !== 0 && value.some(c => c.id === DEFAULT_CURRENCY_ID)
      message: "customCurrencies must include the default currency"),
  wishlistItems?: WishlistItem[],
}

UserSettingsPro = UserSettings(base: data, notifications, general, uiSettings) & {
  data: DataSettingsPro,
  general: GeneralSettingsPro,
  productivity?: ProductivitySettings,
}

PartialUserSettingsPro = { data?: partial, notifications?: partial, general?: partial,
                           productivity?: partial, uiSettings?: partial }
```

## 4. Reward themes & levels (module 37039)

`RewardThemes: Record<themeId, { id, displayName, description, levels: {level, threshold, name}[] }>`
— thresholds identical across themes: 100/250/500/1000/2500/5000/10000/25000/50000/100000.

| id       | displayName    | description                             | level names (1→10) |
| -------- | -------------- | --------------------------------------- | ------------------ |
| default  | Classic        | Traditional achievement levels          | Beginner, Explorer, Apprentice, Achiever, Specialist, Expert, Master, Catalyst, Legend, Ascendant |
| fantasy  | Fantasy Mage   | Magical progression for wizards         | Mage Apprentice, Spell Seeker, Adept Wizard, Arcane Scholar, Master Sorcerer, Grand Enchanter, Archmage, Mystic Elder, Legendary Oracle, Eternal Sage |
| space    | Space Explorer | Cosmic journey through the stars        | Cadet, Astronaut, Space Pilot, Navigator, Commander, Fleet Captain, Admiral, Galaxy Warden, Cosmic Pioneer, Stellar Sovereign |
| nature   | Nature Guardian| Grow with the natural world             | Seedling, Sprout, Sapling, Young Oak, Forest Keeper, Grove Warden, Ancient Tree, Nature's Champion, Wilds Guardian, Eternal Forest |
| matrix   | Matrix         | Wake up from the simulation             | The Blue Pill, The Glitch, Operator Trainee, Red Pill Agent, Code Specialist, Digital Expert, The One's Master, System Architect, The Oracle, The One |
| dojo     | Dojo           | Master the martial arts path            | White Belt, Yellow Belt, Green Belt, Brown Belt, Black Belt, Sensei, Grandmaster, Spirit Fighter, Dragon Master, Immortal |
| pirate   | Pirate         | Sail the high seas and claim your treasure | Landlubber, Deck Hand, Swashbuckler, First Mate, Master Gunner, The Captain, Lord of the Tides, Fleet Builder, Sea Serpent, King of the Oceans |

## 5. DataFile (server chunk 9428, module 20017)

```text
DataFilePro = {
  tasks: TaskPro[],
  projects: ProjectPro[],
  labels: Label[],                             // base label unchanged
  projectGroups, labelGroups,                  // unchanged
  settings: UserSettingsPro,
  user: UserPro[]  min(1) max(NJ..lW)          // USERS ARRAY UNDER THE "user" KEY (pro quirk)
  rewardEvents: RewardEvent[],
  currencyRewardEvents?: CurrencyRewardEvent[],
  version: VersionString,
  edition: literal("pro"),
}

UserFilePro = { user: union([UserFileBase.user /*single object*/, DataFilePro.user /*array*/]) }
  → pro accepts BOTH a legacy single user object and the users array on the lightweight
    user read (auth path).

DataFileSerializationPro = { ...DataFilePro.shape,
  tasks/projects/labels/user/rewardEvents/currencyRewardEvents: serialization variants }
```

Pro wrote the array into the `user` key. Our reimplementation writes a canonical `users`
key and accepts `user`(object|array) + `users` on read (plan Phase 1 decision).

## 6. Views

Standard views pro adds: `assigned-to-me` (iconType `assigned-to-me`, "Assigned to Me",
"See tasks assigned directly to you") and `assigned-to-others` (iconType
`assigned-to-others`, "Assigned to Others", "See tasks assigned to other teammates").

## 7. Ids

- `UserId = z.uuid().brand("UserId")`
- `CurrencyId = z.uuid().brand("CurrencyId")`
- `CalendarSyncId = z.uuid().brand("CalendarSyncId")`
- Reward/wishlist event ids are plain `z.string().uuid()` (unbranded)

## 8. Known decoded module map (tools/deob/out)

| File | Module | Content |
| ---- | ------ | ------- |
| server-chunks_1752 | 57133 | core pro entity schemas (User/Task/Project/Comment/ViewState/rewards/currency/wishlist) |
| server-chunks_1752 | 8839  | settings pro (calendar sync, productivity, partial settings, defaults) |
| server-chunks_1752 | 1946  | base settings schemas (data/notifications/general/uiSettings/user/partial) |
| server-chunks_1752 | 37039 | reward themes + levels |
| server-chunks_1752 | 85119 | id schemas (CurrencyId, CalendarSyncId, createId helper) |
| server-chunks_1752 | 42962 | UserId etc. |
| server-chunks_1752 | 75278 | timestamp/datetime schema (AV) |
| server-chunks_9428 | 20017 | DataFilePro + UserFile union + serialization |

Decoded outputs: `decoded-<moduleId>.js` next to each source.
