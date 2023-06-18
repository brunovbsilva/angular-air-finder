import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-icon-button',
  templateUrl: './mini-icon-button.component.html',
  styleUrls: ['./mini-icon-button.component.scss']
})
export class MiniIconButtonComponent {
  @Input() icon: string = '';
  @Input() color: string = '';
  @Input() tooltip: string = '';
}
