import { Component, input } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {
  dataSignal = input<string>();

  datoParaHijo: string = "hola hijo, soy el padre"
  datoRecibidoDelHijo: string = ''

  recibirDatoSignal(dato: string) {
    this.datoRecibidoDelHijo = dato ;

  }
}
