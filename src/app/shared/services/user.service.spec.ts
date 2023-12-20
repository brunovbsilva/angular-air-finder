import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AppConfigService } from 'src/app/app-config.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from './models/user/requests/login-request.model';
import { of, throwError } from 'rxjs';
import { UserRequest } from './models/user/requests/user-request';
import { VerifyTokenRequest } from './models/user/requests/verify-token-request.model';
import { ChangePasswordRequest } from './models/user/requests/change-password-request.model';
import { InternalUpdatePasswordRequest } from './models/user/requests/internal-update-password.request.model';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy };
  let appConfigSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: AppConfigService, useValue: appConfigSpy }
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    appConfigSpy = jasmine.createSpyObj('AppConfigService', ['get']);
    service = new UserService(httpClientSpy as any, appConfigSpy as any);

    appConfigSpy.get.and.returnValue({
      config: {
        url_api: 'localhost:4200/'
      }
    });

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    const request: LoginRequest = {
      login: 'teste',
      password: 'pass123'
    };

    afterEach(() => {
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });

    it('success', () => {
      const expectResult = {};
      httpClientSpy.get.and.returnValue(of(expectResult));
      service.login(request).subscribe({ next: result => expect(result).toEqual(Object.assign(expectResult)), error: () => fail('expected an result') });
    });

    it('undefined error', () => {
      const expectError = new HttpErrorResponse({});
      httpClientSpy.get.and.returnValue(throwError(() => expectError));
      service.login(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err).toBeDefined() });
    });

    it('404 error', () => {
      const expectError = new HttpErrorResponse({ status: 404 });
      httpClientSpy.get.and.returnValue(throwError(() => expectError));
      service.login(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err.status).toEqual(404) });
    });
  });

  describe('createUser', () => {
    const request: UserRequest = {
      name: 'name',
      email: 'email@email.com',
      birthday: new Date(),
      cpf: '99999999999',
      gender: 3,
      login: 'login',
      password: 'pass',
      phone: '19999999999',
    };

    afterEach(() => {
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });

    it('success', () => {
      const expectResult = {};
      httpClientSpy.post.and.returnValue(of(expectResult));
      service.createUser(request).subscribe({ next: result => expect(result).toEqual(Object.assign(expectResult)), error: () => fail('expected an result') });
    });

    it('undefined error', () => {
      const expectError = new HttpErrorResponse({});
      httpClientSpy.post.and.returnValue(throwError(() => expectError));
      service.createUser(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err).toBeDefined() });
    });

    it('404 error', () => {
      const expectError = new HttpErrorResponse({ status: 404 });
      httpClientSpy.post.and.returnValue(throwError(() => expectError));
      service.createUser(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err.status).toEqual(404) });
    });
  });

  describe('sendToken', () => {
    const request: string = '123456'

    afterEach(() => {
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });

    it('success', () => {
      const expectResult = {};
      httpClientSpy.post.and.returnValue(of(expectResult));
      service.sendToken(request).subscribe({ next: result => expect(result).toEqual(Object.assign(expectResult)), error: () => fail('expected an result') });
    });

    it('undefined error', () => {
      const expectError = new HttpErrorResponse({});
      httpClientSpy.post.and.returnValue(throwError(() => expectError));
      service.sendToken(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err).toBeDefined() });
    });

    it('404 error', () => {
      const expectError = new HttpErrorResponse({ status: 404 });
      httpClientSpy.post.and.returnValue(throwError(() => expectError));
      service.sendToken(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err.status).toEqual(404) });
    });
  });

  describe('verifyToken', () => {
    const request: VerifyTokenRequest = {
      email: 'email@email.com',
      token: '123456'
    };

    afterEach(() => {
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });

    it('success', () => {
      const expectResult = {};
      httpClientSpy.get.and.returnValue(of(expectResult));
      service.verifyToken(request).subscribe({ next: result => expect(result).toEqual(Object.assign(expectResult)), error: () => fail('expected an result') });
    });

    it('undefined error', () => {
      const expectError = new HttpErrorResponse({});
      httpClientSpy.get.and.returnValue(throwError(() => expectError));
      service.verifyToken(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err).toBeDefined() });
    });

    it('404 error', () => {
      const expectError = new HttpErrorResponse({ status: 404 });
      httpClientSpy.get.and.returnValue(throwError(() => expectError));
      service.verifyToken(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err.status).toEqual(404) });
    });
  });

  describe('changePassword', () => {
    const request: ChangePasswordRequest = {
      email: 'email@email.com',
      newPassword: 'pass'
    };

    afterEach(() => {
      expect(httpClientSpy.put).toHaveBeenCalledTimes(1);
    });

    it('success', () => {
      const expectResult = {};
      httpClientSpy.put.and.returnValue(of(expectResult));
      service.changePasswordToken(request).subscribe({ next: result => expect(result).toEqual(Object.assign(expectResult)), error: () => fail('expected an result') });
    });

    it('undefined error', () => {
      const expectError = new HttpErrorResponse({});
      httpClientSpy.put.and.returnValue(throwError(() => expectError));
      service.changePasswordToken(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err).toBeDefined() });
    });

    it('404 error', () => {
      const expectError = new HttpErrorResponse({ status: 404 });
      httpClientSpy.put.and.returnValue(throwError(() => expectError));
      service.changePasswordToken(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err.status).toEqual(404) });
    });
  });

  describe('updatePasswordInternal', () => {
    const request: InternalUpdatePasswordRequest = {
      currentPassword: 'pass1',
      newPassword: 'pass2'
    };

    afterEach(() => expect(httpClientSpy.put).toHaveBeenCalledTimes(1));

    it('success', () => {
      const expectResult = {};
      httpClientSpy.put.and.returnValue(of(expectResult));
      service.updatePasswordInternal(request).subscribe({ next: result => expect(result).toEqual(Object.assign(expectResult)), error: () => fail('expected an result') });
    });

    it('undefined error', () => {
      const expectError = new HttpErrorResponse({});
      httpClientSpy.put.and.returnValue(throwError(() => expectError));
      service.updatePasswordInternal(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err).toBeDefined() });
    });

    it('404 error', () => {
      const expectError = new HttpErrorResponse({ status: 404 });
      httpClientSpy.put.and.returnValue(throwError(() => expectError));
      service.updatePasswordInternal(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err.status).toEqual(404) });
    });
  });
});
