import { Component } from '@angular/core';

@Component({
  selector: 'app-story-title',
  imports: [],
  template: `
    <span class="title"><ng-content/></span>
  `,
  styles: `
    .title {
      font-size: large;
      font-weight: bold;
    }
  `
})
export class StoryTitle {

}
