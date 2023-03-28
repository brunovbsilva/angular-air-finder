import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/core/themes/theme.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements AfterViewInit {
  sidebarCollapsed: boolean = true;

  constructor(
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.setTheme();
  }

  sidebarCollapsedEvent(event: boolean): void {
    this.sidebarCollapsed = event;
  }

  setTheme() {
    this.renderer.setAttribute(this.document.body, 'class', this.themeService.getTheme());
  }
}
