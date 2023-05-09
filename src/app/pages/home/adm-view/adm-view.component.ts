import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-view',
  templateUrl: './adm-view.component.html',
  styleUrls: ['./adm-view.component.scss']
})
export class AdmViewComponent {

  cards = [
    { name: 'Arnaldo', subtitle: 'Game organizer', details: "Novo jogo", date: '01-01-2023', where: 'Campinas'},
    { name: 'Bernaldo', subtitle: 'Game organizer', details: "Novo jogo", date: '01-01-2023', where: 'Campinas'},
    { name: 'Cernaldo', subtitle: 'Game organizer', details: "Novo jogo", date: '01-01-2023', where: 'Campinas'},
    { name: 'Dernaldo', subtitle: 'Game organizer', details: "Novo jogo", date: '01-01-2023', where: 'Campinas'},
    { name: 'Ernaldo', subtitle: 'Game organizer', details: "Novo jogo", date: '01-01-2023', where: 'Campinas'},
    { name: 'Fernaldo', subtitle: 'Game organizer', details: "Novo jogo", date: '01-01-2023', where: 'Campinas'},
    { name: 'Gernaldo', subtitle: 'Game organizer', details: "Novo jogo", date: '01-01-2023', where: 'Campinas'}
  ]

}
