import { AfterViewInit, Component, inject } from '@angular/core';
import { StoryModule } from './story/story-module';
import { ImageViewer } from './image-viewer/image-viewer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour',
  imports: [StoryModule, ImageViewer],
  templateUrl: './tour.html',
  styleUrl: './tour.scss'
})
export class Tour implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);

  private readonly ids = [
    "dwarka2",
    "dwarka1",
    "oxyl",
    "bioteos"
  ];

  private currentStoryId: string = this.ids[0];

  ngAfterViewInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const id = params["id"] as string ?? this.ids[0];
        const story = document.getElementById(id);
        if (story) {
          story.scrollIntoView({ behavior: "instant", block: "start" });
        }
      }
    });
  }

  protected scroll(event: Event): void {
    
  }
}
