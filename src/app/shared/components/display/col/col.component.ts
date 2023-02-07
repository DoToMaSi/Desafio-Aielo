import { Component, Input } from '@angular/core';

@Component({
  selector: 'row-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})

export class ColComponent {
  @Input() xs = 12;
  @Input() sm = 12;
  @Input() md = 12;
  @Input() lg = 12;
  @Input() xl = 12;
}
