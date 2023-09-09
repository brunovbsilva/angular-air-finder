import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestRoutingModule } from './test.routing';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  declarations: [
    QrcodeGeneratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestRoutingModule,
    QRCodeModule,
    NgxScannerQrcodeModule
  ]
})
export class TestModule {}
