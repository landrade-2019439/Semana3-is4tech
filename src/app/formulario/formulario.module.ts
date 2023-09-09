import { NgModule } from '@angular/core';
import { FormularioComponent } from './component/formulario.component';
import { RouterModule, Routes } from '@angular/router';
import SharedModule from '../shared.module';

const routes : Routes = [
  { path: '', component: FormularioComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [FormularioComponent],
  exports: [RouterModule]
})
export class FormularioModule { }
