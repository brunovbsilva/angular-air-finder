
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { ThemeService } from '../core/themes/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.document.body, 'class', this.themeService.getTheme());
  }
}
