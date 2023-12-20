import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardOptions } from 'src/app/pages/games/game-list/game-card/create-game-dialog/models/card-options.model';
import { GameCard } from 'src/app/shared/services/models/game/responses/get-list-response.model';

@Component({
  selector: 'app-game-card',
  template: ''
})
export class GameCardComponentSpec {
  @Input() model!: GameCard;
  @Input() options: CardOptions = new CardOptions();
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();
  @Output() onUpdate: EventEmitter<void> = new EventEmitter<void>();
  @Output() onJoin: EventEmitter<void> = new EventEmitter<void>();
  @Output() onLeave: EventEmitter<void> = new EventEmitter<void>();
  @Output() onPay: EventEmitter<void> = new EventEmitter<void>();
}
