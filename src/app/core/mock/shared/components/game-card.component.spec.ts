import { Component, Input } from '@angular/core';
import { GameCardModel } from 'src/app/pages/games/models/game-card.model';

@Component({
  selector: 'app-game-card',
  template: ''
})
export class GameCardComponentSpec {
  @Input() model!: GameCardModel;
}
