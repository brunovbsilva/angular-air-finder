import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainLayoutComponent,
        MockAppHeader,
        MockAppSidebar,
        MockAppFooter,
        MockAppBreadcrumb,
      ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should collapse sidebar on event', () => {
    component.sidebarCollapsedEvent(true);
    expect(component.sidebarCollapsed).toBeTrue();
  })
});

@Component({
  selector: 'app-header',
  template: '<p>Mock app-header</p>',
})
class MockAppHeader { }

@Component({
  selector: 'app-sidebar',
  template: '<p>Mock app-sidebar</p>',
})
class MockAppSidebar { }

@Component({
  selector: 'app-footer',
  template: '<p>Mock app-footer</p>',
})
class MockAppFooter { }

@Component({
  selector: 'app-breadcrumb',
  template: '<p>Mock app-breadcrumb</p>',
})
class MockAppBreadcrumb { }
