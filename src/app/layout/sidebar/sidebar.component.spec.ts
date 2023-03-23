import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './services/sidebar.service';
import { of } from 'rxjs';
import { MenuSidebarComponentSpec } from 'src/app/core/mock/layout/menu-sidebar.component.spec';
import TranslateServiceMock from 'src/app/core/mock/translate.service.mock';

class RouterMock {
  navigate(routes: any) {
    return routes;
  }
}

class SidebarServiceMock {
  getToggleSidebarState() {
    return of(true);
  }
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let service: SidebarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SidebarComponent,
        MenuSidebarComponentSpec
      ],
      imports: [
        TranslateModule
      ],
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateServiceMock,
        },
        {
          provide: Router,
          useClass: RouterMock,
        },
        {
          provide: SidebarService,
          useClass: SidebarServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('serMouseOver', () => {
    it('should set true', () => {
      component.setMouseOver(true);

      expect(component.mouseOver).toBeTruthy();
    });

    it('should set false', () => {
      component.setMouseOver(false);

      expect(component.mouseOver).toBeFalsy();
    });
  });
});
