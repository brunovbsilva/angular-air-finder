
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/themes/theme.service';

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

  ngAfterViewInit(): void {
    this.setTheme();
  }

  private updateOnRouteChange(route: Router): void {
    route.events.subscribe(evt => {
      if (evt instanceof NavigationEnd)
        this.changeTitle(evt.urlAfterRedirects);
    });
  }

  private changeTitle(url: string) {
    const splitedRoutes = url.split('/').filter(route => route !== '');
    this.currentPage = splitedRoutes[0] == 'login' ? 'enter' : splitedRoutes[0];
  }

  setTheme() {
    this.renderer.setAttribute(this.document.body, 'class', this.themeService.getTheme());
  }
}
