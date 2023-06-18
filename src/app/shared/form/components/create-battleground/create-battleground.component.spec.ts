import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBattlegroundComponent } from './create-battleground.component';

describe('CreateBattlegroundComponent', () => {
  let component: CreateBattlegroundComponent;
  let fixture: ComponentFixture<CreateBattlegroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBattlegroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBattlegroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
