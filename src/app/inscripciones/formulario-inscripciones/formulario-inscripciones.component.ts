import { AlumnosService } from './../../alumnos/alumnos.service';
import { Curso } from './../../core/modelos/curso';
import { Estudiante } from './../../core/modelos/estudiante';
import { InscripcionesService } from './../inscripciones.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/cursos/cursos.service';

@Component({
  selector: 'app-formulario-inscripciones',
  templateUrl: './formulario-inscripciones.component.html',
  styleUrls: ['./formulario-inscripciones.component.scss']
})
export class FormularioInscripcionesComponent implements OnInit, OnDestroy {

  subscriptions!:Subscription;
  alumno!: Estudiante
  arrCursos!: Curso[]

  constructor(private inscripcionesService: InscripcionesService,
              private cursosServices: CursosService,
              private alumnosServices: AlumnosService) { }

  ngOnInit(): void {
    this.obtenerAlumnoAEditar()
    this.obtenerCursos()
  }

  obtenerAlumnoAEditar(){
    this.subscriptions=new Subscription();
    this.subscriptions.add(this.inscripcionesService.getAlumnoAEditar().subscribe(alumnoData => this.alumno=alumnoData))
  }

  obtenerCursos(){
    this.subscriptions=new Subscription();
    this.subscriptions.add(this.cursosServices.getCourseList().subscribe(cursos => this.arrCursos=cursos))
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

  agregar(curso: any){
      if(!this.alumno.inscripciones.includes(curso))
      this.alumno.inscripciones.push(curso)
      this.alumnosServices.updateUser(this.alumno).subscribe(
        ()=>{
          
      })
  }

  quitar(curso: any){
    this.alumno.inscripciones= this.alumno.inscripciones.filter(curs => curs!=curso)
    this.alumnosServices.updateUser(this.alumno).subscribe(
      ()=>{
        
    })
  }

}
