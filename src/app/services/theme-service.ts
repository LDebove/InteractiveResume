import { Injectable } from '@angular/core';
import { Theme } from '../models/theme.models';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    this.autoApplyTheme();
  }

  private autoApplyTheme(): void {
    const theme = localStorage.getItem("theme") ?? Theme.LIGHT;
    this.applyTheme(theme as Theme);
  }

  applyTheme(theme: Theme): void {
    switch (theme) {
    case Theme.LIGHT:
      document.documentElement.className = "light";
    }

    localStorage.setItem("theme", theme);
  }
}
