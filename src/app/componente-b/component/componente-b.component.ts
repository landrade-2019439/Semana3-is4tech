import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-componente-b',
  template: `
    <h1>Componente B</h1>
    <p>Este es el componente B.</p>
  `,
})
export class ComponenteBComponent implements OnDestroy {
  constructor() {}

  ngOnDestroy() {
    console.log('Componente B se está destruyendo');
  }
}
