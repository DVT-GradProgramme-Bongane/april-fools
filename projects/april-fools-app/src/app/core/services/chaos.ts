import { Injectable, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChaosService {
  intervalId!: ReturnType<typeof setInterval>;

  startChaos(realValue: Signal<number>, fakeValue: WritableSignal<number>) {
    this.intervalId = setInterval(() => {
      const lie = realValue() + Math.floor(Math.random() * 20) - 10;
      fakeValue.set(lie);
      setTimeout(() => fakeValue.set(realValue()), 300);
    }, 2000); // Every two seconds figit with displayed value
  }

  onMouseEnter(event: MouseEvent) {
    const chip = event.currentTarget as HTMLElement;
    chip.style.marginRight = '100px';
    chip.style.marginLeft = '100px';
    
    // Reset margins after .3s
    setTimeout(() => {
      chip.style.marginRight = '';
      chip.style.marginLeft = '';
    }, 300);
  }

  stop(): void {
    clearInterval(this.intervalId);
  }
}
