import { FormularioCursosComponent } from './formulario-cursos/formulario-cursos.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'listado', component: ListadoCursosComponent },
  { path: 'formulario', component: FormularioCursosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
