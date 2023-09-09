import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formulario', loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule) },
  { path: 'parametro', loadChildren: () => import('./parametros/parametros.module').then(m => m.ParametrosModule) },
  { path: 'componente-a', loadChildren: () => import('./componente-a/componente-a.module').then(m => m.ComponenteAModule) },
  { path: 'componente-b', loadChildren: () => import('./componente-b/componente-b.module').then(m => m.ComponenteBModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
