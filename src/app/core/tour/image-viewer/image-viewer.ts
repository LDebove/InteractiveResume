import { Component, inject, signal } from '@angular/core';
import { ImageViewerService } from './image-viewer-service';
import { Image } from '../tour.models';

@Component({
  selector: 'app-image-viewer',
  imports: [],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.scss'
})
export class ImageViewer {
  private readonly imageViewerService = inject(ImageViewerService);

  protected readonly image = signal<Image | undefined>(undefined);

  constructor() {
    this.imageViewerService.getImage().subscribe({
      next: (image) => {
        this.image.set(image);
      }
    });
  }

  protected close(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.image.set(undefined);
    }
  }
}
