import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../sidebar/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  constructor(private sidebarService: SidebarService) { }

  toggleSidebarState() {   
    this.sidebarService.sendToggleSidebarState();
  }
}
