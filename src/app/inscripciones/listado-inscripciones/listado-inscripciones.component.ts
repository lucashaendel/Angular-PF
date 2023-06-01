import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudiante } from 'src/app/core/modelos/estudiante';

@Component({
  selector: 'app-listado-inscripciones',
  templateUrl: './listado-inscripciones.component.html',
  styleUrls: ['./listado-inscripciones.component.scss']
})
export class ListadoInscripcionesComponent implements OnInit {

  @Input() encabezadosABM!: string[]
  @Input() arrAlumnos!: Estudiante[]

  @Output() alumnoParaAgregarCurso = new EventEmitter<Estudiante>();

  constructor() { }

  ngOnInit(): void {
  }

  irAgregarCurso(alumno: Estudiante){
    this.alumnoParaAgregarCurso.next(alumno)
  }

}
