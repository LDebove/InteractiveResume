import { Component, inject, input, Input, signal } from '@angular/core';
import { PrivateData } from '../../../models/cover.models';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  readonly print = input(false);
  readonly private = input(false);
  readonly privateData = input<PrivateData>();

  private readonly authService = inject(AuthService);

  protected readonly authenticated = signal(false);

  constructor() {
    this.authService.isAuthenticated().subscribe({
      next: (authenticated) => {
        this.authenticated.set(authenticated);
      }
    });
  }
}
