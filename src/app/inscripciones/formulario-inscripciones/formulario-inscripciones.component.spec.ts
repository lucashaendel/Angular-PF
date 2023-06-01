import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInscripcionesComponent } from './formulario-inscripciones.component';

describe('FormularioInscripcionesComponent', () => {
  let component: FormularioInscripcionesComponent;
  let fixture: ComponentFixture<FormularioInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInscripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
