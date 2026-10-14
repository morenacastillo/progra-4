import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-componente1',
  styleUrl: './componente1.css',
  templateUrl: './componente1.html',
})
export class Componente1 {
  miTexto: string = 'miTexto desde componente1';
  miNumero: number = 0;       // number, no int/float/double
  miBool: boolean = true;
  miArray: string[] = ['a','b'];
  miAny: any = '{}';          // "cualquier cosa": desactiva el chequeo
  miImplicito = 'texto';      // TS infiere que es string

}
