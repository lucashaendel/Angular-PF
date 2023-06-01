import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  nombre: string | null =""
  permiso: string | null =""

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.nombre = sessionStorage.getItem('usuario');
    this.permiso = sessionStorage.getItem('permisoAdm');
  }

  navigateTo(urlNavigate: string){
      this.router.navigate([urlNavigate])
  }

  logout(){
    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('permisoAdm')
    this.router.navigate(['/login'])
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

}
