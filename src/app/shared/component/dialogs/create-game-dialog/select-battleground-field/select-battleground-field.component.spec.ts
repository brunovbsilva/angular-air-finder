import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBattlegroundFieldComponent } from './select-battleground-field.component';

describe('SelectBattlegroundFieldComponent', () => {
  let component: SelectBattlegroundFieldComponent;
  let fixture: ComponentFixture<SelectBattlegroundFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBattlegroundFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBattlegroundFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
