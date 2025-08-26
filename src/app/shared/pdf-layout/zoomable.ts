import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[zoomable]'
})
export class Zoomable {
  private readonly element = inject<ElementRef<HTMLElement>>(
    ElementRef<HTMLElement>
  );

  private zoom?: number;
  private factor = 1;

  constructor() {
    document.addEventListener(
      "wheel",
      (e) => {
        if (e.ctrlKey) {
          e.preventDefault()
        }
      },
      {passive: false}
    );
  }

  @HostListener("document:wheel", ["$event"])
  onWheel(event: WheelEvent): void {
    if (!event.ctrlKey) {
      return;
    }

    const htmlElement = this.element.nativeElement;

    if (this.zoom === undefined) {
      this.zoom = Number(htmlElement.style.zoom.slice(0, -1));
    }

    this.factor += event.deltaY < 0 ? 0.1 : -0.1;
    this.factor = this.factor < 0.1 ? 0.1 : this.factor;
    if (this.factor > 0.1) {
      htmlElement.style.zoom = `${this.zoom * this.factor}%`;
    }
  }

}
