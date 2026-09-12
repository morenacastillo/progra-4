import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-mi-componente',
  styleUrl: './mi-componente.css',
  templateUrl: './mi-componente.html',
})
export class MiComponente {
  miDato = signal('valor inicial');
  edadUno: number = 0;
  edadDos: number = 0;
  resultado: number = 0;
  promedio: number = 0;

  constructor(){
    console.log('Mi componente constructor')
  }

  cambiarValor(nuevoValor: string){
    this.miDato.set(nuevoValor);
  }

  calcularSuma() {
    this.resultado = this.edadUno + this.edadDos
    console.log(this.resultado)
  }

  calcularPromedio() {
    this.resultado = this.edadUno + this.edadDos
    this.promedio = this.resultado / 2
    console.log(this.promedio)
    }

  limpiar(){
    console.log(`edadUno: ${this.edadUno} y edadDos: ${this.edadDos} limpiados`)
    this.edadUno = 0;
    this.edadDos = 0;
    this.resultado = 0;
    this.promedio = 0;
  }
}


