import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { GameCard } from '../../models/responses/get-list-response.model';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameCardComponent,
      ],
      imports: [
        MatCardModule,
        MatChipsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    component.model = new GameCard();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
