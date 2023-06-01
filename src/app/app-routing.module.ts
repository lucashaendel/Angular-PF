import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule), canActivate:[AuthGuard] }, 
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule), canActivate:[AuthGuard] }, 
  { path: 'inscripciones',loadChildren: () => import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule) , canActivate:[AuthGuard]},
  { path: 'personal',loadChildren: () => import('./informacion-personal/informacion-personal.module').then(m => m.InformacionPersonalModule), canActivate:[AuthGuard] },
  { path: '**', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
