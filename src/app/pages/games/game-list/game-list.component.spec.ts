import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListComponent } from './game-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GameCardComponentSpec } from 'src/app/core/mock/shared/components/game-card.component.spec';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameListComponent,
        GameCardComponentSpec
      ],
      imports: [
        MatDialogModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
