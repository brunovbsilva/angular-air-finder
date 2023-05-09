import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxScannerQrcodeComponent, ScannerQRCodeConfig } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-read-qrcode-dialog',
  templateUrl: './read-qrcode-dialog.component.html',
  styleUrls: ['./read-qrcode-dialog.component.scss']
})
export class ReadQrcodeDialogComponent implements OnInit, OnDestroy {

  public config: ScannerQRCodeConfig = {
    fps: 1,
    vibrate: 300,
    isBeep: true,
    decode: 'macintosh',
    deviceActive: 1, // Camera 1 active
    constraints: {
      audio: false,
      video: {
        width: window.innerWidth
      }
    } 
  };
  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor (
    public dialogRef: MatDialogRef<ReadQrcodeDialogComponent>
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.action.start();
    }, 1);
  }

  ngOnDestroy(): void {
    this.action.stop();
  }

  cancelClick() {
    this.dialogRef.close();
  }

  setOutput(set: any) {
    this.dialogRef.close({
      result: JSON.stringify(set[0].value)
    });
  }

  onError(e: any) {
    alert(e);
  }

}
