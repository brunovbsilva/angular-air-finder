import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Battleground } from 'src/app/pages/games/models/dtos/battleground.model';

@Component({
  selector: 'app-select-battleground',
  templateUrl: './select-battleground.component.html',
  styleUrls: ['./select-battleground.component.scss']
})
export class SelectBattlegroundComponent {
 @Input() battlegrounds!: Battleground[];
 @Output() onSelect: EventEmitter<Battleground> = new EventEmitter<Battleground>();
 @Output() onIconClickEvent: EventEmitter<void> = new EventEmitter<void>();
 @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

 selectBattleground(battleground: Battleground) {
  this.onSelect.emit(battleground);
 }

 deleteBattleground(id: string) {
  this.onDelete.emit(id);
 }

 onIconClick() {
  this.onIconClickEvent.emit();
 }
}
