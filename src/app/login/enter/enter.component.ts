import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent {
  hide = true;

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  login(user: string, password: string) {
    this.authenticationService.login(user, password)
      .pipe(finalize(() => this.router.navigate(['/home'])))
      .subscribe(() => console.log('login!'));
  }
}
