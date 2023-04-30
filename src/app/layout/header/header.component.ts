import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { finalize, map } from 'rxjs';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { ThemeService } from 'src/app/core/themes/theme.service';
import { SidebarService } from '../sidebar/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() darkModeToggle = new EventEmitter<void>();
  isChecked: boolean;
  
  constructor(
    private sidebarService: SidebarService, 
    private authenticationService: AuthenticationService, 
    private router: Router,
    private themeService: ThemeService) {
    this.isChecked = themeService.getTheme() == 'dark-theme';
  }

  toggleSidebarState() {   
    this.sidebarService.sendToggleSidebarState();
  }

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    const theme = checked ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(theme);
    this.darkModeToggle.emit();
  }

  logout() {
    this.authenticationService.logout()
      .pipe(finalize(() => this.router.navigate(['/login'])))
      .subscribe(() => {})
  }
}
