import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
