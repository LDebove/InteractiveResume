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
      min-width: 450px;
      flex: 1 0;
      display: flex;
      flex-direction: column;
      gap: 5px;

      .title {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }

      .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: justify;
        gap: 15px;
        padding: 15px 0;
      }
    }
  `
})
export class StoryProjectNeed {

}
