import { trigger, style, animate, transition, keyframes } from '@angular/animations';

export const showHideAnimations = [
  trigger('show-hide', [
    transition(":enter", [
      style({ scale: 0.8, opacity: 0 }),
      animate('0.3s ease-in-out', keyframes([
        style({ scale: 0.8, opacity: 0 }),
        style({ scale: 1.1, opacity: 0.7 }),
        style({ scale: 1, opacity: 1 })
      ]))
    ]),
    transition(":leave", [
      animate('0.25s ease-in-out', keyframes([
        style({ scale: 1, opacity: 1 }),
        style({ scale: 1.1, opacity: 0.7 }),
        style({ scale: 0.8, opacity: 0 })
      ]))
    ])
  ]),
]