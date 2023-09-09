import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  valor: string = 'Escribe algo';

  onValorChange() {
    console.log(this.valor);
  }
}
