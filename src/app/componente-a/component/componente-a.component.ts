import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  template: `
    <h1>Componente A</h1>
    <button (click)="redirigirAComponenteB()">Ir a Componente B</button>
  `,
})
export class ComponenteAComponent implements OnDestroy {
  constructor(private router: Router) {}

  redirigirAComponenteB() {
    console.log('Antes de redirigir a Componente B');

    this.router.navigate(['/componente-b']);
  }

  ngOnDestroy() {
    console.log('Componente A se está destruyendo');
  }
}
