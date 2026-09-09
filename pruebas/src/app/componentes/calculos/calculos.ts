import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculos',
  styleUrl: './calculos.css',
  templateUrl: './calculos.html',
})
export class Calculos {

  edadUno: number = 0;
  edadDos: number = 0;
  resultado: number = 0;
  promedio: number = 0;

  suma() {
    this.resultado = this.edadUno + this.edadDos
    console.log(this.resultado)
  }

  promediar() {
    this.resultado = this.edadUno + this.edadDos 
    this.promedio = this.resultado / 2
    console.log(this.promedio)
  }

  limpiar() {
    this.edadUno = 0
    this.edadDos = 0
    this.resultado = 0
    this.promedio = 0
  }
  
}
