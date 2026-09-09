import { Component } from '@angular/core';
import { Padre } from '../padre/padre';

@Component({
  imports: [Padre],
  selector: 'app-abuelo',
  styleUrl: './abuelo.css',
  templateUrl: './abuelo.html',
})
export class Abuelo {
  valor = 'Hola, soy el abuelo';
}
