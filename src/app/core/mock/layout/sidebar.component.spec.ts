import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  template: ''
})

export class SidebarComponentSpec {
  public currentYear = new Date().getFullYear();
  public sidebarCollapsed = true;
  public mouseOver = false;
  @Output() sidebarCollapsedEvent = new EventEmitter<boolean>();
  public subscription: Subscription = new Subscription;
}
