import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordComponent } from './update-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/outer/translate.service.mock';
import { MatIconModule } from '@angular/material/icon';
import { KeysPipe } from 'src/app/shared/pipe/keys.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePasswordForm } from './update-password.form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UpdatePasswordComponent', () => {
  let component: UpdatePasswordComponent;
  let fixture: ComponentFixture<UpdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UpdatePasswordComponent,
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

    fixture = TestBed.createComponent(UpdatePasswordComponent);
    component = fixture.componentInstance;
    component.updatePassword = new UpdatePasswordForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
