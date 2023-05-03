import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalUpdatePasswordComponent } from './internal-update-password.component';

describe('InternalUpdatePasswordComponent', () => {
  let component: InternalUpdatePasswordComponent;
  let fixture: ComponentFixture<InternalUpdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalUpdatePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
