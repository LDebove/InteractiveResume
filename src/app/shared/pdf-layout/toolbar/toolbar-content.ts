import { AfterViewInit, Directive, inject, TemplateRef } from '@angular/core';
import { ToolbarService } from './toolbar-service';

@Directive({
  selector: '[toolbarContent]'
})
export class ToolbarContent implements AfterViewInit {
  private readonly templateRef = inject(TemplateRef);

  private readonly toolbarService = inject(ToolbarService);

  ngAfterViewInit(): void {
    this.toolbarService.setContent(this.templateRef);
  }
}
