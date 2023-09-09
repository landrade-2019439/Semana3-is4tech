import { Component, Input, OnInit } from '@angular/core';

@Component({

  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit {
  @Input() parametroInicial: string = 'Hola';
  parametroActualizado: string = '';

  ngOnInit() {
    this.parametroActualizado = this.parametroInicial;

    setTimeout(() => {
      this.parametroActualizado = 'Nuevo valor';
    }, 30000);
  }
}
