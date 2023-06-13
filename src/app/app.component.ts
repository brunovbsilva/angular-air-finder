import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './core/themes/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    translate: TranslateService,
    private themeService: ThemeService
  )
  {
    translate.setDefaultLang('en-US');
    translate.use(window.navigator.language);
  }

  ngAfterViewInit(): void {
    this.themeService.updateTheme();
  }
}
