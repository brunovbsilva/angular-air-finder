import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(user: string, password: string) {
    if(user != '' && password != '')
      localStorage.setItem('user', user);
    return this.isAuthenticated();
  }

  logout() {
    localStorage.removeItem('user');
    return this.isAuthenticated();
  }

  isAuthenticated() {
    return of(localStorage.getItem('user') != undefined);
  }
}
