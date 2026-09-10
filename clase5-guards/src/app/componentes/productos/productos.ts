import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  imports: [RouterModule, NgFor],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {

  productos = signal([ {
    nombre: 'Producto 1',
    id: 1
  }])
}
