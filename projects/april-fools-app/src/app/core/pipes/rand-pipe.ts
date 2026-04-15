import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rand',
  standalone: true,
})
export class RandPipe implements PipeTransform {
  transform(value: number): string {
    const formatted = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return `R ${formatted}`;
  }
}
