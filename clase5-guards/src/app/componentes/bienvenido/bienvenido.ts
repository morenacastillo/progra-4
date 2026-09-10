import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../servicios/auth';

@Component({
  imports: [RouterModule],
  selector: 'app-bienvenido',
  styleUrl: './bienvenido.css',
  templateUrl: './bienvenido.html',
})
export class Bienvenido {

  constructor(private auth:Auth, private router:Router ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login'])
  }

}
