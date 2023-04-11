import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidatorsComponent } from './password-validators.component';

describe('PasswordValidatorsComponent', () => {
  let component: PasswordValidatorsComponent;
  let fixture: ComponentFixture<PasswordValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordValidatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
