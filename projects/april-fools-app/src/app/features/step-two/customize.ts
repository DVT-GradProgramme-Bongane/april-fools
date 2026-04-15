import { Component, inject, input, model, OnDestroy, output, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { Syrup, SYRUP_TYPES } from '../../core/constants/ingredients';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButton, MatMiniFabButton, MatIconButton } from '@angular/material/button';
import { SyrupDetails } from '../../model/syrup';
import { ChaosService } from '../../core/services/chaos';

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
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './customize.html',
  styleUrl: './customize.css',
})
export class Customize implements OnDestroy {
  availableSyrups = model<Syrup[]>([]);
  selectedSyrups = model<SyrupDetails[]>([]);

  back = output<void>();
  review = output<void>();

  temperature = model.required<number>();
  displayTemp = signal(70); // fake temperature

  foamDensity = model.required<number>();
  displayFoam = signal(7); // fake foam

  private chaosService = inject(ChaosService);

  constructor() {
    this.chaosService.startChaos(this.temperature, this.displayTemp);
    this.chaosService.startChaos(this.foamDensity, this.displayFoam);
  }

  // Chaotic behaviour
  onMouseEnter(event: MouseEvent) {
    this.chaosService.onMouseEnter(event);
  }

  onTemperatureInput(event: Event) {
    this.temperature.set((event.target as HTMLInputElement).valueAsNumber);
  }

  onFoamInput(event: Event) {
    this.foamDensity.set((event.target as HTMLInputElement).valueAsNumber);
  }

  selectSyrup(selectedSyrup: Syrup) {
    this.selectedSyrups().push({ syrup: selectedSyrup, dosage: 1 });

    this.availableSyrups.update((syrups) =>
      syrups?.filter((syrup) => syrup.id !== selectedSyrup.id),
    );
  }

  removeSyrup(syrupToRemove: Syrup) {
    this.selectedSyrups.set(
      this.selectedSyrups().filter((syrup) => syrup.syrup.id !== syrupToRemove.id),
    );

    this.availableSyrups.update((syrups) => [...(syrups ?? []), syrupToRemove]);
  }

  increase(syrup: Syrup) {
    this.selectedSyrups.set(
      this.selectedSyrups().map((selectedSyrup) => {
        if (selectedSyrup.syrup.id === syrup.id) {
          selectedSyrup.dosage++;
        }
        return selectedSyrup;
      }),
    );
  }

  decrease(syrup: Syrup) {
    this.selectedSyrups.set(
      this.selectedSyrups().map((selectedSyrup) => {
        if (selectedSyrup.dosage > 0 && selectedSyrup.syrup.id === syrup.id) {
          selectedSyrup.dosage--;
        }
        return selectedSyrup;
      }),
    );
  }

  onBack(event: MouseEvent) {
    (event.currentTarget as HTMLButtonElement).blur();
    this.back.emit();
  }
  onReview(event: MouseEvent) {
    (event.currentTarget as HTMLButtonElement).blur(); // Remove focus from cuurrent tab, for keyboard navigation and screen readers
    this.review.emit();
  }

  ngOnDestroy(): void {
    this.chaosService.stop();
  }
}
