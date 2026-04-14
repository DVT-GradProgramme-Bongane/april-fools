import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { Syrup, SYRUP_TYPES } from '../../core/constants/ingredients';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButton, MatMiniFabButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-customize',
  imports: [
    MatSliderModule,
    FormsModule,
    MatCardModule,
    MatDivider,
    MatChipsModule,
    MatIcon,
    MatListModule,
    MatIconButton,
    MatButton
  ],
  templateUrl: './customize.html',
  styleUrl: './customize.css',
})
export class Customize {
  temperatureValue = 79;
  foamDensityValue = 7;
  availableSyrups: Syrup[] = SYRUP_TYPES;
  selectedSyrups: {
    syrup: Syrup;
    dosage: number;
  }[] = [];
  syrupDosage = 0;

  back = output<void>();
  review = output<void>();

  selectSyrup(selectedSyrup: Syrup) {
    this.selectedSyrups.push({ syrup: selectedSyrup, dosage: 0 });

    this.availableSyrups = this.availableSyrups.filter((syrup) => syrup.id !== selectedSyrup.id);
  }

  removeSyrup(syrupToRemove: Syrup) {
    this.selectedSyrups = this.selectedSyrups.filter(
      (syrup) => syrup.syrup.id !== syrupToRemove.id,
    );

    this.availableSyrups.push(syrupToRemove);
  }

  increase(syrup: Syrup) {
    this.selectedSyrups.map((selectedSyrup) => {
      if (selectedSyrup.syrup.id === syrup.id) {
        selectedSyrup.dosage++;
      }
    });
  }

  decrease(syrup: Syrup) {
    this.selectedSyrups.map((selectedSyrup) => {
      if (selectedSyrup.dosage > 0 && selectedSyrup.syrup.id === syrup.id) {
        selectedSyrup.dosage--;
      }
    });
  }

  onBack(){
    this.back.emit();
  }
  onReview(){
    this.review.emit();
  }
}
