import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  
  public routes: string[] = [];

  constructor(route: Router) {
    this.updateBreacrumbOnRouteChange(route);
  }

  ngOnInit(): void {}

  updateBreacrumbOnRouteChange(route: Router): void {
    route.events.subscribe(evt => {
      if (evt instanceof NavigationEnd)
        this.changeBreadcrumb(evt.urlAfterRedirects);
    });
  }

  changeBreadcrumb(url: string): void {
    this.routes = [];

    const splitedRoutes = url.split('/').filter(route => route !== '');

    for (let route of splitedRoutes) {
      if (route.includes('?')) route = route.slice(0, route.indexOf('?'));

      this.routes.push('Breadcrumb.' + this.toFirstLetterUpperCase(route));
    }
  }

  private toFirstLetterUpperCase(s: string): string {
    return s[0].toUpperCase() + s.slice(1);
  }
}
