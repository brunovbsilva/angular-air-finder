import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  public currentYear = new Date().getFullYear();
  public sidebarCollapsed = true;
  public mouseOver = false;
  @Output() sidebarCollapsedEvent = new EventEmitter<boolean>();
  public subscription: Subscription = new Subscription;

  constructor(private service: SidebarService) {
    this.subscription = service.getToggleSidebarState().subscribe(() => this.toggleSidebar());
  }

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.mouseOver = !this.sidebarCollapsed;
    this.sidebarCollapsedEvent.emit(this.sidebarCollapsed);
  }

  setMouseOver(set: boolean): void {
    this.mouseOver = set;
  }
}
