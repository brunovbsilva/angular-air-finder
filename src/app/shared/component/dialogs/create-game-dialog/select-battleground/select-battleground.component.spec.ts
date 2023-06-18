import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBattlegroundComponent } from './select-battleground.component';

describe('SelectBattlegroundComponent', () => {
  let component: SelectBattlegroundComponent;
  let fixture: ComponentFixture<SelectBattlegroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBattlegroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBattlegroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
