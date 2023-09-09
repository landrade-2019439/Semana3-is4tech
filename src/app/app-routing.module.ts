import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Datepicker1Component } from './datepicker1/datepicker1.component';
import { Datepicker2Component } from './datepicker2/datepicker2.component';
import { Datepicker3Component } from './datepicker3/datepicker3.component';
import { Datepicker4Component } from './datepicker4/datepicker4.component';
import { BotonComponent } from './button/boton.component';
import { TableComponent } from './table/table.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {
    path: 'datepicker-1', component: Datepicker1Component
  },
  {
    path: 'datepicker-2', component: Datepicker2Component
  },
  {
    path: 'datepicker-3', component: Datepicker3Component
  },
  {
    path: 'datepicker-4', component: Datepicker4Component
  },
  {
    path: 'boton', component: BotonComponent
  },
  {
    path: 'tabla', component: TableComponent
  },
  {
    path: 'stepper', component: StepperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
