import { Component, Input } from '@angular/core';
import { CreateGameForm } from './create-game.form';

@Component({
  selector: 'game-form',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent {
  @Input() createGameForm!: CreateGameForm;
  constructor() { }
}
