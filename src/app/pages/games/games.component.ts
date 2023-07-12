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
      name: 'Next games', 
      options: {
        title: 'Next Games',
        gameStatus: GameStatus.Created,
        canFilter: true,
        canCreateGame: true
      }
    },
    { 
      name: 'Applyed games', 
      options: {
        title: 'Applyed Games',
        gameStatus: GameStatus.Started
      }
    },
    { 
      name: 'Played games', 
      options: {
        title: 'Played Games',
        gameStatus: GameStatus.Finished
      }
    },
  ]
}
