import { Component, computed, model, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { DrinkBuilder } from '../step-one/drink-builder';
import { Customize } from '../step-two/customize';
import { Confirm } from '../step-three/confirm';
import { CoffeeDetails } from '../../model/coffeeDetails';
import { CoffeeBase } from '../../core/constants/ingredients';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [MatTabsModule, MatToolbar, MatIcon, DrinkBuilder, Customize, Confirm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  temperature =  signal<number>(79);
  foamDensity = signal<number>(7);
  
  coffeeDetails = computed(() => ({
    drink: {
      base: { id: '', name: '' },
      milk: { id: '', name: '' },
      cup: { id: '', name: '' },
    },
    temperature: this.temperature(),
    foam: this.foamDensity(),
    syrups: [],
}));

  drinkDetails = signal<CoffeeBase>({ name: '', id: '' });

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
