import { AlumnosService } from './../alumnos/alumnos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Estudiante } from '../core/modelos/estudiante';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  arrAlumnos: Estudiante[] = []
  subscriptions!:Subscription;

  form!: FormGroup;
  isLoggedIn!: boolean;
  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private snackBar: MatSnackBar,
              private alumnosServices: AlumnosService) {
  }

  ngOnInit(): void {
    this.getUsers()
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getUsers(){
    this.subscriptions=new Subscription();
    this.subscriptions.add(this.alumnosServices.getStudents().subscribe(alumnos => this.arrAlumnos=alumnos))
  }

  logIn() {
    if (!this.form.valid) {
      return
    } 
    const name = this.form.value.name;
    const password = this.form.value.password;

    this.arrAlumnos.forEach((alum)=>{
        if (alum.nombre==name && alum.dni==password){
            this.isLoggedIn=true;
            sessionStorage.setItem('usuario', alum.nombre);
            sessionStorage.setItem('permisoAdm', alum.tienePermisoAdmin)
        }
    })
    if(this.isLoggedIn){
      this.router.navigate(['personal']);
      setTimeout(() => {
        location.reload();
      }, 2000);
      
    }else{
      this.isLoggedIn=false;
        this.snackBar.open(`Error: No existe el usuario ingresado`, 'close')
    }
   
  
  }

}
