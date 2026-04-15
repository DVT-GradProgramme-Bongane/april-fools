import { Component, computed, model, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { DrinkBuilder } from '../step-one/drink-builder';
import { Customize } from '../step-two/customize';
import { Confirm } from '../step-three/confirm';
import {
  COFFEE_BASE,
  CoffeeBase,
  CUP_SIZE,
  CupSize,
  MILK,
  Milk,
  SYRUP_TYPES,
} from '../../core/constants/ingredients';
import { SyrupDetails } from '../../model/syrup';

@Component({
  selector: 'app-home',
  imports: [MatTabsModule, MatToolbar, MatIcon, DrinkBuilder, Customize, Confirm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  coffeeBases = COFFEE_BASE;
  selectedBase = signal<CoffeeBase>(this.coffeeBases[0]);
  milkTypes = MILK;
  selectedMilk = signal<Milk>(this.milkTypes[0]);
  cupSizes = CUP_SIZE;
  selectedCupSize = signal<CupSize>(this.cupSizes[0]);

  temperature = signal<number>(79);
  foamDensity = signal<number>(7);

  availableSyrup = signal(SYRUP_TYPES);
  selectedSyrups = signal<SyrupDetails[]>([]);

  coffeeDetails = computed(() => ({
    drink: {
      base: this.selectedBase(),
      milk: this.selectedMilk(),
      cup: this.selectedCupSize(),
    },
    temperature: this.temperature(),
    foam: this.foamDensity(),
    syrups: this.selectedSyrups(),
  }));

  total = computed(() => 
    (this.selectedBase().cost + this.selectedMilk().cost + this.selectedCupSize().cost 
      + this.selectedSyrups().reduce((acc, syrup) => acc + (syrup.syrup.costPerPump * syrup.dosage), 0)));

  drinkDetails = signal<CoffeeBase>({ name: '', id: '' , cost: 0});

  handleNext(tabs: MatTabGroup) {
    if ((tabs.selectedIndex ?? 0) < tabs._allTabs.length) {
      tabs.selectedIndex = (tabs.selectedIndex ?? 0) + 1;
    }
  }

  handleBack(tabs: MatTabGroup) {
    if ((tabs.selectedIndex ?? 0) < tabs._allTabs.length) {
      tabs.selectedIndex = (tabs.selectedIndex ?? 0) - 1;
    }
  }
}
