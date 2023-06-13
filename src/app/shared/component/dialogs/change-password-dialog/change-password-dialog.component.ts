import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { InternalUpdatePasswordForm } from 'src/app/shared/form/components/internal-update-password/internal-update-password.form';
import { ChangePasswordService } from './services/change-password.service';

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
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) { }

  okClick() {
    if(!this.updatePassword.valid) {
      this.updatePassword.currentPassword.markAsDirty();
      this.updatePassword.newPassword.markAsDirty();
      this.updatePassword.confirmPassword.markAsDirty();
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
    this.service.changePassword(this.updatePassword.getValues())
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
