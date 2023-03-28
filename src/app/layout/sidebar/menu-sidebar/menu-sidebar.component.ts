import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import ApplicationMenus from '../menu-constructor';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  public menus: Menu[] = ApplicationMenus;

  constructor(private service: SidebarService) { }

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
