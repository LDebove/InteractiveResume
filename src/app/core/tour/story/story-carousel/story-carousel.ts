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
      justify-content: center;
      gap: 5px;
      overflow-x: auto;
    }
  `
})
export class StoryCarousel {

}
