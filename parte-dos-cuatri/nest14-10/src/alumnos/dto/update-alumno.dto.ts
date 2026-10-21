import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoDto } from './create-alumno.dto.js';

export class UpdateAlumnoDto extends PartialType(CreateAlumnoDto) {} //convierte todos los cambios de la entidad ALUMNO en opcionales en caso de que se updatee solo 1 valor
