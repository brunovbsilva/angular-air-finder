import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AppConfigService } from 'src/app/app-config.service';
import { skipBearerToken } from 'src/app/core/security/interceptor/app.http-interceptor';
import { CreateUserResponse } from 'src/app/login/create/model/create-user-response';
import { UserRequest } from 'src/app/login/create/model/user-request';
import { LoginRequest } from 'src/app/login/enter/model/login-request';
import { LoginResponse } from 'src/app/login/enter/model/login-response';
import { ChangePasswordRequest } from 'src/app/login/forgot-password/model/change-password-request';
import { VerifyTokenRequest } from 'src/app/login/forgot-password/model/verify-token-request';
import { BaseResponse } from 'src/app/shared/models/response/base-response';
import { QueryString } from 'src/app/shared/utils/query-string.extention';

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

