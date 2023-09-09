import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsComponent } from './credentials.component';
import { KeysPipe } from 'src/app/shared/pipe/keys.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/outer/translate.service.mock';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CredentialsForm } from './credentials.form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CredentialsComponent', () => {
  let component: CredentialsComponent;
  let fixture: ComponentFixture<CredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CredentialsComponent,
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

    fixture = TestBed.createComponent(CredentialsComponent);
    component = fixture.componentInstance;
    component.credentials = new CredentialsForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
