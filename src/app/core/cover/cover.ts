import { Component, inject, signal } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { SectionModule } from '../section/section-module';
import { ExperienceModule } from '../experience/experience-module';
import { PrivateData } from '../../models/cover.models';
import { Router } from '@angular/router';
import { ToolbarContent } from '../../shared/pdf-layout/toolbar/toolbar-content';
import { Checkbox } from "../../shared/widgets/checkbox";
import { AuthService } from '../../services/auth-service';
import { Input } from "../../shared/widgets/input";
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-cover',
  imports: [
    Sidebar,
    SectionModule,
    ExperienceModule,
    ToolbarContent,
    Checkbox,
    Input
],
  templateUrl: './cover.html',
  styleUrl: './cover.scss'
})
export class Cover {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly apiService = inject(ApiService);

  protected readonly print = signal(false);
  protected readonly private = signal(false);
  protected readonly authenticated = signal(false);
  protected readonly privateData = signal<PrivateData | undefined>(undefined);

  constructor() {
    this.authService.isAuthenticated().subscribe({
      next: (authenticated) => {
        this.authenticated.set(authenticated);
      }
    });
  }

  protected takeATour(): void {
    this.router.navigate([""]);
  }

  protected login(password: string): void {
    this.authService.login(password).subscribe({
      next: (authenticated) => {
        this.authenticated.set(authenticated);
      }
    });
  }

  protected logout(): void {
    this.authService.logout().subscribe();
  }

  protected togglePrivateData(show: boolean): void {
    this.private.set(show);
    if (!show || this.privateData()) {
      return;
    }
    this.apiService.getPrivateData().subscribe({
      next: (data) => {
        this.privateData.set(data);
      }
    });
  }
}
