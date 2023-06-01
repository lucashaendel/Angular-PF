import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { FormularioCursosComponent } from './formulario-cursos/formulario-cursos.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    CursosComponent,
    ListadoCursosComponent,
    FormularioCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class CursosModule { }
