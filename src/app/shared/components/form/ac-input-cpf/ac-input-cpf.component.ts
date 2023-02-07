import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ac-input-cpf',
  templateUrl: './ac-input-cpf.component.html',
  styleUrls: ['./ac-input-cpf.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AcInputCpfComponent),
    },
  ]
})

export class AcInputCpfComponent implements OnInit, ControlValueAccessor {

  @ViewChild('input') input: HTMLInputElement;

  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';

  @Input() max: number;
  @Input() maxlength = '';
  @Input() min: number;
  @Input() minlength = '';

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

  focus() {
    this.input?.focus();
  }

  writeValue(obj: unknown) {
    return;
  }

  registerOnChange(): void {
    return;
  }

  registerOnTouched(fn: unknown): void {
    return;
  }
}
