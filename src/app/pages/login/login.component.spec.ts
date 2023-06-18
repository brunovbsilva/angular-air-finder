import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/translate.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';

class RouterMock {
  get events(): any {
    return of(new NavigationEnd(0, 'login', 'login'));
  };
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let routerMock: RouterMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        MatCardModule,
        TranslateModule,
        RouterTestingModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: Router, useClass: RouterMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('route should be enter', () => {
    it('when url is login', () => {
      fixture.detectChanges();
      expect(component.currentPage).toEqual('enter');
    });
  })
});
