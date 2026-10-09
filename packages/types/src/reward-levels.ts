/**
 * Reward Themes & Levels
 *
 * Gamification themes with 10 progression levels each.
 * Data recovered from the official Pro bundle (see tools/deob/PRO-SCHEMAS.md §4).
 */

import { z } from "zod";

/**
 * A single reward level within a theme
 */
export interface RewardLevel {
  /** Level number (1-10) */
  level: number;
  /** Points threshold required to reach this level */
  threshold: number;
  /** Display name of the level */
  name: string;
}

/**
 * A reward theme: a themed set of 10 levels
 */
export interface RewardTheme {
  id: string;
  displayName: string;
  description: string;
  levels: RewardLevel[];
}

/**
 * Shared level thresholds across all themes
 */
export const REWARD_LEVEL_THRESHOLDS = [
  100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000,
] as const;

function buildLevels(names: readonly string[]): RewardLevel[] {
  return names.map((name, index) => ({
    level: index + 1,
    threshold: REWARD_LEVEL_THRESHOLDS[index] ?? 0,
    name,
  }));
}

/**
 * Reward theme ids
 */
export const REWARD_THEME_IDS = [
  "default",
  "fantasy",
  "space",
  "nature",
  "matrix",
  "dojo",
  "pirate",
] as const;

export const RewardThemeIdSchema = z.enum(REWARD_THEME_IDS);
export type RewardThemeId = z.infer<typeof RewardThemeIdSchema>;

/**
 * All reward themes, keyed by id
 */
export const REWARD_THEMES: Record<RewardThemeId, RewardTheme> = {
  default: {
    id: "default",
    displayName: "Classic",
    description: "Traditional achievement levels",
    levels: buildLevels([
      "Beginner",
      "Explorer",
      "Apprentice",
      "Achiever",
      "Specialist",
      "Expert",
      "Master",
      "Catalyst",
      "Legend",
      "Ascendant",
    ]),
  },
  fantasy: {
    id: "fantasy",
    displayName: "Fantasy Mage",
    description: "Magical progression for wizards",
    levels: buildLevels([
      "Mage Apprentice",
      "Spell Seeker",
      "Adept Wizard",
      "Arcane Scholar",
      "Master Sorcerer",
      "Grand Enchanter",
      "Archmage",
      "Mystic Elder",
      "Legendary Oracle",
      "Eternal Sage",
    ]),
  },
  space: {
    id: "space",
    displayName: "Space Explorer",
    description: "Cosmic journey through the stars",
    levels: buildLevels([
      "Cadet",
      "Astronaut",
      "Space Pilot",
      "Navigator",
      "Commander",
      "Fleet Captain",
      "Admiral",
      "Galaxy Warden",
      "Cosmic Pioneer",
      "Stellar Sovereign",
    ]),
  },
  nature: {
    id: "nature",
    displayName: "Nature Guardian",
    description: "Grow with the natural world",
    levels: buildLevels([
      "Seedling",
      "Sprout",
      "Sapling",
      "Young Oak",
      "Forest Keeper",
      "Grove Warden",
      "Ancient Tree",
      "Nature's Champion",
      "Wilds Guardian",
      "Eternal Forest",
    ]),
  },
  matrix: {
    id: "matrix",
    displayName: "Matrix",
    description: "Wake up from the simulation",
    levels: buildLevels([
      "The Blue Pill",
      "The Glitch",
      "Operator Trainee",
      "Red Pill Agent",
      "Code Specialist",
      "Digital Expert",
      "The One's Master",
      "System Architect",
      "The Oracle",
      "The One",
    ]),
  },
  dojo: {
    id: "dojo",
    displayName: "Dojo",
    description: "Master the martial arts path",
    levels: buildLevels([
      "White Belt",
      "Yellow Belt",
      "Green Belt",
      "Brown Belt",
      "Black Belt",
      "Sensei",
      "Grandmaster",
      "Spirit Fighter",
      "Dragon Master",
      "Immortal",
    ]),
  },
  pirate: {
    id: "pirate",
    displayName: "Pirate",
    description: "Sail the high seas and claim your treasure",
    levels: buildLevels([
      "Landlubber",
      "Deck Hand",
      "Swashbuckler",
      "First Mate",
      "Master Gunner",
      "The Captain",
      "Lord of the Tides",
      "Fleet Builder",
      "Sea Serpent",
      "King of the Oceans",
    ]),
  },
};

/**
 * Get the levels for a theme
 */
export function getRewardLevels(themeId: RewardThemeId): RewardLevel[] {
  return REWARD_THEMES[themeId].levels;
}
