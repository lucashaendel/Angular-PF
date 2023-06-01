import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlumnosService } from './alumnos.service';

describe('AlumnosService', () => {
  let service:AlumnosService;
  let mockResponseLit=[
      {
        nombre:'Nicolas',
        dni: '35150343',
        email:'luis@coder.com',
        inscripciones:[], 
        id:5,
        tienePermisoAdmin:'true'
      }
  ]
  let httpController: HttpTestingController;
  let url='https://62acf594402135c7acbb1d8a.mockapi.io/api/v1/users/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
  })
  service= TestBed.inject(AlumnosService);
  httpController= TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberiamos obtener getUserList', () => {
    service.getUsersList().subscribe((res)=>{
      expect(res).toEqual(mockResponseLit)
    })
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`
    })
    req.flush(mockResponseLit)
  });

  it('Deberiamos eliminar User', () => {
    service.deleteUser(mockResponseLit[0]).subscribe((res)=>{
      expect(res).toEqual(mockResponseLit[0])
    })
    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${url}${mockResponseLit[0].id}`
    })
    req.flush(mockResponseLit[0])
  });

});
