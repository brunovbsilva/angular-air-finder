import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Profile } from 'src/app/core/common/models/profile';
import { AuthenticationService } from 'src/app/core/security/services/authentication.service';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';
import { UpdateProfileForm } from 'src/app/shared/form/components/update-profile/update-profile.form';
import { UpdateProfileRequest } from 'src/app/shared/services/models/person/requests/update-profile.request';
import { UpdateProfileResponse } from 'src/app/shared/services/models/person/responses/update-profile.response';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: Profile;
  public currentFile: File;
  public form: UpdateProfileForm = new UpdateProfileForm();

  constructor(
    private sessionUser: SessionUserService,
    private authService: AuthenticationService,
    private personService: PersonService,
    ) {}

  ngOnInit(): void {
    this.updateProfilePage();
  }

  private updateProfilePage() {
    this.profile = this.sessionUser.get().profile;
  }

  public onFileSelected(event: any) {
    this.currentFile = event.target.files[0];
  }

  public updateProfile() {
    let request = this.form.getValues();
    console.log(request);
    this.personService.updateProfile(request)
      .pipe(finalize(() => this.updateProfilePage()))
      .subscribe({ 
        next: (response: UpdateProfileResponse) => {
          this.authService.updateToken(response.token);
          this.form.reset();
        }
      });
  }
  
}
