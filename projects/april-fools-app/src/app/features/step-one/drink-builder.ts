import { Component, model, NgModule, output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  COFFEE_BASE,
  CoffeeBase,
  CUP_SIZE,
  CupSize,
  Milk,
  MILK,
} from '../../core/constants/ingredients';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatFabButton } from '@angular/material/button';

@Component({
  selector: 'app-drink-builder',
  imports: [MatTabsModule, MatChipsModule, FormsModule, MatIcon, MatButton],
  templateUrl: './drink-builder.html',
  styleUrl: './drink-builder.css',
})
export class DrinkBuilder {
  coffeeBases = COFFEE_BASE;
  selectedBase = model<CoffeeBase>();

  milkTypes = MILK;
  selectedMilk = model<Milk>();

  cupSizes = CUP_SIZE;
  selectedCupSize = model<CupSize>();

  next = output<void>();

  onNext(event: MouseEvent) {
    (event.currentTarget as HTMLButtonElement).blur();
    this.next.emit();
  }
}
