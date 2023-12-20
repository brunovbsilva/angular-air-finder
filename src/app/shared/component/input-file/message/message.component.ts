import { Component, Input, OnInit } from '@angular/core';
import { Messages } from '../models/texts/messages.model';
import { BehaviorSubject } from 'rxjs';
import { ErrorMessage } from '../models/errors.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  message: string = '';
  success: boolean = true;

  showEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  public open(model: ErrorMessage) {
    this.message = model.message;
    this.success = model.success;
    this.showEvent.next(true);
  }

  public close() {
    this.showEvent.next(false);
  }
  
}
