import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionPersonalComponent } from './informacion-personal.component';

const routes: Routes = [{ path: '', component: InformacionPersonalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionPersonalRoutingModule { }
