import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterComponent } from './enter.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/outer/translate.service.mock';
import { LoginService } from '../services/login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';

class LoginServiceMock {
  login() {
    return of({
      token: 'token'
    });
  }
}

class AuthenticationServiceMock {
  login() {
    return of({});
  }

  get() {
    return of({});
  }
}

describe('EnterComponent', () => {
  let component: EnterComponent;
  let loginService: LoginService;
  let authService: AuthenticationService;
  let fixture: ComponentFixture<EnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EnterComponent,
      ],
      imports: [
        TranslateModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
      ],
      providers: [
        { provide: LoginService, useClass: LoginServiceMock },
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: AuthenticationService, useClass: AuthenticationServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    authService = TestBed.inject(AuthenticationService);
    component.form = new FormGroup({
      'login': new FormControl('login', [Validators.required]),
      'password': new FormControl('password', [Validators.required])
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submit', () => {
    let authSpy: jasmine.Spy;
    let consoleSpy: jasmine.Spy;
    let loginServiceSpy: jasmine.Spy;
    let routerSpy: jasmine.Spy;

    beforeEach(() => {
      authSpy = spyOn(authService, 'login').and.callThrough();
      consoleSpy = spyOn(console, 'log');
      loginServiceSpy = spyOn(loginService, 'login').and.callThrough();
      routerSpy = spyOn(component['router'], 'navigate');
    });

    it('invalid form', () => {
      const formSpy = spyOnProperty(component['form'], 'valid').and.returnValue(false);
      component.submit();
      expect(formSpy).toHaveBeenCalled();
      expect(loginServiceSpy).not.toHaveBeenCalled();
      expect(routerSpy).not.toHaveBeenCalled();
      expect(authSpy).not.toHaveBeenCalled();
      expect(consoleSpy).not.toHaveBeenCalled();
    });

    it('success', () => {
      const formSpy = spyOnProperty(component['form'], 'valid').and.returnValue(true);
      component.submit();
      expect(formSpy).toHaveBeenCalled();
      expect(loginServiceSpy).toHaveBeenCalled();
      expect(routerSpy).toHaveBeenCalled();
      expect(authSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
