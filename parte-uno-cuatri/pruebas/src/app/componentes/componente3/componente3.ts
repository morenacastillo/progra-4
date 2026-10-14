import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-componente3',
  styleUrl: './componente3.css',
  templateUrl: './componente3.html',
})
export class Componente3 {

  inputNombre: string = "hola"

  mostrarInput(inputNombre: string) {
    
    console.log(inputNombre)
  }
}
