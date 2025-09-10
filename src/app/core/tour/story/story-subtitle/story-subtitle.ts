import { Component } from '@angular/core';

@Component({
  selector: 'app-story-subtitle',
  imports: [],
  template: `
    <span class="subtitle"><ng-content/></span>
  `,
  styles: `
    .subtitle {
      font-weight: 500;
      color: var(--color-3);
    }
  `
})
export class StorySubtitle {

}
