import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/app-config.service';
import { skipBearerToken } from 'src/app/core/security/interceptor/app.http-interceptor';
import { LoginRequest } from 'src/app/pages/login/enter/model/login-request.model';
import { ChangePasswordRequest } from 'src/app/pages/login/forgot-password/model/change-password-request.model';
import { VerifyTokenRequest } from 'src/app/pages/login/forgot-password/model/verify-token-request.model';
import { BaseResponse } from 'src/app/shared/models/response/base-response';
import { QueryString } from 'src/app/shared/utils/query-string.extention';
import { UserRequest } from '../create/model/user-request';
import { CreateUserResponse } from '../create/model/create-user-response';
import { LoginResponse } from '../enter/model/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

