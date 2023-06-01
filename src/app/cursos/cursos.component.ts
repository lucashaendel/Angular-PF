import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Curso } from '../core/modelos/curso';
import { Store } from '@ngrx/store';
import { addCurso, loadCursos, loadedCursos, updateCurso } from '../state/cursos/cursos.actions';
import { selectLoading } from '../state/cursos/cursos.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  arrCursos: Curso[] = []
  encabezados: string[] =  ["id", "nombre", "categoria", "fecha","clases"]
  encabezadosABM: string[] = ["id", "nombre", "categoria", "fecha","clases", "actions"]
  subscriptions!:Subscription;
  cursoAActualizar!: Curso

  loading$: Observable<boolean> = new Observable();
  
  constructor(private cursosServices: CursosService, private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
      this.store.dispatch(loadCursos())
      this.loading$ = this.store.select(selectLoading)
      this.obtenerCursos()
  }

  obtenerCursos(){
      this.subscriptions=new Subscription();
      this.subscriptions.add(this.cursosServices.getCourseList().subscribe(cursos => {
        this.arrCursos=cursos
        this.store.dispatch(loadedCursos({cursos: cursos}))
      }))
  }

  agregarCurso(e: any){
    let cursoEncontrado = false;
    this.arrCursos.find((al) => {
      if (al.id == e.id){
        cursoEncontrado=true
      } 
    })
    if (!cursoEncontrado){
      this.store.dispatch(addCurso(e))
      /*this.cursosServices.createCourse(e).subscribe(
        ()=>{
          this.obtenerCursos();
        }
      )*/
    }
    else{
      this.store.dispatch(updateCurso(e))
      /*this.cursosServices.updateCourse(e).subscribe(
        ()=>{
          this.obtenerCursos();
        }
      )*/
    }
    setTimeout(() => {
      location.reload()
    }, 2000);
  }

  cursoAEditar(e:Curso){
    this.cursoAActualizar=e;
  }

  cursoAEliminar(e:Curso){
    this.cursosServices.deleteCourse(e).subscribe(
      ()=>{
        this.obtenerCursos();
      }
    )
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

}
