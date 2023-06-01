import { Estudiante } from './../core/modelos/estudiante';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import listaDeEstudiantes from './../../assets/listadoDeEstudiantes.json';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  studentList: Estudiante[] = listaDeEstudiantes.estudiantes

  root_url='https://62acf594402135c7acbb1d8a.mockapi.io/api/v1/users/'
  userDetailed!: Estudiante;
  configurationOptions={
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  } 

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Estudiante[]>{
    return of(this.studentList)
  }

  private handleError(error: HttpErrorResponse){
    if(error){
      console.warn(`Error de backend tipo ${error.status} con el mensaje de ${error.message}`)
    }
    return throwError('Error de comunicacion http');
  }

  getUsersList(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.root_url)
    .pipe(catchError(this.handleError));
  }

  getSingleUser(id:number): Observable<Estudiante>{
    return this.http.get<Estudiante>(this.root_url + id)
  }

  createUser(user:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(this.root_url, user, this.configurationOptions);
  }

  updateUser(user: Estudiante):Observable<Estudiante>{
    return this.http.put<Estudiante>(this.root_url + user.id, user)
  }

  deleteUser(user: Estudiante):Observable<Estudiante>{
    return this.http.delete<Estudiante>(this.root_url +user.id );
  }
}
