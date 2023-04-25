import { NgModule, isDevMode, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LayoutModule } from './layout/layout.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { LoginModule } from './login/login.module';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from './shared/form/form-helpers/custom-state-matcher';
import { AppConfigService } from './app-config.service';

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export const configFactory = (configService: AppConfigService) => {
  return () => configService.loadAppConfig();
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    LoginModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'pt' 
    },
    { 
      provide: ErrorStateMatcher,
      useClass: CustomErrorStateMatcher
    },
    AppConfigService,
    {
      provide   : APP_INITIALIZER,
      useFactory: configFactory,
      deps      : [AppConfigService],
      multi     : true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }