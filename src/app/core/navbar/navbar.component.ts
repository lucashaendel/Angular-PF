import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nombreUsuario: string =""
  nombreUrl: any

  constructor(private router: Router,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombreUsuario = sessionStorage.getItem('usuario') || "";
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
  )
      .subscribe(event => {
          this.nombreUrl = event.url;
      });
  }

}
