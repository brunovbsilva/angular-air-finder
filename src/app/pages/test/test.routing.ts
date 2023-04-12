import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';
import { QrcodeReaderComponent } from './qrcode-reader/qrcode-reader.component';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Test'
    },
    children: [
      {
        path: 'qrcode-generator',
        data: {
          title: 'QRCode Generator',
        },
        component: QrcodeGeneratorComponent,
      },
      {
        path: 'qrcode-reader',
        data: {
          title: 'QRCode Reader',
        },
        component: QrcodeReaderComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
