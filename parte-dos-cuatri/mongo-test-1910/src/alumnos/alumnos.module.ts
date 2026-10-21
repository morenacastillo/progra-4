import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service.js';
import { AlumnosController } from './alumnos.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnoSchema } from './entities/alumno.entity.js';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Alumno', schema: AlumnoSchema}])],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
