import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { UserService } from '../../../shared/services/user.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/outer/translate.service.mock';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { KeysPipe } from 'src/app/shared/pipe/keys.pipe';
import { UpdatePasswordComponentSpec } from 'src/app/core/mock/forms/update-password.component.spec';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginServiceSpec } from '../../../shared/services/mocks/login.service.spec';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let loginService: UserService;
  let router: Router;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ForgotPasswordComponent,
        KeysPipe,
        UpdatePasswordComponentSpec
      ],
      imports: [
        TranslateModule,
        BrowserAnimationsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: UserService, useClass: LoginServiceSpec },
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('emailStepCheck', () => {
    let stepperSpy: jasmine.Spy;
    let sendTokenSpy: jasmine.Spy;
    let setErrorsSpy: jasmine.Spy;

    beforeEach(() => {
      stepperSpy = spyOn(component.stepper, 'next');
      setErrorsSpy = spyOn(component.emailControl, 'setErrors');
    });

    it('email control valid', () => {
      component.emailControl.patchValue('email@email.com');
      component.emailStepCheck();
      expect(stepperSpy).toHaveBeenCalled();
      expect(setErrorsSpy).not.toHaveBeenCalled();
    });

    it('email control invalid with not existing email', () => {
      const expectedError = new HttpErrorResponse({ status: 404 });
      sendTokenSpy = spyOn(loginService, 'sendToken').and.returnValue(throwError(() => expectedError));

      component.emailControl.patchValue('email@email.com');
      component.emailStepCheck();
      expect(stepperSpy).not.toHaveBeenCalled();
      expect(sendTokenSpy).toHaveBeenCalled();
      expect(setErrorsSpy).toHaveBeenCalled();
    });

    it('email control invalid', () => {
      component.emailControl.patchValue('');
      component.emailStepCheck();
      expect(stepperSpy).toHaveBeenCalled();
      expect(setErrorsSpy).not.toHaveBeenCalled();
    });
  });

  describe('codeStepCheck', () => {
    let stepperSpy: jasmine.Spy;
    let verifyTokenSpy: jasmine.Spy;
    let setErrorsSpy: jasmine.Spy;

    beforeEach(() => {
      stepperSpy = spyOn(component.stepper, 'next');
      setErrorsSpy = spyOn(component.codeControl, 'setErrors');
    });

    it('code control valid', () => {
      component.codeControl.patchValue('123456');
      component.codeStepCheck();
      expect(stepperSpy).toHaveBeenCalled();
      expect(setErrorsSpy).not.toHaveBeenCalled();
    });

    it('code control valid with invalid code', () => {
      const expectedError = new HttpErrorResponse({ status: 404 });
      verifyTokenSpy = spyOn(loginService, 'verifyToken').and.returnValue(throwError(() => expectedError));
      component.codeControl.patchValue('1234567');
      component.codeStepCheck();
      expect(verifyTokenSpy).toHaveBeenCalled();
      expect(stepperSpy).not.toHaveBeenCalled();
      expect(setErrorsSpy).toHaveBeenCalled();
    });

    it('code control invalid', () => {
      component.codeControl.patchValue(null);
      component.codeStepCheck();
      expect(stepperSpy).toHaveBeenCalled();
      expect(setErrorsSpy).not.toHaveBeenCalled();
    });
  });

  describe('submit', () => {
    let passwordGroupSpy: jasmine.Spy;
    let changePasswordSpy: jasmine.Spy;
    let navigateSpy: jasmine.Spy;

    beforeEach(() => {
      navigateSpy = spyOn(router, 'navigate');
      changePasswordSpy = spyOn(loginService, 'changePasswordToken').and.callThrough();
    });

    it('invalid group', () => {
      passwordGroupSpy = spyOnProperty(component.passwordGroup, 'valid').and.returnValue(false);
      component.submit();
      expect(changePasswordSpy).not.toHaveBeenCalled();
      expect(navigateSpy).not.toHaveBeenCalled();
    });

    it('success', () => {
      passwordGroupSpy = spyOnProperty(component.passwordGroup, 'valid').and.returnValue(true);
      component.submit();
      expect(changePasswordSpy).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalled();
    });
  });
});
