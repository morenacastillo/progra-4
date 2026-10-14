import { Component } from '@angular/core';
import { Padre } from '../padre/padre';
import { model } from '@angular/core';

@Component({
  imports: [Padre],
  selector: 'app-abuelo',
  styleUrl: './abuelo.css',
  templateUrl: './abuelo.html',
})
export class Abuelo {
  valor = 'Hola, soy el abuelo';

  datoModelo = 'hola hola hola hola';

  modificarDato () {
    this.datoModelo = "chau chau chau"
  }
}
