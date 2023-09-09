import { Component } from '@angular/core';
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
      nameResource: 'GameList.Tabs.GameList', 
      options: {
        titleResource: 'GameList.Titles.GameList',
        gameStatus: GameStatus.Created,
        canFilter: true,
        canCreateGame: true
      }
    },
    { 
      nameResource: 'GameList.Tabs.ApplyedGames', 
      options: {
        titleResource: 'GameList.Titles.ApplyedGames',
        gameStatus: GameStatus.Started
      }
    },
    { 
      nameResource: 'GameList.Tabs.History', 
      options: {
        titleResource: 'GameList.Titles.History',
        gameStatus: GameStatus.Finished
      }
    },
  ]
}
