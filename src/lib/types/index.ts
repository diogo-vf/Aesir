import type { ItemType, StatisticCategory } from '$enums';

type Character = {
  name: string;
  age: number;
  statistics: {
    maxBase: number;
    base: number;
    actual: number;
    statistic: Statistic;
  }[];
  inventory: Inventory;
  equipment: Equipment;
  skills: Skill[];
  divineBlood: DivineBlood,
  divineBlessing: DivineBlessing,
};

type Statistic = {
  id: number;
  name: string;
  description: string;
  category: StatisticCategory;
};

type Item = {
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

type Skill = {
  id: number;
  name: string;
};

type DivineBlood = {
  id: number,
  name: string,
  description: string,
}

type DivineBlessing = {
  id: number,
  name: string,
  description: string,
}
