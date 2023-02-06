import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ac-input',
  templateUrl: './ac-input.component.html',
  styleUrls: ['./ac-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AcInputComponent),
    },
  ]
})

export class AcInputComponent implements OnInit, ControlValueAccessor {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() formControlName = '';
  @Input() formControl = new FormControl();

  constructor(
    private formGroupDir: FormGroupDirective
  ) { }

  ngOnInit() {
    if (this.formControlName) {
      this.formControl = this.formGroupDir.control.get(this.formControlName) as FormControl;
    }
  }

  writeValue(obj: unknown) {
    console.log('writeValue:', obj);
  }

  registerOnChange(fn: unknown): void {
    console.log('registerOnChange:', fn);
  }

  registerOnTouched(fn: unknown): void {
    console.log('registerOnTouched:', fn);
  }
}
