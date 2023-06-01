import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlumnosComponent } from './formulario-alumnos.component';

describe('FormularioAlumnosComponent', () => {
  let component: FormularioAlumnosComponent;
  let fixture: ComponentFixture<FormularioAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
