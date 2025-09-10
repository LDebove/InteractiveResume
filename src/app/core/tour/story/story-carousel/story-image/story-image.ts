import { Component, input } from '@angular/core';

@Component({
  selector: 'app-story-image',
  imports: [],
  template: `
    <img [src]="imageSrc()" [alt]="imageSrc()" class="story-image">
  `,
  styles: `
    :host {
      display: contents;
    }

    .story-image {
      max-width: 400px;
      height: 100%;
      display: block;
      cursor: zoom-in;
      object-fit: cover;
    }
  `
})
export class StoryImage {
  readonly imageSrc = input.required<string>();
}
