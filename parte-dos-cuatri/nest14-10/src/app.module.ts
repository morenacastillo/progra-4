import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { AlumnosModule } from './alumnos/alumnos.module.js';

@Module({
  imports: [UsuariosModule, AlumnosModule],
  controllers: [AppController], // los controladores reciben y envian peticiones http, edependiendo que se pida, deriva a un servicio para resolverlo
  providers: [AppService],
})
export class AppModule {}
