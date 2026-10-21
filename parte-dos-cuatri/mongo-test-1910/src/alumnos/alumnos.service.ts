import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto.js';
import { UpdateAlumnoDto } from './dto/update-alumno.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Error as MongooseError } from 'mongoose';
import { AlumnoDocument } from './entities/alumno.entity.js';
import { error } from 'console';



@Injectable()
export class AlumnosService {

  constructor(@InjectModel('Alumno') private readonly alumnoModel: Model<AlumnoDocument>) {}

  async create(createAlumnoDto: CreateAlumnoDto) {
    try {
      return await this.alumnoModel.create(createAlumnoDto);
    } catch (error) {
      if (error instanceof MongooseError.ValidationError) {
        throw new BadRequestException(
          Object.values(error.errors).map((error) => error.message),
        );
      }

      throw error;
    }
  }

  async findAll() {
    return this.alumnoModel.find().exec();
  }

  async findOne(id: string) {
    return this.alumnoModel.findById(id).exec();
  }

  async update(id: string, updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnoModel.findByIdAndUpdate(id, updateAlumnoDto, {new: true}).exec();
  }

  async remove(id: string) {
    return this.alumnoModel.findByIdAndDelete(id).exec();
  }
}
