import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, finalize, map } from 'rxjs';
import { Profile } from 'src/app/core/common/models/profile';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';
import { UpdateProfileDialogComponent } from 'src/app/shared/component/dialogs/update-profile-dialog/update-profile-dialog.component';
import { IPersonLimited } from 'src/app/shared/services/models/person/interfaces/person-limited.interface';
import { SearchPeopleRequest } from 'src/app/shared/services/models/person/requests/search-people.request';
import { UpdateProfileRequest } from 'src/app/shared/services/models/person/requests/update-profile.request';
import { SearchPeopleResponse } from 'src/app/shared/services/models/person/responses/search-people.response';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: Profile;
  public loadingSearch: boolean = false;
  public searchResult: IPersonLimited[] = [];

  constructor(
    private sessionUser: SessionUserService,
    private personService: PersonService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updateProfilePage();
  }

  public openUpdateProfileDialog() {
    const DIALOG = this.dialog.open(UpdateProfileDialogComponent, {
      minWidth: 'auto',
      data: new UpdateProfileRequest(this.profile.name, this.profile.email)
    });

    DIALOG.afterClosed()
      .pipe(filter((result: boolean) => result))
      .subscribe({
        next: value => { if(value) this.updateProfilePage(); }
      });
  }

  private updateProfilePage() {
    this.profile = this.sessionUser.get().profile;
  }

  public search(value: string) {
    this.loadingSearch = true;
    this.personService.searchPeople(new SearchPeopleRequest(value))
      .pipe(
        map((response: SearchPeopleResponse) => response.people.filter((person: IPersonLimited) => person.id != this.profile.personId)),
        finalize(() => this.loadingSearch = false)
      )
      .subscribe({
        next: (response) => this.searchResult = response
      });
  }
  
}
