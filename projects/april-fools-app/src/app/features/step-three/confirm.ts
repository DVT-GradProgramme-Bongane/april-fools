import { Component, input } from '@angular/core';
import { MatCard, MatCardFooter } from '@angular/material/card';
import { CoffeeDetails } from '../../model/coffeeDetails';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RandPipe } from '../../core/pipes/rand-pipe';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.html',
  styleUrl: './confirm.css',
  imports: [MatCard, MatDivider, MatCardFooter, RandPipe],
})
export class Confirm {
  coffeeDetails = input.required<CoffeeDetails>();
  total = input<number>(0);
}
