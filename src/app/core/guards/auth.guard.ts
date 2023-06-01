import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (sessionStorage.getItem('usuario')==null) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
  
}
