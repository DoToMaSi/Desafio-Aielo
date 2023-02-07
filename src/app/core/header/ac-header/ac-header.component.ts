import { Component } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'ac-header',
  templateUrl: './ac-header.component.html',
  styleUrls: ['./ac-header.component.scss']
})

export class AcHeaderComponent {

  constructor(public headerService: HeaderService) { }
}
