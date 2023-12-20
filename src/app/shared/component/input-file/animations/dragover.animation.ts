import { trigger, state, style, animate, transition } from '@angular/animations';

const animateOver = '0.15s ease-in';
const animateOut  = '0.25s ease-out';

const styleDragover = { background: '#f5f5f5' };

export const dragoverAnimation = [
  trigger('dragover', [
    state('over', style(styleDragover)),
    state('out', style({})),
    transition('* => over', [
      animate(animateOver, style(styleDragover))
    ]),
    transition('* => out', [
      animate(animateOut)
    ]),
  ])
]