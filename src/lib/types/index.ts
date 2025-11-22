import type { ItemType, StatisticCategory } from '$enums';

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
};

type Inventory = {
  maxItems: number;
  totalItems: number;
  items: { item: Item; quantity: number }[];
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
