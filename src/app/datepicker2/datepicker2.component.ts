import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker2',
  templateUrl: './datepicker2.component.html',
  styleUrls: ['./datepicker2.component.scss']
})
export class Datepicker2Component {
  fechaControl = new FormControl();

  minDate = new Date(2023, 0, 1);
  maxDate = new Date();
}
