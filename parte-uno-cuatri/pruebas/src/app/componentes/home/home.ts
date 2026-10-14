import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {

  // true si en la URL vino ?dark=true
  modoOscuro = signal(false);

  constructor(private route: ActivatedRoute) { // en el constructor SOLO recibo servicios (inyección de dependencias)
    console.log('1 - constructor');
  }

  ngOnInit() { // acá sí: leer parámetros de la ruta, pedir datos a una API, etc.
    console.log('2 - ngOnInit (ya estoy listo)');

    // queryParamMap = los parámetros del "?..." de la URL. Me suscribo para reaccionar si cambian.
    this.route.queryParamMap.subscribe(params => {
      const dark = params.get('dark');        // OJO: es TEXTO -> "true", "false" o null
      this.modoOscuro.set(dark === 'true');   // solo el string EXACTO "true" activa el modo oscuro
    });
  }
}

/*
constructor = te contrataron y estás parada en la puerta de la oficina. No tenés escritorio ni compu ni sabés en qué proyecto estás. Lo único que pasa: te dan las llaves (los servicios).
ngOnInit = ya tenés escritorio, la compu prendida y te dijeron el proyecto. Ahora sí empezás a trabajar (pedir datos, leer el id de la URL…).
*/
