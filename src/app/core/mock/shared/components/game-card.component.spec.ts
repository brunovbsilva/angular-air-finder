import { Component, Input } from '@angular/core';
import { GameCardModel } from 'src/app/shared/component/game-card/model/game-card.model';

@Component({
  selector: 'app-game-card',
  template: ''
})
export class GameCardComponentSpec {
  @Input() model!: GameCardModel;
}
