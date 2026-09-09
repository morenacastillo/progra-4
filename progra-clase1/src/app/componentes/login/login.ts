import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//@Component({...}) es un decorador: una función que "envuelve" la clase y le agrega metadatos. Todos los decoradores llevan @ y sirven para insertar metadata en las clases. 
@Component({
  //Un componente standalone (independiente) en Angular es un componente que no necesita estar declarado en ningún NgModule para funcionar.
  imports: [FormsModule], // debe ser declarado aca todo lo que vayamos a usar, si no no compila
  selector: 'app-login', //es el nombre del tag que usare en el html para mostrar este componente <app-login></app-login>
  styleUrl: './login.css', // ubicacion del css de este componente
  templateUrl: './login.html', // ubicacion del html de este componente
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

