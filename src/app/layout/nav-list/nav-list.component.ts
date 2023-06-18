import { Component } from '@angular/core';
import { Menu } from 'src/app/layout/nav-list/models/menu.model';
import ApplicationMenus from '../../layout/nav-list/models/menu-constructor';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {
  public currentYear = new Date().getFullYear();
  public menus: Menu[] = ApplicationMenus;

  constructor() { }

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
  }
}
