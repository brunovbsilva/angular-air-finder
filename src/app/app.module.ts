import { NgModule, isDevMode, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginModule } from './pages/login/login.module';
import { AppConfigService } from './app-config.service';
import { HttpInterceptorsProviders } from './core/security/interceptor';
import { MaterialProviders } from './material/providers';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { GamesModule } from './pages/games/games.module';
import { NgxMaskModule } from 'ngx-mask';
import { ProfileComponent } from './pages/profile/profile.component';

registerLocaleData(localePt);

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export const configFactory = (configService: AppConfigService) => {
  return () => configService.loadAppConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    LoginModule,
    MaterialModule,
    SharedModule,
    GamesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxMaskModule.forRoot({ validation: false }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  exports: [
    MaterialModule,
    SharedModule,
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'pt'
    },
    MaterialProviders,
    HttpInterceptorsProviders,
    AppConfigService,
    {
      provide   : APP_INITIALIZER,
      useFactory: configFactory,
      deps      : [AppConfigService],
      multi     : true
    },
    DatePipe,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }