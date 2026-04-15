import { CoffeeBase, CupSize, Milk } from '../core/constants/ingredients';

export interface DrinkDetails {
  milk: Milk;
  base: CoffeeBase;
  cup: CupSize;
}
