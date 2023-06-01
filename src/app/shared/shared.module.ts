import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloDirective } from './directivas/titulo.directive';
import { FullNamePipe } from './pipes/full-name.pipe';



@NgModule({
  declarations: [
    TituloDirective,
    FullNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
