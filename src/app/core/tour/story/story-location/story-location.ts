import { Component } from '@angular/core';

@Component({
  selector: 'app-story-location',
  imports: [],
  template: `
    <span class="location"><ng-content/></span>
  `,
  styles: `
    .location {
      color: var(--color-3);
      font-weight: 500;
    }
  `
})
export class StoryLocation {

}
