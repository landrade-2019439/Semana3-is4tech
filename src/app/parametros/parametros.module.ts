import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrosComponent } from './component/parametros.component';

const routes : Routes = [
  { path: '', component: ParametrosComponent }
];

@NgModule({
  declarations: [ParametrosComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ParametrosModule { }
