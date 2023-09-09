import { TestBed } from '@angular/core/testing';

import { ChangePasswordService } from './change-password.service';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AppConfigService } from 'src/app/app-config.service';
import { InternalChangePasswordRequest } from '../model/InternalChangePasswordRequest.model';
import { of, throwError } from 'rxjs';

describe('ChangePasswordService', () => {
  let service: ChangePasswordService;
  let httpClientSpy: { put: jasmine.Spy };
  let appConfigSpy: { get: jasmine.Spy };
  let sessionUserSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: AppConfigService, useValue: appConfigSpy },
        { provide: SessionUserService, useValue: sessionUserSpy }
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put']);
    appConfigSpy = jasmine.createSpyObj('AppConfigService', ['get']);
    sessionUserSpy = jasmine.createSpyObj('SessionUserService', ['get']);
    service = new ChangePasswordService(httpClientSpy as any, appConfigSpy as any, sessionUserSpy as any);

    appConfigSpy.get.and.returnValue({
      config: {
        url_api: 'localhost:4200/'
      }
    });

    sessionUserSpy.get.and.returnValue({
      userId: 'a1b2-c3d4-e5f6-g7h8'
  });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('changePassword', () => {
    const request: InternalChangePasswordRequest = {
      currentPassword: 'pass1',
      newPassword: 'pass2'
    };

    afterEach(() => expect(httpClientSpy.put).toHaveBeenCalledTimes(1));

    it('success', () => {
      const expectResult = {};
      httpClientSpy.put.and.returnValue(of(expectResult));
      service.changePassword(request).subscribe({ next: result => expect(result).toEqual(Object.assign(expectResult)), error: () => fail('expected an result') });
    });

    it('undefined error', () => {
      const expectError = new HttpErrorResponse({});
      httpClientSpy.put.and.returnValue(throwError(() => expectError));
      service.changePassword(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err).toBeDefined() });
    });

    it('404 error', () => {
      const expectError = new HttpErrorResponse({ status: 404 });
      httpClientSpy.put.and.returnValue(throwError(() => expectError));
      service.changePassword(request).subscribe({ next: () => fail('expect an error'), error: err => expect(err.status).toEqual(404) });
    });
  });
});
