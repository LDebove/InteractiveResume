import { Component } from '@angular/core';
import { StoryModule } from './story/story-module';

@Component({
  selector: 'app-tour',
  imports: [StoryModule],
  templateUrl: './tour.html',
  styleUrl: './tour.scss'
})
export class Tour {

}
