import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestRoutingModule } from './test.routing';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';
import { QrcodeReaderComponent } from './qrcode-reader/qrcode-reader.component';
<<<<<<< Updated upstream
=======
import { QRCodeModule } from 'angularx-qrcode';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    QrcodeGeneratorComponent,
    QrcodeReaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
<<<<<<< Updated upstream
    TestRoutingModule
=======
    TestRoutingModule,
    QRCodeModule,
    NgxScannerQrcodeModule
>>>>>>> Stashed changes
  ]
})
export class TestModule {}
