import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Menu } from 'src/app/layout/sidebar/models/menu.model';
import ApplicationMenus from '../../../layout/sidebar/menu-constructor';

@Component({
  selector: 'app-menu-sidebar',
  template: '',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.2s ease-in-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('0.2s ease-in-out', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class MenuSidebarComponentSpec {
  public menus: Menu[] = ApplicationMenus;
}
