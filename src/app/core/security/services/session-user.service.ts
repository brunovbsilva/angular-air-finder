import { Injectable } from '@angular/core';
import { SessionUser } from '../../common/models/session-user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class SessionUserService {

  public readonly tokenKey = 'token';

  constructor() { }

  get(): SessionUser{
    const decodedToken = this.decodeTokenJtw(localStorage.getItem(this.tokenKey)!);

    let user: SessionUser = new SessionUser(
      JSON.parse(decodedToken?.profile),
      decodedToken?.scopes
    );

    return user;
  }

  private decodeTokenJtw(token: string){
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }
}
