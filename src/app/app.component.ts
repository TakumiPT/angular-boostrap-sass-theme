import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService, Themes } from './shared/theme.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbNavModule, NgbDropdownModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public theme: ThemeService) {
    this.theme.switchTheme(Themes.Auto);
  }

  get activeTheme() {
    const theme = this.theme.activeTheme;

    switch (theme) {
      case Themes.Auto:
        return '#circle-half';
      case Themes.Ligh:
        return '#circle-half';
      case Themes.Dark:
        return '#moon-stars-fill';
      default:
        return '';
    }
  }
}
