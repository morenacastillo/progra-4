import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service.js';
import { AlumnosController } from './alumnos.controller.js';
import { UsuariosModule } from '../usuarios/usuarios.module.js';

@Module({
  controllers: [AlumnosController],
  providers: [AlumnosService],
  imports: [UsuariosModule],
  
})
export class AlumnosModule {

}
