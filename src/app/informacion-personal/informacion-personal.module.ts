import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionPersonalRoutingModule } from './informacion-personal-routing.module';
import { InformacionPersonalComponent } from './informacion-personal.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FormularioActualizacionComponent } from './formulario-actualizacion/formulario-actualizacion.component';


@NgModule({
  declarations: [
    InformacionPersonalComponent,
    FormularioActualizacionComponent
  ],
  imports: [
    CommonModule,
    InformacionPersonalRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class InformacionPersonalModule { }
