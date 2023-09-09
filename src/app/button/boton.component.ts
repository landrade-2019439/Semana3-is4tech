import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  isDialogVisible: boolean = false;
  name: string = '';
  result: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    this.isDialogVisible = true;
  }

  closeDialog() {
    this.isDialogVisible = false;
    this.name = '';
  }

  onSubmit() {
    if (this.name.trim() !== '') {
      this.result = `Nombre ingresado: ${this.name}`;
      this.name = '';
    } else {
      alert('Ingresa un nombre');
    }
  }
}
