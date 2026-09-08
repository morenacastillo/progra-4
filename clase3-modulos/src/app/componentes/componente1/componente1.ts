import { Component } from '@angular/core';

@Component({
  standalone: false, // lo trae por defecto Component que indica que el componente no depende de otra cosa para instanciarse
  selector: 'app-componente1',
  styleUrl: './componente1.css',
  templateUrl: './componente1.html',
})

export class Componente1 {}
