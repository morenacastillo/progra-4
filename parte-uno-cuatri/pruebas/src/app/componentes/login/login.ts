import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  // Lo que el usuario va escribiendo en los inputs (se actualiza solo gracias a [(ngModel)])
  usernameRegistrado: string = ""
  passwordRegistrado: string = ""

  usernameCorrecto: string= "morecastillo"
  passwordCorrecto: string= "1234"

  constructor(private router: Router) {}


  mostrarDatos() {
    console.log("Usuario:", this.usernameRegistrado)
    console.log("Password:", this.passwordRegistrado)
  }
  login() {
    if(this.usernameRegistrado === this.usernameCorrecto && 
      this.passwordRegistrado === this.passwordCorrecto) {
        this.router.navigate(['/home']);
    } else {
      console.log("no registrado")
    }
  }
}
