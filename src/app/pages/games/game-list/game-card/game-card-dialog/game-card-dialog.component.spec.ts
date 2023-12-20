import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCardDialogComponent } from './game-card-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GameDetails } from '../../../../../shared/services/models/game/responses/get-details-response.model';
import { Battleground } from '../../../models/dtos/battleground.model';

describe('GameCardDialogComponent', () => {
  let component: GameCardDialogComponent;
  let dialogRef: MatDialogRef<GameCardDialogComponent>;
  let fixture: ComponentFixture<GameCardDialogComponent>;

  beforeEach(async () => {
    const dialogRefMockData = jasmine.createSpyObj('MatDialogRef', ['close']);
    const dataMock: GameDetails = {
      battleground: new Battleground(),
      dateFrom: 0,
      dateUpTo: 10000,
      description: 'mocked description',
      name: 'mocked name',
      maxPlayers: 10
    }
    await TestBed.configureTestingModule({
      declarations: [
        GameCardDialogComponent
      ],
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefMockData },
        { provide: MAT_DIALOG_DATA, useValue: dataMock }
      ]
    })
    .compileComponents();

    dialogRef = TestBed.inject(MatDialogRef);
    fixture = TestBed.createComponent(GameCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
