import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { LoginService } from '../services/login.service';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/outer/translate.service.mock';
import { PersonalInformationComponentSpec } from 'src/app/core/mock/forms/personal-information.component.spec';
import { CredentialsComponentSpec } from 'src/app/core/mock/forms/credentials.component.spec';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

class LoginServiceMock {
  createUser() {
    return of({});
  }
}

describe('CreateComponent', () => {
  let component: CreateComponent;
  let loginService: LoginService;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CreateComponent,
        PersonalInformationComponentSpec,
        CredentialsComponentSpec
      ],
      imports: [
        BrowserAnimationsModule,
        MatStepperModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: LoginService, useClass: LoginServiceMock },
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submit', () => {
    it('should call loginService.createUser success', () => {
      const loginServiceSpy = spyOn(loginService, 'createUser').and.callThrough();
      const routerSpy = spyOn(component['router'], 'navigate');
      component.submit();
      expect(loginService.createUser).toHaveBeenCalled();
      expect(routerSpy).toHaveBeenCalledWith(['']);
    });

    it('should call loginService.createUser error', () => {
      const loginServiceSpy = spyOn(loginService, 'createUser').and.returnValue(throwError(new HttpErrorResponse({})));
      const routerSpy = spyOn(component['router'], 'navigate');
      component.submit();
      expect(loginService.createUser).toHaveBeenCalled();
      expect(routerSpy).not.toHaveBeenCalled();
    });
  });
});
