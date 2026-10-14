import { Component, Input, signal } from '@angular/core';
import { Hijo } from '../hijo/hijo';
import { FormsModule } from '@angular/forms';
import { Hijo2 } from '../hijo2/hijo2';

@Component({
  imports: [Hijo, FormsModule, Hijo2],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})

export class Padre {
  valor = ""
  datoDelHijoSignal: string = ""
  datoDelHijo: string = ""
  modeloDelHijo = signal("");

  cambiarValor() {
    this.valor="nuevo valor"
  }

  recibirDato(dato: string) {
    console.log(dato) 
    this.datoDelHijo = dato;  
  }

  recibirDatoSignal(dato: string) {
    console.log(dato)
    this.datoDelHijoSignal = dato;
    this.valor = dato;
  }


}
