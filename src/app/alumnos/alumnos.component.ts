import { Estudiante } from './../core/modelos/estudiante';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlumnosService } from './alumnos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit, OnDestroy {

  arrAlumnos: Estudiante[] = []
  encabezados: string[] = ["id", "nombre","dni", "email", "tienePermisoAdmin"]
  encabezadosABM: string[] = ["id", "nombre","dni", "email", "tienePermisoAdmin", "actions"]
  subscriptions!:Subscription;
  estudianteAActualizar!: Estudiante
  
  constructor(private alumnosServices: AlumnosService) { }

  ngOnInit(): void {
      this.obtenerAlumnos()
  }

  obtenerAlumnos(){
      this.subscriptions=new Subscription();
      this.subscriptions.add(this.alumnosServices.getUsersList().subscribe(alumnos => this.arrAlumnos=alumnos))
  }

  agregarAlumno(e: any){
    let alumnoEncontrado = false;
    this.arrAlumnos.find((al) => {
      if (al.dni == e.dni){
        alumnoEncontrado=true
      } 
    })
    if (!alumnoEncontrado){
      this.alumnosServices.createUser(e).subscribe(
        ()=>{
          this.obtenerAlumnos();
        }
      )
    }
    else{
      this.alumnosServices.updateUser(e).subscribe(
        ()=>{
          this.obtenerAlumnos();
        }
      )
    }
  }

  alumnoAEditar(e:Estudiante){
    this.estudianteAActualizar=e;
    
  }

  alumnoAEliminar(e:Estudiante){
    this.alumnosServices.deleteUser(e).subscribe(
      ()=>{
        this.obtenerAlumnos();
      }
    )
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

}
