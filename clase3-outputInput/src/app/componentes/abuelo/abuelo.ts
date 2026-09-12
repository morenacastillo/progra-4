import { Component, signal, OnInit, input } from '@angular/core';
import { Padre } from '../padre/padre';
import { Data } from '../../servicios/data';
import { Hijo2 } from '../hijo2/hijo2';

@Component({
  imports: [Padre, Hijo2],
  selector: 'app-abuelo',
  styleUrl: './abuelo.css',
  templateUrl: './abuelo.html',
})
export class Abuelo implements OnInit {
  datoAbuelo = signal(0)
  miDato = input<number>();

  constructor(private data: Data) {}

  ngOnInit()  {
  }

  sumar() {
    this.data.incrementar()
  }
}
