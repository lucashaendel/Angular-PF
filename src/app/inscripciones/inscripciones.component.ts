import { InscripcionesService } from './inscripciones.service';
import { Estudiante } from './../core/modelos/estudiante';
import { AlumnosService } from './../alumnos/alumnos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit, OnDestroy {

  subscriptions!:Subscription;
  arrAlumnos: Estudiante[] = []
  encabezadosABM: string[] = ["id", "nombre","dni", "actions"]

  

  constructor(private inscripcionesService: InscripcionesService, 
              private alumnosServices: AlumnosService) { }

  ngOnInit(): void {
    this.obtenerAlumnos()
  }

  obtenerAlumnos(){
    this.subscriptions=new Subscription();
    this.subscriptions.add(this.alumnosServices.getUsersList().subscribe(alumnos => this.arrAlumnos=alumnos))
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

  alumnoParaAgregarCurso(e: any){
      this.inscripcionesService.studentAEditar = e;
  }

}
