import { AfterViewInit, Component, forwardRef, input, model, output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'c-input',
  imports: [ReactiveFormsModule],
  template: `
    <div class="group">
      <input
        [formControl]="input"
        required
        [type]="type()"
        class="input"
        (keydown.enter)="submit.emit(value())"
      >
      <label class="label">{{label()}}</label>
    </div>
  `,
  styles: `
    :host {
      display: contents;
    }

    .group {
      padding-top: 10px;
      color: var(--font-color-inverted);
    }

    .input {
      border: solid 1.5px var(--color-2);
      border-radius: 5px;
      background: none;
      padding: 10px;
      color: inherit;
      box-sizing: border-box;
      transition: border 150ms;
    }

    .label {
      position: absolute;
      left: 15px;
      color: inherit;
      pointer-events: none;
      transform: translateY(50%);
      transition: 150ms;
    }

    .input:focus, input:valid {
      outline: none;
      border: 1.5px solid var(--color-1);
    }

    .input:focus ~ label, input:valid ~ label {
      transform: translateY(-50%) scale(0.8);
      background-color: var(--color-4);
      padding: 0 .2em;
      color: var(--color-1);
    }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Input),
      multi: true
    }
  ]
})
export class Input implements ControlValueAccessor, AfterViewInit {
  readonly label = input.required<string>();
  readonly type = input<"text" | "password">("text");
  readonly value = model<string>("");
  readonly submit = output<string>();

  protected readonly input = new FormControl("");

  protected _onTouched = () => {};

  constructor() {
    this.input.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          this.value.set(value);
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.input.setValue(this.value());
  }

  writeValue(obj: any): void {
    this.input.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.input.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.input.disable() : this.input.enable();
  }
}
