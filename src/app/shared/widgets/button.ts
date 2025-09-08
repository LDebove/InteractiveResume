import { Component, input, output } from '@angular/core';

@Component({
  selector: 'c-button',
  imports: [],
  template: `
    <button (click)="click.emit()" class="button">
      {{label()}}
    </button>
  `,
  styles: `
    :host {
      display: contents;
    }

    .button {
      display: block;
      color: var(--font-color-inverted);
      border: 2px solid var(--font-color-inverted);
      background-color: inherit;
      border-radius: 5px;
      font-weight: bold;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  `
})
export class Button {
  readonly label = input<string>("Button");
  readonly click = output<void>();
}
