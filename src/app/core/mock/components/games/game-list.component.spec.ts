import { Component, Input } from '@angular/core';
import { GameTabOptions } from 'src/app/pages/games/models/game-tab/game-tab.model';

@Component({
  selector: 'app-game-list',
  template: '',
})
export class GameListComponentSpec {
  @Input() options: GameTabOptions = new GameTabOptions();
}
