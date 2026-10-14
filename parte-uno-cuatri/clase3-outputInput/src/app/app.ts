import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Padre } from './componentes/padre/padre';
import { Abuelo } from './componentes/abuelo/abuelo';
import { ListaUsuarios } from './componentes/lista-usuarios/lista-usuarios';

@Component({
  imports: [RouterOutlet, Padre, Abuelo, ListaUsuarios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('clase3-outputInput');
}
