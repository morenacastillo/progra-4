import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('clase1');

  miPropiedad = signal('valor inicial');
  miTexto: string = 'valor inicial';
  miNumero: number = 0;
  miBool: boolean = false;
  miArray: string[] = ['valor1', 'valor2', 'valor3'];
  
}
