import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('leaveFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('250ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('stateFade', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('show => hide', [animate('250ms', style({ opacity: 0 }))]),
      transition('hide => show', [animate('250ms', style({ opacity: 1 }))]),
    ]),
  ],
})
export class AppComponent {
  show: boolean = false;

  click(): void {
    this.show = !this.show;
  }
}
