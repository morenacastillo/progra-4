import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('usuariosPrueba') //controlador es parte del link: localhost:3000/usuarios
                        //si mi aplicacion llama a controllers usuarios, va a caer aca y caer a la peticion que corresponda
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // el decorador indica a que metodo http va a entrar: GET POST DELETE, etc
         // aca entra en localhost:300/usuarios
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('detalle') // controlador (usuarios) / servicio (detalle) = localhost:3000/usuarios/detalle
  getDetalle(): string {
    return this.appService.getDetalle()
  }

  @Get('all') // controlador (usuarios) / servicio (all) = localhost:3000/usuarios/all
  getUsuarios(): string {
    return this.appService.getAll()
  }

  @Post('create')
  create(): string {
    return this.appService.create()
  }


}
