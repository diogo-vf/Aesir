export const StatisticCategories = {
  Physical: 'physical',
  Mental: 'mental',
  Social: 'social',
  Technical: 'technical'
} as const;

export const ItemTypes = {

} as const

// Define types
export type StatisticCategory = (typeof StatisticCategories)[keyof typeof StatisticCategories];
export type ItemType = (typeof ItemTypes)[keyof typeof ItemTypes];

// Convert keys into string
export const StatisticTypeKeys = invert(StatisticCategories);

// generic helper
function invert<T extends Record<string, string>>(obj: T) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k])) as {
    [K in keyof T as T[K]]: K;
  };
}

export function getValues<T extends Record<string, string>>(obj: T) {
  return Object.values(obj) as [(typeof obj)[keyof T]];
}
