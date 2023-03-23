import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Menu } from '../models/menu.model';
import ApplicationMenus from '../menu-constructor';
import { Router, withDebugTracing } from '@angular/router';
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
  
  async menuClick(menu: Menu): Promise<void> {
    if (menu.submenus) {
      menu.collapsed = !menu.collapsed;
      return;
    }

    if (menu.path) {
      this.deactivateActiveMenus();
      menu.active = true;
      await this.router.navigate([menu.path]);
      if(this.mobileSize()){
        this.service.sendToggleSidebarState();
      }
    }
  }

  mobileSize(): boolean {
    return window.screen.width <= 450;
  }
}
