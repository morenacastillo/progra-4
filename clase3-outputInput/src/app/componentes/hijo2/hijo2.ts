import { Component, input, OnInit, signal } from '@angular/core';
import { Data } from '../../servicios/data';

@Component({
  imports: [],
  selector: 'app-hijo2',
  styleUrl: './hijo2.css',
  templateUrl: './hijo2.html',
})
export class Hijo2 implements OnInit {
  datoHijo2 = input<string>();
  datoDelAbuelo = signal(0);

  
  constructor(public data: Data) {  }

  ngOnInit() {
    this.data.datosServicios.subscribe(value => {
      console.log(value)
      this.datoDelAbuelo.set(value);
    })
  }

  
}
