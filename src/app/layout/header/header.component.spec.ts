import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/outer/translate.service.mock';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from 'src/app/core/themes/theme.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

class DialogClassMock {
  public afterClosed() {
    return of('mocked result');
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let themeService: ThemeService;
  let router: Router;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        MatMenuModule,
        TranslateModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: ThemeService, useValue: jasmine.createSpyObj('ThemeService', ['getTheme', 'setTheme']) }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDarkModeSwitched', () => {
    it('should set theme to dark', () => {
      component.isChecked = false;
      component.onDarkModeSwitched();
      expect(themeService.setTheme).toHaveBeenCalledWith('dark-theme');
    });
  
    it('should set theme to light', () => {
      component.isChecked = true;
      component.onDarkModeSwitched();
      expect(themeService.setTheme).toHaveBeenCalledWith('light-theme');
    });
  });

  it('openChangePasswordDialog should open dialog', () => {
    const spyDialog = spyOn(component.dialog, 'open');
    component.openChangePasswordDialog();
    expect(spyDialog).toHaveBeenCalled();
  });

  it('openQRCodeDialog should open dialog and return result after close', () => {
    let dialogMock = new DialogClassMock();
    const spyConsole = spyOn(console, 'log');
    const spyDialog = spyOn(component.dialog, 'open').and.returnValue(dialogMock as any);
    component.openQRCodeDialog();
    expect(spyDialog).toHaveBeenCalled();
    expect(spyConsole).toHaveBeenCalled();
  });

  it('should logout', () => {
    const spyRouter = spyOn(router, 'navigate');
    component.logout();
    expect(spyRouter).toHaveBeenCalledOnceWith(['/login']);
  })
});
