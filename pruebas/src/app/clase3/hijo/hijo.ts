import { Component } from '@angular/core';
import { input } from '@angular/core';
import { output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {
  dataSignal = input<string>();   
  datoDesdeHijo = output<string>();

  emitirDato() {
    this.datoDesdeHijo.emit("dato desde el hijo");
  }
}
