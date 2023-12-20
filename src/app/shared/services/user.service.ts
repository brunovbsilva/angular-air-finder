import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/app-config.service';
import { skipBearerToken } from 'src/app/core/security/interceptor/app.http-interceptor';
import { LoginRequest } from 'src/app/shared/services/models/user/requests/login-request.model';
import { ChangePasswordRequest } from 'src/app/shared/services/models/user/requests/change-password-request.model';
import { VerifyTokenRequest } from 'src/app/shared/services/models/user/requests/verify-token-request.model';
import { BaseResponse } from 'src/app/shared/services/models/base-response';
import { QueryString } from 'src/app/shared/utils/query-string.extention';
import { UserRequest } from './models/user/requests/user-request';
import { CreateUserResponse } from './models/user/responses/create-user-response';
import { LoginResponse } from './models/user/responses/login-response.model';
import { InternalUpdatePasswordRequest } from './models/user/requests/internal-update-password.request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient, 
    private appConfig: AppConfigService
  ) { }

  public login(request: LoginRequest) {
    const queryString = QueryString.toString(request);
    const url = `${this.appConfig.config?.url_api}api/user?${queryString}`;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });

    return this.http
      .get<LoginResponse>(url, {
        headers: headers, 
        context: new HttpContext().set(skipBearerToken, true)
      });
  }

  public createUser(request: UserRequest) {
    const url = `${this.appConfig.config?.url_api}api/user`;

    return this.http
      .post<CreateUserResponse>(url, request);
  }

  public updatePasswordInternal(request: InternalUpdatePasswordRequest) {
    const url = `${this.appConfig.config?.url_api}api/user/password`;

    return this.http
      .put<BaseResponse>(url, request);
  }

  public sendToken(email: string) {
    const queryString = `email=${email}`;
    const url = `${this.appConfig.config?.url_api}api/user/password/token?${queryString}`;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });

    return this.http
      .post<BaseResponse>(url, null, {
        headers: headers, 
        context: new HttpContext().set(skipBearerToken, true)
      });
  }

  public verifyToken(request: VerifyTokenRequest) {
    const queryString = QueryString.toString(request);
    const url = `${this.appConfig.config?.url_api}api/user/password/token?${queryString}`;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    
    return this.http
      .get<BaseResponse>(url, {
        headers: headers, 
        context: new HttpContext().set(skipBearerToken, true)
      });
  }
  
  public changePasswordToken(request: ChangePasswordRequest) {
    const queryString = QueryString.toString(request);
    const url = `${this.appConfig.config?.url_api}api/user/password/token?${queryString}`;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    
    return this.http
      .put<BaseResponse>(url, null, {
        headers: headers, 
        context: new HttpContext().set(skipBearerToken, true)
      });
  }
}

