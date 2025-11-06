import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Image } from '../tour.models';

@Injectable({
  providedIn: 'root'
})
export class ImageViewerService {
  private image$ = new Subject<Image | undefined>();

  getImage(): Observable<Image | undefined> {
    return this.image$.asObservable();
  }

  setImage(src: string, label: string): void {
    this.image$.next({
      src: src,
      label: label
    });
  }

  close(): void {
    this.image$.next(undefined);
  }
}
