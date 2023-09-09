import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordDialogComponent } from './change-password-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/outer/translate.service.mock';
import { InternalUpdatePasswordComponentSpec } from 'src/app/core/mock/forms/internal-update-password.component.spec';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangePasswordService } from './services/change-password.service';
import { ChangePasswordServiceSpec } from './services/mock/change-password.service.spec';
import { InternalUpdatePasswordForm } from 'src/app/shared/form/components/internal-update-password/internal-update-password.form';

describe('ChangePasswordDialogComponent', () => {
  let component: ChangePasswordDialogComponent;
  let matDialogRef: MatDialogRef<ChangePasswordDialogComponent>;
  let service: ChangePasswordService;
  let snackBar: MatSnackBar;
  let translate: TranslateService;
  let fixture: ComponentFixture<ChangePasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ChangePasswordDialogComponent,
        InternalUpdatePasswordComponentSpec
      ],
      imports: [
        TranslateModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: jasmine.createSpyObj('MatDialogRef', ['close']) },
        { provide: ChangePasswordService, useClass: ChangePasswordServiceSpec },
        MatSnackBar,
        { provide: TranslateService, useClass: TranslateServiceMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordDialogComponent);
    component = fixture.componentInstance;
    matDialogRef = TestBed.inject(MatDialogRef);
    service = TestBed.inject(ChangePasswordService);
    snackBar = TestBed.inject(MatSnackBar);
    translate = TestBed.inject(TranslateService);
    component.updatePassword = new InternalUpdatePasswordForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('okClick', () => {
    let updatePasswordSpy: jasmine.Spy;
    let setCurrentPasswordErrorsSpy: jasmine.Spy;
    let setNewPasswordErrorsSpy: jasmine.Spy;
    let setConfirmPasswordErrorsSpy: jasmine.Spy;
    let snackBarSpy: jasmine.Spy;
    let translateSpy: jasmine.Spy;
    const configSnackMock = { duration: 2000, horizontalPosition: 'end', verticalPosition: 'top' };

    beforeEach(() => {
      component.updatePassword.reset();
      setCurrentPasswordErrorsSpy = spyOn(component.updatePassword.currentPassword, 'setErrors').and.callThrough();
      setNewPasswordErrorsSpy = spyOn(component.updatePassword.newPassword, 'setErrors').and.callThrough();
      setConfirmPasswordErrorsSpy = spyOn(component.updatePassword.confirmPassword, 'setErrors').and.callThrough();
      snackBarSpy = spyOn(snackBar, 'open').and.callThrough();
      translateSpy = spyOn(translate, 'get').and.callThrough();
    })

    it('valid form success', () => {
      component.updatePassword.currentPassword.patchValue('value');
      component.updatePassword.newPassword.patchValue('Pass!123');
      component.updatePassword.confirmPassword.patchValue('Pass!123');
      updatePasswordSpy = spyOn(service, 'changePassword').and.callThrough();
      component.okClick();
      expect(updatePasswordSpy).toHaveBeenCalled();
      expect(matDialogRef.close).toHaveBeenCalled();
      expect(snackBarSpy).toHaveBeenCalledOnceWith('Snackbar.ChangePassword.Success', '', configSnackMock);
      expect(setCurrentPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(setNewPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(setConfirmPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(translateSpy).toHaveBeenCalled();
    })

    it('valid form error', () => {
      component.updatePassword.currentPassword.patchValue('value');
      component.updatePassword.newPassword.patchValue('Pass!123');
      component.updatePassword.confirmPassword.patchValue('Pass!123');
      const errorMock = new HttpErrorResponse({})
      updatePasswordSpy = spyOn(service, 'changePassword').and.returnValue(throwError(() => errorMock));
      component.okClick();
      expect(updatePasswordSpy).toHaveBeenCalled();
      expect(matDialogRef.close).not.toHaveBeenCalled();
      expect(snackBarSpy).not.toHaveBeenCalled();
      expect(setCurrentPasswordErrorsSpy).toHaveBeenCalled();
      expect(setNewPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(setConfirmPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(translateSpy).not.toHaveBeenCalled();
    })

    it('invalid form valuesMustNotMatch', () => {
      component.updatePassword.currentPassword.patchValue('Pass!123');
      component.updatePassword.newPassword.patchValue('Pass!123');
      component.updatePassword.confirmPassword.patchValue('Pass!123');
      updatePasswordSpy = spyOn(service, 'changePassword').and.callThrough();
      component.updatePassword.setErrors({ valuesMustNotMatch: true });
      component.okClick();
      expect(updatePasswordSpy).not.toHaveBeenCalled();
      expect(matDialogRef.close).not.toHaveBeenCalled();
      expect(snackBarSpy).toHaveBeenCalledOnceWith('valuesMustNotMatch', '', configSnackMock);
      expect(setCurrentPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(setNewPasswordErrorsSpy).toHaveBeenCalled();
      expect(setConfirmPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(translateSpy).not.toHaveBeenCalled();
    });

    it('invalid form valuesMustMatch', () => {
      component.updatePassword.currentPassword.patchValue('pass');
      component.updatePassword.newPassword.patchValue('Pass!123');
      component.updatePassword.confirmPassword.patchValue('Pass!321');
      updatePasswordSpy = spyOn(service, 'changePassword').and.callThrough();
      component.okClick();
      expect(updatePasswordSpy).not.toHaveBeenCalled();
      expect(matDialogRef.close).not.toHaveBeenCalled();
      expect(snackBarSpy).toHaveBeenCalledOnceWith('valuesMustMatch', '', configSnackMock);
      expect(setCurrentPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(setNewPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(setConfirmPasswordErrorsSpy).toHaveBeenCalled();
      expect(translateSpy).not.toHaveBeenCalled();
    });

    it('invalid form from validators', () => {
      component.updatePassword.reset();
      updatePasswordSpy = spyOn(service, 'changePassword').and.callThrough();
      component.okClick();
      expect(updatePasswordSpy).not.toHaveBeenCalled();
      expect(matDialogRef.close).not.toHaveBeenCalled();
      expect(snackBarSpy).not.toHaveBeenCalled();
      expect(setCurrentPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(setNewPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(setConfirmPasswordErrorsSpy).not.toHaveBeenCalled();
      expect(translateSpy).not.toHaveBeenCalled();
    });
  });

  describe('cancelClick', () => {
    it('should close dialog', () => {
      component.cancelClick();
      expect(matDialogRef.close).toHaveBeenCalled();
    });
  });
});
