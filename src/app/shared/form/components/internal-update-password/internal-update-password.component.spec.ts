import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalUpdatePasswordComponent } from './internal-update-password.component';
import { KeysPipe } from 'src/app/shared/pipe/keys.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import TranslateServiceMock from 'src/app/core/mock/translate.service.mock';
import { InternalUpdatePasswordForm } from './internal-update-password.form';

describe('InternalUpdatePasswordComponent', () => {
  let component: InternalUpdatePasswordComponent;
  let fixture: ComponentFixture<InternalUpdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        InternalUpdatePasswordComponent,
        KeysPipe
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        TranslateModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalUpdatePasswordComponent);
    component = fixture.componentInstance;
    component.updatePassword = new InternalUpdatePasswordForm()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
