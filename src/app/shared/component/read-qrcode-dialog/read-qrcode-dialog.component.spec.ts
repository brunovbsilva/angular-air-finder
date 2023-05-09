import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQrcodeDialogComponent } from './read-qrcode-dialog.component';

describe('ReadQrcodeDialogComponent', () => {
  let component: ReadQrcodeDialogComponent;
  let fixture: ComponentFixture<ReadQrcodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadQrcodeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadQrcodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
