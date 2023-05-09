import { Component, Input, OnInit } from '@angular/core';
import { GameCardModel } from './model/game-card.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() model!: GameCardModel;

  ngOnInit(): void {
    if(!this.model.avatar) this.model.avatar = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }
}
