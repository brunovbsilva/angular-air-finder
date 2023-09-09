import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { HeaderComponentSpec } from '../core/mock/layout/header.component.spec';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavListComponentSpec } from '../core/mock/layout/nav-list.component.spec';
import { RouterTestingModule } from '@angular/router/testing';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        HeaderComponentSpec,
        NavListComponentSpec
      ],
      imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
