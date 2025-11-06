import { Component } from '@angular/core';

@Component({
  selector: 'app-story-project-outcome',
  imports: [],
  template: `
    <div class="outcome">
      <span class="title">Outcome</span>
      <span class="content">
        <ng-content/>
      </span>
    </div>
  `,
  styles: `
    :host {
      display: contents;
    }

    .outcome {
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
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: justify;
        gap: 15px;
      }

    }
  `
})
export class StoryProjectOutcome {

}
