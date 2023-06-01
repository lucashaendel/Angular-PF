import { Curso } from './../../core/modelos/curso';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario-cursos',
  templateUrl: './formulario-cursos.component.html',
  styleUrls: ['./formulario-cursos.component.scss']
})
export class FormularioCursosComponent implements OnChanges {

  @Output() cursoAgregado = new EventEmitter<Curso>(); 
  @Input() cursoAActualizar!: Curso; 

  estaCreando: boolean = false;
  createForm!: FormGroup;
  esEditable: boolean = true

  constructor(private fb: FormBuilder) {
    this.estaCreando = false;

    this.createForm = this.fb.group({
      nombre:['', Validators.required],
      fecha:['', Validators.required],
      categoria: ['', Validators.required],
      clases: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.studentToEdit){
      this.createForm.get('nombre')?.patchValue(this.cursoAActualizar.nombre);
      this.createForm.get('fecha')?.patchValue(this.cursoAActualizar.fecha);
      this.createForm.get('categoria')?.patchValue(this.cursoAActualizar.categoria);
      this.createForm.get('clases')?.patchValue(this.cursoAActualizar.clases);
    }
  }
  
  onSubmit(): void {
    this.estaCreando = true;
    if(!this.cursoAActualizar){
      this.cursoAgregado.emit(this.createForm.value)
    }else{
      this.createForm.value['id']=this.cursoAActualizar.id
      let vendedorEdited=this.createForm.value;
      this.cursoAgregado.emit(vendedorEdited)
    }
    setTimeout(() => {
      this.createForm.reset()
      this.estaCreando = false;
    }, 1000);
  }

}
