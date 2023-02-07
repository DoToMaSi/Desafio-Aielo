import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
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

  @ViewChild('input') input: HTMLInputElement;

  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() formControlName = '';
  @Input() formControl = new FormControl();

  @Output() blurEvent = new EventEmitter();
  @Output() focusEvent = new EventEmitter();
  @Output() changeEvent = new EventEmitter();
  @Output() keyupEvent = new EventEmitter();
  @Output() keydownEvent = new EventEmitter();

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
