import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavListComponent } from './nav-list.component';
import { MatListModule } from '@angular/material/list';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/outer/translate.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { Menu } from './models/menu.model';

describe('SidebarComponent', () => {
  let component: NavListComponent;
  let fixture: ComponentFixture<NavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavListComponent ],
      imports: [
        MatListModule,
        TranslateModule,
        RouterTestingModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deactivateActiveMenus', () => {
    it('should set all false', () => {
      component.deactivateActiveMenus();
      component.menus.forEach(menu => {
        expect(menu.active).toBeFalsy();
        if(menu.submenus) menu.submenus.forEach(submenu => expect(submenu.active).toBeFalsy());
      })
    });
  });

  describe('toggleCollapsedMenu', () => {
    it('should set true', () => {
      var menu: Menu = { name: 'teste Menu', collapsed: false };
      component.toggleCollapsedMenu(menu);
      expect(menu.collapsed).toBeTruthy();
    });
    it('should set false', () => {
      var menu: Menu = { name: 'teste Menu', collapsed: true };
      component.toggleCollapsedMenu(menu);
      expect(menu.collapsed).toBeFalsy();
    });
  });

  it('should active menu', () => {
    const spyDeactive = spyOn(component, 'deactivateActiveMenus');
    var menu: Menu = { name: 'teste Menu', collapsed: false };
    component.activeMenu(menu);
    expect(spyDeactive).toHaveBeenCalled();
    expect(menu.active).toBeTruthy();
  });
});
