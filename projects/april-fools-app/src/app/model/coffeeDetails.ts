import { DrinkDetails } from './drinkDetails';
import { SyrupDetails } from './syrup';

export interface CoffeeDetails {
  drink: DrinkDetails;
  temperature: number;
  foam: number;
  syrups: SyrupDetails[];
}
