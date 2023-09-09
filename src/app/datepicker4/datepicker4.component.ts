import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-datepicker4',
  templateUrl: './datepicker4.component.html',
  styleUrls: ['./datepicker4.component.scss'],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'MMM DD, YYYY',
        },
        display: {
          dateInput: 'MMM DD, YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
  ],
})
export class Datepicker4Component {
  fechaControl = new FormControl();
}
