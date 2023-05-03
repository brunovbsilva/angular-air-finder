import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InternalUpdatePasswordForm } from '../../form/components/internal-update-password/internal-update-password.form';
import { ChangePasswordService } from './service/change-password.service';
import { ChangePasswordDialogMapper } from './mapper/change-password-dialog.mapper';
import { finalize } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent {

  updatePassword = new InternalUpdatePasswordForm();
  loading: boolean = false;

  constructor (
    public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    private service: ChangePasswordService,
    private mapper: ChangePasswordDialogMapper,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) { }

  okClick() {
    if(!this.updatePassword.valid) {
      this.updatePassword.currentPassword.markAsDirty();
      this.updatePassword.newPassword.markAsDirty();
      this.updatePassword.confirmPassword.markAsDirty();
      console.log(Object.keys(this.updatePassword.errors ?? []))
      const keys = Object.keys(this.updatePassword.errors ?? []);
      if(keys.includes('valuesMustNotMatch')) {
        this.openSnackBar('valuesMustNotMatch');
        this.updatePassword.newPassword.setErrors({"valuesMustNotMatch": true})
      }
      if(keys.includes('valuesMustMatch')) {
        this.openSnackBar('valuesMustMatch');
        this.updatePassword.confirmPassword.setErrors({"valuesMustMatch": true})
      }
      return;
    }
      
    this.loading = true;
    const request = this.mapper.mapInternalChangePasswordRequestForm(this.updatePassword);
    this.service.changePassword(request)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res) => {
          this.translate.get('Snackbar.ChangePassword.Success').subscribe(t => this.openSnackBar(t));
          this.dialogRef.close();
        },
        error: (err) => {
          this.updatePassword.currentPassword.setErrors({ 'incorrectPassword': true });
        }
      })
  }

  cancelClick() {
    this.dialogRef.close();
  }

  private openSnackBar(msg: string, act: string = ''){
    this._snackBar.open(msg, act, {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
    }); 
  }

}
