import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/app/login/enter/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(user: User) {
    if(user)
      localStorage.setItem('user', JSON.stringify(user));
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
