import { Directive, ElementRef, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Money input: shows `12,500.00` when not focused and the plain number while editing.
 * The form control holds a number (or null when empty); unreadable text becomes NaN so the
 * amount validators reject it.
 */
@Directive({
  selector: 'input[appAmountInput]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AmountInputDirective),
      multi: true,
    },
  ],
  host: {
    inputmode: 'decimal',
    autocomplete: 'off',
    '(input)': 'onInput()',
    '(focus)': 'showRaw()',
    '(blur)': 'onBlur()',
  },
})
export class AmountInputDirective implements ControlValueAccessor {
  private readonly input = inject<ElementRef<HTMLInputElement>>(ElementRef).nativeElement;
  private value: number | null = null;
  private onChange: (value: number | null) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  writeValue(value: number | null): void {
    this.value = value ?? null;
    if (this.input.ownerDocument.activeElement === this.input) {
      this.showRaw();
    } else {
      this.showFormatted();
    }
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.input.disabled = disabled;
  }

  protected onInput(): void {
    const raw = this.input.value.replace(/,/g, '').trim();
    this.value = raw === '' ? null : Number(raw);
    this.onChange(this.value);
  }

  protected showRaw(): void {
    this.input.value =
      this.value === null || Number.isNaN(this.value) ? this.input.value : String(this.value);
  }

  protected onBlur(): void {
    this.showFormatted();
    this.onTouched();
  }

  private showFormatted(): void {
    if (this.value === null) {
      this.input.value = '';
    } else if (!Number.isNaN(this.value)) {
      this.input.value = this.value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }
}
