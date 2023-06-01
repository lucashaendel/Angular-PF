import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estudiante } from '../core/modelos/estudiante';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {


  studentAEditar!: Estudiante

  constructor() { }

  getAlumnoAEditar(): Observable<Estudiante>{
    return of(this.studentAEditar)
  }
}
