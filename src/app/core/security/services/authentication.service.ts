import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly JWTKey = 'token';

  constructor() { }

  login(token: string) {
    this.updateToken(token);
    return this.isAuthenticated();
  }

  logout() {
    localStorage.removeItem(this.JWTKey);
    return this.isAuthenticated();
  }

  updateToken(token: string) {
    localStorage.setItem(this.JWTKey, token);
  }

  isAuthenticated() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem(this.JWTKey);
    const valid = token && !helper.isTokenExpired(token);
    return of(valid ?? false);
  }
}
