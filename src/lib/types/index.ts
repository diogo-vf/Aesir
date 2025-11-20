import type { ItemType, StatisticCategory }  from '$enums';

type Character = {
  name: string;
  age: number;
  statistics: Statistic[];
  inventory: unknown
};

type Statistic = {
  name: string;
  description: string;
  category: StatisticCategory;
  base: number;
  actual: number;
  max_base: number;
};

type Item = {
  name: string,
  description: string,
  stackable: boolean,
  type: ItemType,
}
