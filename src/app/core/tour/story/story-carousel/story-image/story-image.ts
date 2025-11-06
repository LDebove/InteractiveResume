import { Component, inject, input } from '@angular/core';
import { ImageViewerService } from '../../../image-viewer/image-viewer-service';

@Component({
  selector: 'app-story-image',
  imports: [],
  template: `
    <img
      [src]="imageSrc()"
      [alt]="label()"
      (click)="expand()"
      class="story-image"
    >
  `,
  styles: `
    :host {
      display: contents;
    }

    .story-image {
      min-width: 250px;
      max-width: 400px;
      height: 100%;
      display: block;
      cursor: zoom-in;
      object-fit: scale-down;
    }
  `
})
export class StoryImage {
  readonly imageSrc = input.required<string>();
  readonly label = input.required<string>();

  private readonly imageViewerService = inject(ImageViewerService);

  protected expand(): void {
    if (!this.imageSrc() || !this.label()) {
      return;
    }

    this.imageViewerService.setImage(this.imageSrc(), this.label());
  }
}
