import { Component } from '@angular/core';
import { GameCardModel } from 'src/app/shared/component/game-card/model/game-card.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {

  cards: GameCardModel[] = [
    { name: 'Arnaldo', title: 'Admin', body: "Teste sem imagem", date: '13-05-2023'},
    { name: 'Bernaldo', title: 'Teste', body: "Teste sem imagem", date: '13-05-2023'},
    { name: 'Cernaldo', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', body: "Teste com imagem", date: '13-05-2023'},
  ]
}
