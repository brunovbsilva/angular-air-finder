import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/core/common/models/profile';
import { SessionUserService } from 'src/app/core/security/services/session-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: Profile;

  constructor(private sessionUser: SessionUserService) {}

  ngOnInit(): void {
    this.profile = this.sessionUser.get().profile;
  }

  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
  }

  public updateImage() {
    
  }
  
}
