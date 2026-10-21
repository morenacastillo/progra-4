import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller.js';
import { UsuariosService } from './usuarios.service.js';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService] // para que otro modulo pueda usar este modulo, hay que disponibilizarlo en el export
})
export class UsuariosModule {}
