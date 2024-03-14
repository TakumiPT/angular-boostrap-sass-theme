import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private doc: Document) {}

  switchTheme(theme: Themes | string) {
  
    let htmlTag = this.doc.documentElement as HTMLElement;

    if (theme === Themes.Auto) {
      const lightThemeQuery = window.matchMedia('(prefers-color-scheme: light)');
      theme = lightThemeQuery.matches? Themes.Ligh : Themes.Dark      
    }

    htmlTag.setAttribute('data-bs-theme', theme);
    
  }

  get activeTheme () {
    let htmlTag = this.doc.documentElement as HTMLElement;
    return htmlTag?.getAttribute('data-bs-theme');
  }

  isActiveTheme(theme: Themes | string) {
    return this.activeTheme === theme
  }

  
}


export enum Themes {
  Dark = 'dark',
  Ligh = 'light',
  Auto = 'auto',
}
