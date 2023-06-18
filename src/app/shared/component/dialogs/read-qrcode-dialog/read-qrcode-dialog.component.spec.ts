import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQrcodeDialogComponent } from './read-qrcode-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/translate.service.mock';

describe('ReadQrcodeDialogComponent', () => {
  let component: ReadQrcodeDialogComponent;
  let dialogRef: MatDialogRef<ReadQrcodeDialogComponent>;
  let fixture: ComponentFixture<ReadQrcodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ReadQrcodeDialogComponent,
        NgxScannerQrcodeComponent
      ],
      imports: [
        MatDialogModule,
        TranslateModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: jasmine.createSpyObj('MatDialogRef', ['close']) },
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadQrcodeDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancelClick', () => {
    it('should close the dialog', () => {
      component.cancelClick();
      expect(dialogRef.close).toHaveBeenCalled();
    });
  });

  describe('setOutput', () => {
    it('should set the output', () => {
      const setMock = [{value: 'teste'}];
      component.setOutput(setMock);
      expect(dialogRef.close).toHaveBeenCalledWith({ result: JSON.stringify(setMock[0].value)});
    });
  });

  describe('onError', () => {
    it('should set error', () => {
      component.onError('mocked error');
      expect(component).toBeTruthy();
    });
  });
});
