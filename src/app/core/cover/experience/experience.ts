import { Component, input, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  readonly ref = input<string>();

  constructor(private router: Router) { }

  open(): void {
    if (!this.ref()) {
      return;
    }

    this.router.navigate([this.ref()]);
  }
}
