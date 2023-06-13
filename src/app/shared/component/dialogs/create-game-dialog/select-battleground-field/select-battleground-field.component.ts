import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Battleground } from 'src/app/pages/games/models/dtos/battleground.model';

@Component({
  selector: 'app-select-battleground-field',
  templateUrl: './select-battleground-field.component.html',
  styleUrls: ['./select-battleground-field.component.scss']
})
export class SelectBattlegroundFieldComponent {
  @Output() onClickEvent: EventEmitter<Battleground> = new EventEmitter<Battleground>();
  @Output() onIconClickEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() firstLine!: string;
  @Input() battleground: Battleground;
  @Input() icon: string;

  public onClick() {
    this.onClickEvent.emit(this.battleground);
  }

  public onIconClick(event: MouseEvent) {
    event.stopPropagation();
    this.onIconClickEvent.emit(this.battleground.id);
  }
}
