import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuarioIngresado: string = "";
  passwordIngresado: string = "";
  
  usuarioCorrecto: string = "morecastillo"
  passwordCorrecto: string = "123456"

  intentoAprobado: boolean = false

  login() {
  if (this.usuarioIngresado == this.usuarioCorrecto &&
      this.passwordIngresado == this.passwordCorrecto) {
    console.log("bienvenido")
    this.intentoAprobado = true
  } else {
    console.log("error")
    this.intentoAprobado = false
  }
}
}

