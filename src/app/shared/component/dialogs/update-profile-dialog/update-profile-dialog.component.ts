import { AfterViewInit, Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription, finalize } from 'rxjs';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { UpdateProfileForm } from 'src/app/shared/form/components/update-profile/update-profile.form';
import { UpdateProfileRequest } from 'src/app/shared/services/models/person/requests/update-profile.request';
import { UpdateProfileResponse } from 'src/app/shared/services/models/person/responses/update-profile.response';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-update-profile-dialog',
  templateUrl: './update-profile-dialog.component.html',
  styleUrls: ['./update-profile-dialog.component.scss']
})
export class UpdateProfileDialogComponent implements AfterViewInit, OnDestroy {
  public form: UpdateProfileForm = new UpdateProfileForm();
  public loading: boolean = false;
  public subscriptions: Subscription[] = [];
  constructor (
    public dialogRef: MatDialogRef<UpdateProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateProfileRequest,
    private authService: AuthenticationService,
    private personService: PersonService,
  ) { }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(this.dialogRef.backdropClick().subscribe(() => this.dialogRef.close(false)));
    this.form.name.patchValue(this.data.name);
    this.form.email.patchValue(this.data.email);
  }

  updateProfile() {
    this.loading = true;
    this.subscriptions.push(
      this.personService.updateProfile(this.adjustRequest(this.form.getValues()))
        .pipe(finalize(() => this.loading = false))
        .subscribe({ 
          next: (response: UpdateProfileResponse) => {
            this.authService.updateToken(response.token);
            this.form.reset();
            this.dialogRef.close(true);
          }
        })
    );
  }

  adjustRequest(request: UpdateProfileRequest): UpdateProfileRequest {
    if(request.name == this.data.name) request.name = undefined;
    if(request.email == this.data.email) request.email = undefined;
    return request;
  }

  isUpdateButtonDisabled() {
    return [this.data.name, ''].includes(this.form.name.value)
      && [this.data.email, ''].includes(this.form.email.value)
      && !this.form.phone.value
      && !this.form.image.value
      || this.form.invalid;
  }

  cancelClick() {
    this.dialogRef.close(false);
  }
}
