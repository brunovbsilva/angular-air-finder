
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { ThemeService } from '../core/themes/theme.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  public currentPage: string = 'enter';

  constructor(
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
    route: Router
  ) {
    this.updateOnRouteChange(route);
  }

  private updateOnRouteChange(route: Router): void {
    route.events.subscribe(evt => {
      if (evt instanceof NavigationEnd)
        this.changeTitle(evt.urlAfterRedirects);
    });
  }

  ngAfterViewInit(): void {
    this.setTheme();
  }

  private changeTitle(url: string) {
    const splitedRoutes = url.split('/').filter(route => route !== '');
    this.currentPage = splitedRoutes[0] == 'login' ? 'enter' : splitedRoutes[0];
  }

  setTheme() {
    this.renderer.setAttribute(this.document.body, 'class', this.themeService.getTheme());
  }
}
