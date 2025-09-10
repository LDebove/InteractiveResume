import { Component } from '@angular/core';
import { StoryCarousel } from "./story-carousel/story-carousel";

@Component({
  selector: 'app-story',
  imports: [StoryCarousel],
  template: `
    <div class="story-container">
      <div class="story">
        <div class="story-header">
          <div class="left">
            <ng-content select="app-story-title"/>
            <ng-content select="app-story-subtitle"/>
          </div>
          <div class="right">
            <ng-content select="app-story-location"/>
            <ng-content select="app-story-date"/>
          </div>
        </div>
        <div class="story-content">
          <app-story-carousel>
            <ng-content select="app-story-image"/>
          </app-story-carousel>
          <div class="description">
            <ng-content select="app-story-project-need"/>
            <ng-content select="app-story-project-outcome"/>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: contents;
    }

    .story-container {
      width: 100vw;
      height: 100vh;
      padding: 5% 10%;
      box-sizing: border-box;
      
      .story {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: hidden;

        .story-header {
          display: flex;
          padding: 0 20px;

          .left {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .right {
            display: flex;
            flex-direction: column;
            align-items: end;
            gap: 5px;
          }
        }

        .story-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 15px;
          overflow-y: hidden;

          .description {
            flex-grow: 1;
            display: flex;
            gap: 20px;
          }
        }
      }
    }
  `
})
export class Story {

}
