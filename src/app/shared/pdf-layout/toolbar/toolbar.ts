import { Component, inject, output, signal, TemplateRef } from '@angular/core';
import { ToolbarService } from './toolbar-service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [NgTemplateOutlet],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  readonly printVersionToggled = output<boolean>();
  readonly privateVersionToggled = output<boolean>();

  private readonly toolbarService = inject(ToolbarService);

  protected readonly expanded = signal(false);

  protected content?: TemplateRef<any>;

  constructor() {
    this.toolbarService.getContent().subscribe({
      next: (template) => {
        this.content = template;
      }
    });
  }
}
