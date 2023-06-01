import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosService } from './alumnos.service';
import { of } from "rxjs"

describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;
  let alumnosServices: AlumnosService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosComponent ],
      imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers:[
      AlumnosService
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    alumnosServices=TestBed.inject(AlumnosService);
    spyOn(alumnosServices, "getUsersList").and.returnValue(
      of(
        [
          {
            nombre:'Luis',
            dni: '35150343',
            email:'luis@coder.com',
            inscripciones:[], 
            id:5,
            tienePermisoAdmin:'true'
          }
        ]
      )
    )
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia llenar la propiedad de userlist cuando haya sido inicializado', () => {
    expect(component.arrAlumnos.length>0).toBeTruthy()
  });

  it('Deberia llamar al metodo deleteAlumno al momento de ejecutarlo', () => {
    let user={
      nombre:'Luis',
      dni: '35150343',
      email:'luis@coder.com',
      inscripciones:[], 
      id:5,
      tienePermisoAdmin:'true'
    }
    const updateSpy = spyOn(alumnosServices,'deleteUser').and.returnValue(
      of({
            nombre:'Nicolas',
            dni: '35150343',
            email:'luis@coder.com',
            inscripciones:[], 
            id:5,
            tienePermisoAdmin:'true'
          }
      )
    )
    component.alumnoAEliminar(user)
    expect(updateSpy).toHaveBeenCalled()
  });

  it('Deberia llamar al metodo updateAlumno al momento de ejecutarlo', () => {
    let user={
      nombre:'Luis',
      dni: '35150343',
      email:'luis@coder.com',
      inscripciones:[], 
      id:5,
      tienePermisoAdmin:'true'
    }
    const updateSpy = spyOn(alumnosServices,'updateUser').and.returnValue(
      of({
            nombre:'Nicolas',
            dni: '35150343',
            email:'luis@coder.com',
            inscripciones:[], 
            id:5,
            tienePermisoAdmin:'true'
          }
      )
    )
    component.agregarAlumno(user)
    expect(updateSpy).toHaveBeenCalled()
  });

  

});
