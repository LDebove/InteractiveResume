import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  generate(): void {
    const element = document.getElementById("pdf");
    if (!element) {
      return;
    }
    const previousZoom = element.style.zoom;
    element.style.zoom = "100%";
    window.print();
    element.style.zoom = previousZoom;
  }
}
