import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { ngIfSlideInAnimation } from 'src/app/shared/utils/animations/ngif-slidein.animation';

@Component({
  selector: 'ac-input-cpf',
  templateUrl: './ac-input-cpf.component.html',
  styleUrls: ['./ac-input-cpf.component.scss'],
  animations: [
    ngIfSlideInAnimation('200ms', 'top')
  ],
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

  @Input() label = 'CPF';
  @Input() placeholder = '000.000.000-00';

  @Input() maxlength = '15';
  @Input() minlength = '';

  @Input() formControlName = '';
  @Input() formControl = new FormControl();

  @Output() blurEvent = new EventEmitter();
  @Output() focusEvent = new EventEmitter();
  @Output() changeEvent = new EventEmitter();
  @Output() keyupEvent = new EventEmitter();
  @Output() keydownEvent = new EventEmitter();

  cpfMask = createMask({
    placeholder: '_',
    showMaskOnHover: false,
    mask: '999.999.999-99'
  })

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

  writeValue() {
    return;
  }

  registerOnChange(): void {
    return;
  }

  registerOnTouched(): void {
    return;
  }
}
