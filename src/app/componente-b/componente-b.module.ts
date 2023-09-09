import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteBComponent } from './component/componente-b.component';

const routes : Routes = [
  { path: '', component: ComponenteBComponent }
];

@NgModule({
  declarations: [ComponenteBComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponenteBModule { }
