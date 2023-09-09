import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeGeneratorComponent } from './qrcode-generator.component';
import { QRCodeModule } from 'angularx-qrcode';

describe('QrcodeGeneratorComponent', () => {
  let component: QrcodeGeneratorComponent;
  let fixture: ComponentFixture<QrcodeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QrcodeGeneratorComponent
      ],
      imports: [
        QRCodeModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
