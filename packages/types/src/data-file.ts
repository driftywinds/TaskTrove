/**
 * Data File Schema
 *
 * Complete data structure for TaskTrove data files (tasks.json).
 *
 * Multi-user note: the canonical user list lives under `users`. Legacy base
 * files store a single object under `user`; the official Pro image stores the
 * users array under `user`. Both legacy forms are accepted on read
 * (see `getDataFileUsers`); new writes use `users`.
 */

import { z } from "zod";
import { TaskSchema, ProjectSchema, LabelSchema, UserSchema } from "./core";
import type { User } from "./core";
import {
  TaskSerializationSchema,
  ProjectSerializationSchema,
  LabelSerializationSchema,
  UserSerializationSchema,
} from "./serialization";
import { ProjectGroupSchema, LabelGroupSchema } from "./group";
import { UserSettingsSchema } from "./settings";
import { VersionStringSchema } from "./id";
import {
  RewardEventSchema,
  CurrencyRewardEventSchema,
  RewardEventSerializationSchema,
  CurrencyRewardEventSerializationSchema,
} from "./rewards";
import { DEFAULT_MAX_USERS } from "@tasktrove/constants";

/**
 * Users array schema (multi-user): at least one user, bounded by the cap
 */
export const UsersSchema = z.array(UserSchema).min(1).max(DEFAULT_MAX_USERS);

/**
 * Data File Schema
 * Main data structure containing all tasks, projects, labels, groups, settings,
 * users, and reward events.
 *
 * Requires at least one of `user` (legacy single object or Pro users array)
 * or `users` (canonical users array).
 */
export const DataFileSchema = z
  .object({
    tasks: z.array(TaskSchema),
    projects: z.array(ProjectSchema),
    labels: z.array(LabelSchema),
    projectGroups: ProjectGroupSchema,
    labelGroups: LabelGroupSchema,
    settings: UserSettingsSchema,
    /** Legacy single user (base) or users array (official Pro image) */
    user: z.union([UserSchema, UsersSchema]).optional(),
    /** Canonical users array (this reimplementation) */
    users: UsersSchema.optional(),
    /** Points reward events */
    rewardEvents: z.array(RewardEventSchema).default([]),
    /** Currency reward events */
    currencyRewardEvents: z.array(CurrencyRewardEventSchema).optional(),
    version: VersionStringSchema,
    edition: z.string().optional(),
  })
  .refine(
    (data) =>
      data.user !== undefined ||
      (data.users !== undefined && data.users.length > 0),
    { message: "Data file must contain a user or users array" },
  );

/**
 * Minimal schema for reading just the user field from data file
 * Used by auth to avoid full DataFileSchema validation during login.
 * Accepts the legacy single user object or a users array.
 */
export const UserFileSchema = z.object({
  user: z.union([UserSchema, UsersSchema]),
});

export type UserFile = z.infer<typeof UserFileSchema>;

/**
 * Extract the users list from any accepted data-file user representation.
 * Canonical `users` wins; otherwise the legacy `user` value (object or array)
 * is normalized to an array.
 */
export function getDataFileUsers(data: {
  user?: User | z.infer<typeof UsersSchema>;
  users?: z.infer<typeof UsersSchema>;
}): User[] {
  if (data.users !== undefined) {
    return data.users;
  }
  if (data.user === undefined) {
    return [];
  }
  return Array.isArray(data.user) ? data.user : [data.user];
}

/**
 * Data File Serialization Schema
 * Used for API responses - includes serialized date formats
 */
export const DataFileSerializationSchema = z.object({
  ...DataFileSchema.shape,
  tasks: z.array(TaskSerializationSchema),
  projects: z.array(ProjectSerializationSchema),
  labels: z.array(LabelSerializationSchema),
  user: z
    .union([UserSerializationSchema, z.array(UserSerializationSchema)])
    .optional(),
  users: z.array(UserSerializationSchema).optional(),
  rewardEvents: z.array(RewardEventSerializationSchema),
  currencyRewardEvents: z
    .array(CurrencyRewardEventSerializationSchema)
    .optional(),
});

// =============================================================================
// GENERATED TYPESCRIPT TYPES
// =============================================================================

export type DataFile = z.infer<typeof DataFileSchema>;
export type DataFileSerialization = z.infer<typeof DataFileSerializationSchema>;
export type UserData = z.infer<typeof UserSchema>;
