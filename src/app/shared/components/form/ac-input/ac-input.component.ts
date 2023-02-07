import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ngIfSlideInAnimation } from 'src/app/shared/utils/animations/ngif-slidein.animation';

@Component({
  selector: 'ac-input',
  templateUrl: './ac-input.component.html',
  styleUrls: ['./ac-input.component.scss'],
  animations: [
    ngIfSlideInAnimation('200ms', 'top')
  ],
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
      this.formControl.valueChanges.subscribe({
        next: (value) => {
          console.log(value);
          console.log(this.formControl.errors);
        }
      })
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
