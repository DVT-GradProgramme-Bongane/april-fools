import { Component, input } from '@angular/core';
import { MatCard, MatCardFooter } from '@angular/material/card';
import { CoffeeDetails } from '../../model/coffeeDetails';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.html',
  styleUrl: './confirm.css',
  imports: [MatCard, MatDivider, MatCardFooter, MatIcon],
})
export class Confirm {
  coffeeDetails = input.required<CoffeeDetails>();
}
