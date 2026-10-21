import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AlumnoDocument = HydratedDocument<Alumno>
//alumno document "interfaz" de alumno

@Schema()
export class Alumno {
    @Prop({required: true})
    nombre: string;

    @Prop({default: 'sin apellido'})
    apellido: string;

    @Prop({ required: [true, 'La edad es obligatoria']})
    edad: number;
}

export const AlumnoSchema = SchemaFactory.createForClass(Alumno);
//creamos el schema con los atributos nombre apellido y edad


