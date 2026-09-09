import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-detalle',
  styleUrl: './detalle.css',
  templateUrl: './detalle.html',
})
export class Detalle implements OnInit {

  // misma lista que items (en un caso real: un servicio). Copiada para practicar rutas.
  items = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 4' },
  ];

  // el item que encontramos segun el id de la URL.
  // signal -> la vista se refresca sola cuando cambia.
  itemEncontrado = signal<{ id: number; name: string } | null>(null);

  // en el constructor SOLO pido el servicio (info de la ruta actual)
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // paramMap es un Observable (como los de clase 3): me suscribo y mi funcion corre cada vez que cambia el id, aunque no salga del componente.
    // (no hace falta unsubscribe: Angular la corta sola cuando el componente muere)
    this.route.paramMap.subscribe(params => {
      const idTexto = params.get('id');   // OJO: lo que viene de la URL es TEXTO -> "2" o null
      if (idTexto === null) return;

      const id = Number(idTexto);          // "2" -> 2 (para comparar con ===). Number() o +idTexto: es lo mismo
      const item = this.items.find(i => i.id === id);

      this.itemEncontrado.set(item ?? null);   // si find no encontro nada -> null
    });
  }
}
