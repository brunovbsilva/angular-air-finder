import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';
import { ThemeService } from 'src/app/core/themes/theme.service';
import { ChangePasswordDialogComponent } from 'src/app/shared/component/dialogs/change-password-dialog/change-password-dialog.component';
import { ReadQrcodeDialogComponent } from 'src/app/shared/component/dialogs/read-qrcode-dialog/read-qrcode-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();
  isChecked: boolean;
  imageUrl: string;
  
  constructor(
    private authenticationService: AuthenticationService, 
    private sessionUser: SessionUserService,
    private router: Router,
    private themeService: ThemeService,
    public dialog: MatDialog
  ) 
  {
    this.isChecked = themeService.getTheme() == 'dark-theme';
  }

  ngOnInit(): void {
    this.imageUrl = this.sessionUser.get().profile.imageUrl;
  }

  onDarkModeSwitched() {
    this.isChecked = !this.isChecked;
    const theme = this.isChecked ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(theme);
  }

  openChangePasswordDialog() {
    this.dialog.open(ChangePasswordDialogComponent, {
      minWidth: 'auto'
    });
  }

  openQRCodeDialog() {
    const QRCODE_DIALOG = this.dialog.open(ReadQrcodeDialogComponent, {
      minWidth: 'auto'
    });

    QRCODE_DIALOG.afterClosed().subscribe({
      next: v => console.log(v.result)
    });
  }

  logout() {
    this.authenticationService.logout()
      .pipe(finalize(() => this.router.navigate(['/login'])))
      .subscribe(() => {})
  }

}
