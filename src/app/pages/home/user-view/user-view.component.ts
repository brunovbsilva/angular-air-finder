import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {
  public bannerItems = {
    gamesPlayed: 27,
    weekStreak: 5,
    points: 2300
  };
  public currentPage: any = 1;
}
