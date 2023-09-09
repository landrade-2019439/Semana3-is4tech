import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'Edad'];
  dataSource = new MatTableDataSource<any>([]);
  nombreFilter = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  datos = [
    { Id: 1, Nombre: 'Juan', Edad: 25 },
    { Id: 2, Nombre: 'María', Edad: 30 },
    { Id: 3, Nombre: 'Luis', Edad: 20 },
    { Id: 4, Nombre: 'Carlos', Edad: 10 },
    { Id: 5, Nombre: 'Germán', Edad: 5 },
    { Id: 6, Nombre: 'Pablo', Edad: 12 },
    { Id: 7, Nombre: 'David', Edad: 14 },
    { Id: 8, Nombre: 'Rafael', Edad: 17 },
    { Id: 9, Nombre: 'Julio', Edad: 25 },
    { Id: 10, Nombre: 'Madeline', Edad: 28 },
    { Id: 11, Nombre: 'Adrián', Edad: 50 },
    { Id: 12, Nombre: 'Diego', Edad: 42 },
  ];

  constructor() {
    this.dataSource.data = this.datos;
  }

  applyFilter() {
    this.dataSource.filter = this.nombreFilter.trim().toLowerCase();
  }
}
