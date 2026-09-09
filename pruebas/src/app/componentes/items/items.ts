import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-items',
  styleUrl: './items.css',
  templateUrl: './items.html',
})
export class Items {

  // lista fija para practicar. En un caso real vendría de un servicio (clase 3).
  items = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 4' },
  ];
}
