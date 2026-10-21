import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService { // en el servicio esta toda la parte logica.
                          // se encarga de MANEJAR la peticion http que le pasa el controlador y devolversela
  getHello(): string {
    return 'Hello World!';
  }

  getDetalle(): string {
    return 'detalle';
  }

  getAll(): string {
    return 'todos los usuarios';
  }

  create(): string {
    return 'usuario creado'
  }
}
