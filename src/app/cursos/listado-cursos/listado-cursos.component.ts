import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/modelos/curso';
import { AppState } from 'src/app/state/app.state';
import { deleteCurso, updateCurso } from 'src/app/state/cursos/cursos.actions';
import { selectListaCursos } from 'src/app/state/cursos/cursos.selectors';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.scss']
})
export class ListadoCursosComponent implements OnInit {

  @Input() encabezados!: string[]
  @Input() arrCursos!: Curso[]

  @Output() cursoParaEliminar = new EventEmitter<Curso>();
  @Output() cursoParaEditar = new EventEmitter<Curso>(); 

  cursos$: Observable<any> = new Observable()

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectListaCursos)
  }

  deleteCursos(curso: Curso){
    this.store.dispatch(deleteCurso(curso))
    setTimeout(() => {
      location.reload()
    }, 1000);
    //this.cursoParaEliminar.next(curso)
}

  editCurso(curso: Curso){
    this.cursoParaEditar.next(curso)
}

}
