/**
 * Rewards & Currency Schemas
 *
 * Pro reward primitives: currencies, wishlist items, reward events,
 * task rewards, and comment reactions.
 *
 * Shapes recovered from the official Pro bundle (see tools/deob/PRO-SCHEMAS.md).
 */

import { z } from "zod";
import { UserIdSchema } from "./id";
import {
  flexibleDateTimeSchema,
  flexibleDateTimeSerializationSchema,
} from "./constants";

// =============================================================================
// ID SCHEMAS
// =============================================================================

/**
 * Currency identifier.
 *
 * Note: the built-in default currency uses the all-zeros UUID
 * ("00000000-0000-0000-0000-000000000000"); zod v4's z.uuid() accepts it.
 */
export const CurrencyIdSchema = z.uuid().brand("CurrencyId");
export type CurrencyId = z.infer<typeof CurrencyIdSchema>;

/**
 * Create a CurrencyId from a string (runtime boundary)
 */
export function createCurrencyId(id: string): CurrencyId {
  return CurrencyIdSchema.parse(id);
}

// =============================================================================
// CURRENCY SCHEMAS
// =============================================================================

/**
 * A custom currency used for currency-based task rewards.
 * `ownerId` present → private currency; absent → public (shared) currency.
 */
export const CurrencySchema = z.object({
  id: CurrencyIdSchema,
  name: z.string().min(1).max(50),
  ownerId: UserIdSchema.optional(),
  exchangeRate: z.number().positive().optional(),
  description: z.string().max(200).optional(),
});

export type Currency = z.infer<typeof CurrencySchema>;

// =============================================================================
// WISHLIST SCHEMAS
// =============================================================================

/**
 * A wishlist item redeemable with currency rewards
 */
export const WishlistItemSchema = z.object({
  id: z.string().uuid(),
  ownerId: UserIdSchema.optional(),
  value: z.number().int().nonnegative(),
  currencyId: CurrencyIdSchema,
  name: z.string().min(1).max(80),
  description: z.string().max(240).optional(),
});

export type WishlistItem = z.infer<typeof WishlistItemSchema>;

// =============================================================================
// REWARD EVENT SCHEMAS
// =============================================================================

/**
 * Reward event types
 */
export const REWARD_EVENT_TYPES = [
  "TASK_COMPLETED",
  "TASK_UNCOMPLETED",
  "WISHLIST_REDEEMED",
  "CURRENCY_EXCHANGE",
] as const;

export const RewardEventTypeSchema = z.enum(REWARD_EVENT_TYPES);
export type RewardEventType = z.infer<typeof RewardEventTypeSchema>;

/**
 * Points-based reward event
 */
export const RewardEventSchema = z.object({
  id: z.string().uuid(),
  userId: UserIdSchema,
  type: RewardEventTypeSchema,
  entityId: z.string().uuid(),
  points: z.number().int(),
  timestamp: flexibleDateTimeSchema,
});

export type RewardEvent = z.infer<typeof RewardEventSchema>;

/**
 * Currency-based reward event
 */
export const CurrencyRewardEventSchema = z.object({
  id: z.string().uuid(),
  userId: UserIdSchema,
  entityId: z.string().uuid(),
  type: RewardEventTypeSchema,
  currencyId: CurrencyIdSchema,
  amount: z.number().int(),
  timestamp: flexibleDateTimeSchema,
});

export type CurrencyRewardEvent = z.infer<typeof CurrencyRewardEventSchema>;

// =============================================================================
// SERIALIZATION VARIANTS (Date → ISO string for JSON storage)
// =============================================================================

export const RewardEventSerializationSchema = z.object({
  ...RewardEventSchema.shape,
  timestamp: flexibleDateTimeSerializationSchema,
});

export const CurrencyRewardEventSerializationSchema = z.object({
  ...CurrencyRewardEventSchema.shape,
  timestamp: flexibleDateTimeSerializationSchema,
});

// =============================================================================
// TASK REWARD / REACTION SCHEMAS
// =============================================================================

/**
 * Reward attached to a task (currency + amount)
 */
export const TaskRewardSchema = z.object({
  currencyId: CurrencyIdSchema,
  amount: z.number().int(),
});

export type TaskReward = z.infer<typeof TaskRewardSchema>;

/**
 * Comment reaction (emoji + reacting user)
 */
export const ReactionSchema = z.object({
  emoji: z.string(),
  userId: UserIdSchema,
});

export type Reaction = z.infer<typeof ReactionSchema>;

// =============================================================================
// DEFAULTS
// =============================================================================

/**
 * ID of the built-in default currency (all-zeros UUID)
 */
export const DEFAULT_CURRENCY_ID: CurrencyId = createCurrencyId(
  "00000000-0000-0000-0000-000000000000",
);

/**
 * Built-in default currency ("coins")
 */
export const DEFAULT_CURRENCY: Currency = {
  id: DEFAULT_CURRENCY_ID,
  name: "coins",
  exchangeRate: 1,
};
