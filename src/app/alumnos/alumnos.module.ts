import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { FormularioAlumnosComponent } from './formulario-alumnos/formulario-alumnos.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AlumnosComponent,
    ListadoAlumnosComponent,
    FormularioAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AlumnosModule { }
