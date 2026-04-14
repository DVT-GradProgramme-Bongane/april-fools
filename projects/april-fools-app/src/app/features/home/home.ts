import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { DrinkBuilder } from '../step-one/drink-builder';
import { Customize } from '../step-two/customize';

@Component({
  selector: 'app-home',
  imports: [MatTabsModule, MatToolbar, MatIcon, DrinkBuilder, Customize],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  handleNext(tabs: MatTabGroup) {
    if ((tabs.selectedIndex ?? 0) < tabs._allTabs.length) {
      tabs.selectedIndex = (tabs.selectedIndex ?? 0) + 1;
    }
  }

  handleBack(tabs: MatTabGroup){
    if ((tabs.selectedIndex ?? 0) < tabs._allTabs.length) {
      tabs.selectedIndex = (tabs.selectedIndex ?? 0) - 1;
    }
  }
}
