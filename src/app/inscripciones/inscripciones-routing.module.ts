import { FormularioInscripcionesComponent } from './formulario-inscripciones/formulario-inscripciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './inscripciones.component';
import { ListadoInscripcionesComponent } from './listado-inscripciones/listado-inscripciones.component';

const routes: Routes = [
  { path: '', component: InscripcionesComponent },
  { path: 'listado', component: ListadoInscripcionesComponent },
  { path: 'formulario', component: FormularioInscripcionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
