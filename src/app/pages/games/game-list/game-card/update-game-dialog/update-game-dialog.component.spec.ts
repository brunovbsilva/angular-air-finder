import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateGameDialogComponent } from './update-game-dialog.component';

describe('UpdateGameDialogComponent', () => {
  let component: UpdateGameDialogComponent;
  let fixture: ComponentFixture<UpdateGameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGameDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
