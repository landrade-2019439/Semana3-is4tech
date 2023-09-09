import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './component/componente-a.component';

const routes : Routes = [
  { path: '', component: ComponenteAComponent }
];

@NgModule({
  declarations: [ComponenteAComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponenteAModule { }
