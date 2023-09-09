import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Datepicker1Component } from './datepicker1/datepicker1.component';
import { Datepicker2Component } from './datepicker2/datepicker2.component';
import { Datepicker3Component } from './datepicker3/datepicker3.component';
import { Datepicker4Component } from './datepicker4/datepicker4.component';
import { BotonComponent } from './button/boton.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TableComponent } from './table/table.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StepperComponent } from './stepper/stepper.component';



@NgModule({
  declarations: [
    AppComponent,
    Datepicker1Component,
    Datepicker2Component,
    Datepicker3Component,
    Datepicker4Component,
    BotonComponent,
    TableComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
