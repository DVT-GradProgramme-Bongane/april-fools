export interface CoffeeBase {
  id: string;
  name: string;
  cost: number;
}

export interface Milk {
  id: string;
  name: string;
  cost: number;
}

export interface CupSize {
  id: string;
  name: string;
  cost: number;
}

export interface Syrup {
  id: string;
  name: string;
  costPerPump: number;
}

export const COFFEE_BASE: CoffeeBase[] = [
  { id: 'espresso', name: 'Espresso', cost: 28 },
  { id: 'americano', name: 'Americano', cost: 32 },
  { id: 'filter', name: 'Filter', cost: 24 },
  { id: 'cold-brew', name: 'Cold brew', cost: 42 },
  { id: 'pour-over', name: 'Pour-over', cost: 48 },
];

export const MILK: Milk[] = [
  { id: 'oat', name: 'Oat', cost: 12 },
  { id: 'whole', name: 'Whole', cost: 6 },
  { id: 'almond', name: 'Almond', cost: 14 },
  { id: 'soy', name: 'Soy', cost: 10 },
  { id: 'none', name: 'None', cost: 0 },
];

export const CUP_SIZE: CupSize[] = [
  { id: 'short', name: 'Short', cost: 0 },
  { id: 'tall', name: 'Tall', cost: 6 },
  { id: 'grande', name: 'Grande', cost: 12 },
  { id: 'venti', name: 'Venti', cost: 18 },
];

export const SYRUP_TYPES: Syrup[] = [
  { id: 'vanilla', name: 'Vanilla Syrup', costPerPump: 4 },
  { id: 'chocolate', name: 'Chocolate Syrup', costPerPump: 4 },
  { id: 'caramel', name: 'Caramel Syrup', costPerPump: 5 },
];
