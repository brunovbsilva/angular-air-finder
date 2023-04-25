import { Component, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent, ScannerQRCodeConfig } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.scss']
})
export class QrcodeReaderComponent {
  output: any;
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

  setOutput(set: any) {
    this.output = set[0].value;
  }

  onError(e: any) {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(alert);
  }
}
