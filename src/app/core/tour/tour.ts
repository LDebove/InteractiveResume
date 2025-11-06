import { Component } from '@angular/core';
import { StoryModule } from './story/story-module';
import { ImageViewer } from './image-viewer/image-viewer';

@Component({
  selector: 'app-tour',
  imports: [StoryModule, ImageViewer],
  templateUrl: './tour.html',
  styleUrl: './tour.scss'
})
export class Tour {

}
