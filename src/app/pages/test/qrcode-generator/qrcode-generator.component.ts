import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QRCodeForm } from './form/qrcode.form';

@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrls: ['./qrcode-generator.component.scss']
})
export class QrcodeGeneratorComponent {
  form = new QRCodeForm();
  data: any;

  constructor(private fb: FormBuilder) { }

  submit() {
    if(!this.form.valid) return;
    this.data = this.form.getValues();
  }
}
