import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ''
})
export class HeaderComponentSpec {
  @Output() menuToggle = new EventEmitter<void>();
}
