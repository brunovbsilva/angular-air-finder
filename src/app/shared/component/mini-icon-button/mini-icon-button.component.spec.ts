import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniIconButtonComponent } from './mini-icon-button.component';

describe('MiniIconButtonComponent', () => {
  let component: MiniIconButtonComponent;
  let fixture: ComponentFixture<MiniIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniIconButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
