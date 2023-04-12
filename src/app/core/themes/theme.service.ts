import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  getTheme() {
    const defaultTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
    return localStorage.getItem('theme') || defaultTheme;
  }

  setTheme(theme: string) {
    this.removeTheme();
    localStorage.setItem('theme', theme);
  }

  removeTheme() {
    localStorage.removeItem('theme');
  }
}
