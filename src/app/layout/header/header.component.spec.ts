import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarService } from '../sidebar/services/sidebar.service';
import TranslateServiceMock from 'src/app/core/mock/translate.service.mock';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]), 
        TranslateModule,
        MatToolbarModule,
        MatIconModule
      ],
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateServiceMock,
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send sidebar state', () => {
    const service = fixture.debugElement.injector.get(SidebarService);
    const spyService = spyOn(service, 'sendToggleSidebarState');

    component.toggleSidebarState();

    expect(spyService).toHaveBeenCalled();
  })
});
