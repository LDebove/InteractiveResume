import { ViewportRuler } from '@angular/cdk/scrolling';
import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[autofit]'
})
export class Autofit implements AfterViewInit {
  private readonly element = inject<ElementRef<HTMLElement>>(
    ElementRef<HTMLElement>
  );

  private readonly viewportRuler = inject(ViewportRuler);

  ngAfterViewInit(): void {
    const viewport = this.viewportRuler.getViewportSize();
    const htmlElement = this.element.nativeElement;
    const height = htmlElement.clientHeight;
    let zoom = 1;
    if (height > viewport.height) {
      zoom = 1 / (height / viewport.height);
      htmlElement.style.zoom = `${zoom * 100}%`;
    }
    const width = htmlElement.clientWidth * zoom;
    if (width > viewport.width) {
      zoom = 1 / (htmlElement.clientWidth / viewport.width);
      htmlElement.style.zoom = `${zoom * 100}%`;
    }
  }

}
