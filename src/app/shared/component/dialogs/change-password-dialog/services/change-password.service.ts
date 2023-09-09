import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/app-config.service';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';
import { BaseResponse } from 'src/app/shared/models/response/base-response';
import { InternalChangePasswordRequest } from '../model/InternalChangePasswordRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  constructor(
    private http: HttpClient, 
    private appConfig: AppConfigService,
    private user: SessionUserService
  ) { }

  public changePassword(request: InternalChangePasswordRequest) {
    const userId = this.user.get().userId;
    const url = `${this.appConfig.config?.url_api}api/user/password`;

    return this.http
      .put<BaseResponse>(url, request);
  }

}
