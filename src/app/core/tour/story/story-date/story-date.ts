import { Component } from '@angular/core';

@Component({
  selector: 'app-story-date',
  imports: [],
  template: `
    <span class="date"><ng-content/></span>
  `,
  styles: `
    .date {
      color: var(--color-3);
      font-weight: 500;
      font-style: italic;
    }
  `
})
export class StoryDate {

}
