import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Menu } from '../models/menu.model';
import ApplicationMenus from '../menu-constructor';
import { Router } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
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
export class MenuSidebarComponent implements OnInit {

  public menus: Menu[] = ApplicationMenus;

  constructor(
    private readonly router: Router,
    private service: SidebarService
  ) { }

  ngOnInit(): void {
  }

  deactivateActiveMenus(): void {
    this.menus.forEach(menu => {
      menu.active = false;
      if (menu.submenus) {
        menu.submenus.forEach(submenu => (submenu.active = false));
      }
    });
  }

  toggleCollapsedMenu(menu: Menu) {
    menu.collapsed = !menu.collapsed;
  }

  activeMenu(menu: Menu) {
    this.deactivateActiveMenus();
    menu.active = true;
    if(window.screen.width <= 450){
      this.service.sendToggleSidebarState();
    }
  }
}
