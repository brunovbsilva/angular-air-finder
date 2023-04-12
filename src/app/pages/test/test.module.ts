import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestRoutingModule } from './test.routing';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';
import { QrcodeReaderComponent } from './qrcode-reader/qrcode-reader.component';

@NgModule({
  declarations: [
    QrcodeGeneratorComponent,
    QrcodeReaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestRoutingModule
  ]
})
export class TestModule {}
