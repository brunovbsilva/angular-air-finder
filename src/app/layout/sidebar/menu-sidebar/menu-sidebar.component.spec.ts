import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
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
        BrowserAnimationsModule,
        RouterTestingModule
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

  describe('activeMenu', () => {
    it('should active', fakeAsync(() => {
      var menu = component.menus[0];
      const spyDeactive = spyOn(component, 'deactivateActiveMenus');
  
      component.activeMenu(menu);
  
      expect(spyDeactive).toHaveBeenCalled();
      expect(menu.active).toBeTruthy();
    }));
  
    it('should active and toggle sidebar state', fakeAsync(() => {
      var menu = component.menus[0];
      const spyDeactive = spyOn(component, 'deactivateActiveMenus');
      const spyWidth = spyOnProperty(window.screen, 'width').and.returnValue(400);
      const service = fixture.debugElement.injector.get(SidebarService);
      const spyService = spyOn(service, 'sendToggleSidebarState');
  
      component.activeMenu(menu);
      tick(1);
  
      expect(spyDeactive).toHaveBeenCalled();
      expect(menu.active).toBeTruthy();
      expect(spyWidth).toHaveBeenCalled();
      expect(spyService).toHaveBeenCalled();
    }));
  });

  it('should deactivate all menus', () => {
    component.deactivateActiveMenus();

    component.menus.forEach(menu => {
      expect(menu.active).toBeFalsy();
      if(menu.submenus){
        menu.submenus.forEach(submenu => expect(submenu.active).toBeFalsy());
      }
    });
  });

  it('should toggle collapsed menu', () => {
    var menu = component.menus[1];
    menu.collapsed = true;

    component.toggleCollapsedMenu(menu);

    expect(menu.collapsed).toBeFalsy();
  })
});
