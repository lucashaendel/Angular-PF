
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Curso } from '../core/modelos/curso';
import listaDeCursos from './../../assets/listadoDeCursos.json';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursoList: Curso[] = listaDeCursos.courses

  root_url='https://62acf594402135c7acbb1d8a.mockapi.io/api/v1/cursos/'
  userDetailed!: Curso;
  configurationOptions={
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  } 

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]>{
    return of(this.cursoList)
  }

  private handleError(error: HttpErrorResponse){
    if(error){
      console.warn(`Error de backend tipo ${error.status} con el mensaje de ${error.message}`)
    }
    return throwError('Error de comunicacion http');
  }

  getCourseList(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.root_url)
    .pipe(catchError(this.handleError));
  }

  getSingleCourse(id:number): Observable<Curso>{
    return this.http.get<Curso>(this.root_url + id)
  }

  createCourse(course:Curso):Observable<Curso>{
    return this.http.post<Curso>(this.root_url, course, this.configurationOptions);
  }

  updateCourse(course: Curso):Observable<Curso>{
    return this.http.put<Curso>(this.root_url + course.id, course)
  }

  deleteCourse(course: Curso):Observable<Curso>{
    return this.http.delete<Curso>(this.root_url +course.id );
  }
}
