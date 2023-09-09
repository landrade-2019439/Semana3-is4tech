import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker3',
  templateUrl: './datepicker3.component.html',
  styleUrls: ['./datepicker3.component.scss']
})
export class Datepicker3Component {
  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  years: number[] = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032];

  selectedMonth: string | null = null;
  selectedYear: number | null = null;

  updateDate() {
    if (this.selectedMonth !== null && this.selectedYear !== null) {
      const selectedDate = new Date(this.selectedYear, this.months.indexOf(this.selectedMonth), 1);
    }
  }

  openMonthYearPicker() {
  }
}
