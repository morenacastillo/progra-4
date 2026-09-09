import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-componente2',
  styleUrl: './componente2.css',
  templateUrl: './componente2.html',
})
export class Componente2 {

  miPropiedad = signal('valor inicial');

  cambiarValor(nuevoValor: string) {
    this.miPropiedad.set(nuevoValor);
  }
}
