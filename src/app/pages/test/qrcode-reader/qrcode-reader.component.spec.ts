import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeReaderComponent } from './qrcode-reader.component';

describe('QrcodeReaderComponent', () => {
  let component: QrcodeReaderComponent;
  let fixture: ComponentFixture<QrcodeReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
