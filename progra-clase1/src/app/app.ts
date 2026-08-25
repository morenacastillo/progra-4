import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponente } from './componentes/mi-componente/mi-componente';
import { Login } from './componentes/login/login'
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [MiComponente, NgIf, NgFor, FormsModule, Login ],
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
  edadUno: number = 0;
  edadDos: number = 0;
  

  constructor() {
    this.miDato = "valor inicial";

    setTimeout(() => {
      this.miPropiedad.set('nuevo valor');
      this.miTexto = "nuevo valor"
    }, 1000);
  }


}
