import { AfterViewInit, Component, forwardRef, input, model, output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'c-checkbox',
  imports: [ReactiveFormsModule],
  template: `
    <label class="label">
      <input [formControl]="checkbox" type="checkbox" class="checkbox">
      {{label()}}
    </label>
  `,
  styles: `
    :host {
      display: contents;
    }

    .checkbox {
      appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 5px;
      background-color: transparent;
      display: inline-block;
      position: relative;
      margin-right: 10px;
      cursor: pointer;
    }

    .checkbox:before {
      content: "";
      background-color: #fff;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 10px;
      height: 10px;
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
    }

    .checkbox:checked:before {
      transform: translate(-50%, -50%) scale(1);
    }

    .label {
      color: #fff;
      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;
      text-wrap: nowrap;
    }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Checkbox),
      multi: true
    }
  ]
})
export class Checkbox implements ControlValueAccessor, AfterViewInit {
  readonly label = input.required<string>();
  readonly checked = model<boolean>(false);
  readonly toggled = output<boolean>();

  protected readonly checkbox = new FormControl(false);

  protected _onTouched = () => {};

  constructor () {
    this.checkbox.valueChanges.subscribe({
      next: (value) => {
        if (value !== null) {
          this.checked.set(value);
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.checkbox.setValue(this.checked());
  }

  writeValue(obj: any): void {
    this.checkbox.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.checkbox.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.checkbox.disable() : this.checkbox.enable();
  }
}
