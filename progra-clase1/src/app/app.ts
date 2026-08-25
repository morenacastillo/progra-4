import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponente } from './componentes/mi-componente/mi-componente';
import { NgIf, NgFor } from '@angular/common';

@Component({
  imports: [MiComponente, NgIf, NgFor ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('clase1');

  miPropiedad = signal('valor inicial');
  miTexto: string = 'valor inicial';
  miNumero: number = 0;
  miBool: boolean = true;
  miArray: string[] = ['valor1', 'valor2', 'valor3'];
  miAny: any = '{"clave": "valor"}';
  miDato;

  constructor() {
    this.miDato = "valor inicial";

    setTimeout(() => {
      this.miPropiedad.set('nuevo valor');
      this.miTexto = "nuevo valor"
    }, 1000);

  }

}
