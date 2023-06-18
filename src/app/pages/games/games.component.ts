import { Component } from '@angular/core';
import { GameLogStatus } from './models/enums/game-log-status.enum';
import { GameTab } from './models/game-tab/game-tab.model';
import { GameStatus } from './models/enums/game-status.enum';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  public tabs: GameTab[] = [
    { 
      name: 'Next games', 
      options: {
        title: 'Next Games',
        gameStatusList: [
          GameStatus.Created,
          GameStatus.Started
        ],
        canFilter: true,
        canCreateGame: true,
        fromDate: new Date(),
      }
    },
    { 
      name: 'Applyed games', 
      options: {
        title: 'Applyed Games',
        gameStatusList: [
          GameStatus.Created,
          GameStatus.Started
        ],
        joinStatusList: [
          GameLogStatus.Joined,
          GameLogStatus.PaidOut,
          GameLogStatus.Validated
        ]
      }
    },
    { 
      name: 'Played games', 
      options: {
        title: 'Played Games',
        gameStatusList: [ GameStatus.Finished ],
        joinStatusList: [ GameLogStatus.Finished ]
      }
    },
  ]
}
