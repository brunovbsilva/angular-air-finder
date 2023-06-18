import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameLogStatus } from 'src/app/pages/games/models/enums/game-log-status.enum';
import { GameStatus } from 'src/app/pages/games/models/enums/game-status.enum';
import { GameCard } from 'src/app/pages/games/models/game-card.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() model!: GameCard;
  @Input() color: string = 'primary';
  @Input() highlighted: string = 'true';
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();
  @Output() onUpdate: EventEmitter<void> = new EventEmitter<void>();
  @Output() onJoin: EventEmitter<void> = new EventEmitter<void>();
  @Output() onLeave: EventEmitter<void> = new EventEmitter<void>();
  @Output() onPay: EventEmitter<void> = new EventEmitter<void>();

  get gameStatus() {
    return {
      None: GameStatus.None,
      Created: GameStatus.Created,
      Started: GameStatus.Started,
      Finished: GameStatus.Finished
    }
  }

  get joinStatus() {
    return {
      None: GameLogStatus.None,
      Joined: GameLogStatus.Joined,
      PaidOut: GameLogStatus.PaidOut,
      Validated: GameLogStatus.Validated,
      Finished: GameLogStatus.Finished
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

  onButtonClick(event: MouseEvent, isJoin: boolean) {
    event.stopPropagation();
    if(isJoin) this.onJoin.emit();
    else this.onLeave.emit();
  }
  
  emitOnPay(event: MouseEvent) {
    event.stopPropagation();
    this.onPay.emit();
  }
}
