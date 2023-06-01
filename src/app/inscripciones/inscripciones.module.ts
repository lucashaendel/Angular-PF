import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { ListadoInscripcionesComponent } from './listado-inscripciones/listado-inscripciones.component';
import { FormularioInscripcionesComponent } from './formulario-inscripciones/formulario-inscripciones.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InscripcionesComponent,
    ListadoInscripcionesComponent,
    FormularioInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ]
})
export class InscripcionesModule { }
