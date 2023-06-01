import { Estudiante } from './../../core/modelos/estudiante';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.scss']
})
export class FormularioAlumnosComponent implements OnChanges{

  @Output() alumnoAgregado = new EventEmitter<Estudiante>(); 
  @Input() estudianteAActualizar!: Estudiante; 

  estaCreando: boolean = false;
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.estaCreando = false;

    this.createForm = this.fb.group({
      nombre:['', Validators.required],
      dni:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tienePermisoAdmin: ['', [Validators.required]],
      inscripciones:  [[]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.studentToEdit){
      this.createForm.get('nombre')?.patchValue(this.estudianteAActualizar.nombre);
      this.createForm.get('dni')?.patchValue(this.estudianteAActualizar.dni);
      this.createForm.get('email')?.patchValue(this.estudianteAActualizar.email);
      this.createForm.get('tienePermisoAdmin')?.patchValue(this.estudianteAActualizar.tienePermisoAdmin);
    }

  }
  

  onSubmit(): void {
    this.estaCreando = true;
    if(!this.estudianteAActualizar){
      this.alumnoAgregado.emit(this.createForm.value)
    }else{
      this.createForm.value['id']=this.estudianteAActualizar.id
      let vendedorEdited=this.createForm.value;
      this.alumnoAgregado.emit(vendedorEdited)
    }
    setTimeout(() => {
      this.createForm.reset()
      this.estaCreando = false;
    }, 1000);
  }

}
