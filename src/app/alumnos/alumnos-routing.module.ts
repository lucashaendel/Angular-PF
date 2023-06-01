import { FormularioAlumnosComponent } from './formulario-alumnos/formulario-alumnos.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';

const routes: Routes = [
  { path: '', component: AlumnosComponent },
  { path: 'listado', component: ListadoAlumnosComponent },
  { path: 'formulario', component: FormularioAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
