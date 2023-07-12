import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GamePaymentStatus } from 'src/app/pages/games/models/enums/game-payment-status.enum';
import { GameStatus } from 'src/app/pages/games/models/enums/game-status.enum';
import { CardOptions } from './models/card-options.model';
import { GameCard } from 'src/app/pages/games/models/responses/get-list-response.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() model!: GameCard;
  @Input() options: CardOptions = new CardOptions();
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();
  @Output() onUpdate: EventEmitter<void> = new EventEmitter<void>();
  @Output() onJoin: EventEmitter<void> = new EventEmitter<void>();
  @Output() onLeave: EventEmitter<void> = new EventEmitter<void>();
  @Output() onPay: EventEmitter<void> = new EventEmitter<void>();

  get gameStatus() {
    return {
      All: GameStatus.All,
      Created: GameStatus.Created,
      Started: GameStatus.Started,
      Finished: GameStatus.Finished
    }
  }

  get GamePaymentStatus() {
    return {
      NotJoined: GamePaymentStatus.NotJoined,
      Joined: GamePaymentStatus.Joined,
      Paid: GamePaymentStatus.Paid
    }
  }

  constructor() {}

  ngOnInit(): void {
    if(!this.model.imageUrl) this.model.imageUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }

  emitOnDelete(event: MouseEvent) {
    event.stopPropagation();
    this.onDelete.emit();
  }

  emitOnUpdate(event: MouseEvent) {
    event.stopPropagation();
    this.onUpdate.emit();
  }
  
  emitOnPay(event: MouseEvent) {
    event.stopPropagation();
    this.onPay.emit();
  }
  
  emitOnJoin(event: MouseEvent) {
    event.stopPropagation();
    this.onJoin.emit();
  }
  
  emitOnLeave(event: MouseEvent) {
    event.stopPropagation();
    this.onLeave.emit();
  }
}
