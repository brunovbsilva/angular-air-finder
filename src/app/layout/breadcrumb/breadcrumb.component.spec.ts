import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { BreadcrumbComponent } from './breadcrumb.component';
import TranslateServiceMock from 'src/app/core/mock/translate.service.mock';

const eventSubject = new ReplaySubject<RouterEvent>();
const routerMock = {
  navigate: jasmine.createSpy('navigate'),
  events: eventSubject.asObservable(),
  url: '/test/url',
};

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbComponent],
      imports: [TranslateModule],
      providers: [
        {
          provide: Router,
          useValue: routerMock,
        },
        {
          provide: TranslateService,
          useClass: TranslateServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create routes', () => {
    const mockUrl = `/testUrl/testUrl2`;
    const mockRoutes = ['Breadcrumb.TestUrl', 'Breadcrumb.TestUrl2'];

    component.changeBreadcrumb(mockUrl);

    expect(component.routes).toEqual(mockRoutes);
  });

  it('should sanitize routes when <?> is found', () => {
    const mockUrl = `/testUrl/testUrl2?language=teSTE`;
    const mockRoutes = ['Breadcrumb.TestUrl', 'Breadcrumb.TestUrl2'];

    component.changeBreadcrumb(mockUrl);

    expect(component.routes).toEqual(mockRoutes);
  });

  it('should update routes on url change', () => {
    const methodSpy = spyOn(component, 'changeBreadcrumb');
    eventSubject.next(new NavigationEnd(1, 'regular', 'redirecUrl'));
    expect(methodSpy).toHaveBeenCalled();
  });
});
