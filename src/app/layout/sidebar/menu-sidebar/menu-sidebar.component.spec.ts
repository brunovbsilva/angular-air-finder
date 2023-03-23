import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/translate.service.mock';
import { Menu } from '../models/menu.model';
import { SidebarService } from '../services/sidebar.service';

import { MenuSidebarComponent } from './menu-sidebar.component';

describe('MenuSidebarComponent', () => {
  let component: MenuSidebarComponent;
  let fixture: ComponentFixture<MenuSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MenuSidebarComponent 
      ],
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateServiceMock
        }
      ],
      imports: [
        TranslateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSidebarComponent);
    component = fixture.componentInstance;
    component.menus = [
      {
        name: 'menu-1',
        path: 'path-menu-1',
        active: false
      },
      {
        name: 'menu-2',
        collapsed: true,
        active: false,
        submenus: [
          {
            name: 'submenu-1',
            path: 'menu-2/submenu-1',
            active: false
          },
          {
            name: 'submenu-2',
            path: 'menu-2/submenu-2',
            active: false
          }
        ],
      },
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('menuClick', () => {
    it('should get to a menu path', () => {
      const router = fixture.debugElement.injector.get(Router);
      const spyRouter = spyOn(router, 'navigate');
      const menu = component.menus[0]

      component.menuClick(menu);

      component.menus.forEach((menu, i) => {
        expect(menu.active).toEqual(i == 0);
        if(menu.submenus){
          menu.submenus.forEach(submenu => expect(submenu.active).toBeFalsy());
        }
      });
      expect(spyRouter).toHaveBeenCalledOnceWith([menu.path]);
    });

    it('should get to a menu path and change sidebar state', fakeAsync(() => {
      const router = fixture.debugElement.injector.get(Router);
      const service = fixture.debugElement.injector.get(SidebarService);

      const spyRouter = spyOn(router, 'navigate');
      const spyService = spyOn(service, 'sendToggleSidebarState');
      const spyWindowWidth = spyOn(component, 'mobileSize').and.returnValue(true);
      const menu = component.menus[0];

      component.menuClick(menu);
      tick(1);

      component.menus.forEach((menu, i) => {
        expect(menu.active).toEqual(i == 0);
        if(menu.submenus){
          menu.submenus.forEach(submenu => expect(submenu.active).toBeFalsy());
        }
      });

      expect(spyRouter).toHaveBeenCalledOnceWith([menu.path]);
      expect(spyService).toHaveBeenCalled();
      expect(spyWindowWidth).toHaveBeenCalled();
    }));

    it('should get to a submenu path', () => {
      const router = fixture.debugElement.injector.get(Router);
      const spyRouter = spyOn(router, 'navigate');
      const submenu = component.menus[1].submenus?.find(x => x.name = 'submenu-1') ?? new Menu;

      component.menuClick(submenu);

      component.menus.forEach((menu, i) => {
        expect(menu.active).toBeFalsy();
        if(menu.submenus){
          menu.submenus.forEach(submenu => expect(submenu.active).toEqual(submenu.name == 'submenu-1'));
        }
      })
      expect(spyRouter).toHaveBeenCalledOnceWith([submenu.path]);
    });

    it('should toggle collapsed menu', () => {
      const router = fixture.debugElement.injector.get(Router);
      const spyRouter = spyOn(router, 'navigate');
      const menuWithSubmenu = component.menus[1];

      component.menuClick(menuWithSubmenu);

      component.menus.forEach((menu, i) => {
        expect(menu.active).toBeFalsy();
        if(menu.submenus){
          menu.submenus.forEach(submenu => expect(submenu.active).toBeFalsy());
        }
      })
      expect(spyRouter).not.toHaveBeenCalled();
    });
  });
});
