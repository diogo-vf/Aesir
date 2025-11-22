import type { ItemCategory, ItemType, Material, StatisticCategory } from '$enums';

export type Character = {
  id: number;
  name: string;
  age: number;
  statistics: {
    maxBase: number;
    base: number;
    actual: number;
    statistic: Statistic;
  }[];
  moneys: {
    bronze: number,
    argent: number,
    or: number,
    mithril: number,
  },
  inventory: Inventory;
  equipment: Equipment;
  skills: Skill[];
  divineBlood: DivineBlood;
  divineBlessing: DivineBlessing;
};

export type Statistic = {
  id: number;
  name: string;
  description: string;
  category: StatisticCategory;
};

export type Item = {
  id: number;
  name: string;
  description: string;
  stackable: boolean;
  type: ItemType;
  // TODO please confirm me ↓
  upgraded?: boolean; // Item could be upgraded only once time (please confirm me)
  rarety: 1 | 2 | 3 | 4 | 5; // 0 common , 5 ultra mega rare
  material?: Material; // Material define some properties
  weightCategory?: ItemCategory; // Is it a light, heavy or medium object ? it is realy usefull information ?
  // TODO Bonus and / or effects to apply to the character. Effects to apply to opponents
};

type Inventory = {
  maxItems: number;
  totalItems: number;
  items: { item: Item; quantity: number, maxQuantity: number }[];
};

type Equipment = {
  Helmet?: Item;
  Chest?: Item;
  Legs?: Item;
  Gloves?: Item;
  RightHand?: Item;
  LeftHand?: Item;
  Accessories?: Item[];
};

export type Skill = {
  id: number;
  name: string;
};

export type DivineBlood = {
  id: number;
  name: string;
  description: string;
};

export type DivineBlessing = {
  id: number;
  name: string;
  description: string;
};

export type Race = {
  id: number;
  name: string;
  description: string;
};
