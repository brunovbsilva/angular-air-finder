import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  getTheme() {
    const defaultTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
    return localStorage.getItem('theme') || defaultTheme;
  }

  setTheme(theme: string) {
    this.removeTheme();
    localStorage.setItem('theme', theme);
    this.updateTheme();
  }

  removeTheme() {
    this.document.body.classList.remove(this.getTheme());
    localStorage.removeItem('theme');
  }

  updateTheme() {
    this.document.body.classList.add(this.getTheme());
  }
}
