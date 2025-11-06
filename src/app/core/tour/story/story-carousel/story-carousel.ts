import { Component } from '@angular/core';

@Component({
  selector: 'app-story-carousel',
  imports: [],
  template: `
    <div class="carousel">
      <ng-content/>
    </div>
  `,
  styles: `
    :host {
      display: contents;
    }

    .carousel {
      flex-shrink: 0;
      height: 200px;
      display: flex;
      justify-content: safe center;
      gap: 15px;
      overflow-x: auto;
      border-top: 1px solid var(--color-3);
      border-bottom: 1px solid var(--color-3);
      background: linear-gradient(0.25turn, var(--background-color), var(--color-1), var(--background-color));
    }
  `
})
export class StoryCarousel {

}
