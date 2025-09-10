import { Component } from '@angular/core';

@Component({
  selector: 'app-story-project-need',
  imports: [],
  template: `
    <div class="need">
      <span class="title">Need</span>
      <span class="content">
        <ng-content/>
      </span>
    </div>
  `,
  styles: `
    :host {
      display: contents;
    }

    .need {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 5px;

      .title {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }

      .content {
        display: flex;
        flex-direction: column;
        text-align: justify;
        gap: 15px;
      }
    }
  `
})
export class StoryProjectNeed {

}
