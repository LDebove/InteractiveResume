import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story } from './story';
import { StoryDate } from './story-date/story-date';
import { StoryLocation } from './story-location/story-location';
import { StoryTitle } from './story-title/story-title';
import { StorySubtitle } from './story-subtitle/story-subtitle';
import { StoryImage } from './story-carousel/story-image/story-image';
import { StoryProjectNeed } from './story-project-need/story-project-need';
import { StoryProjectOutcome } from './story-project-outcome/story-project-outcome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Story,
    StoryDate,
    StoryLocation,
    StoryTitle,
    StorySubtitle,
    StoryImage,
    StoryProjectNeed,
    StoryProjectOutcome
  ],
  exports: [
    Story,
    StoryDate,
    StoryLocation,
    StoryTitle,
    StorySubtitle,
    StoryImage,
    StoryProjectNeed,
    StoryProjectOutcome
  ]
})
export class StoryModule { }
