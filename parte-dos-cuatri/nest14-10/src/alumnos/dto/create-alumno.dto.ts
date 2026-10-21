import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateAlumnoDto {
    @IsString( {message: 'el nombre debe ser string'} )
    nombre: string;

    @IsString( {message: 'el apellido debe ser string'} )
    apellido: string;

    @IsNumber({}, {message: 'la edad debe ser un numero'} )
    edad: number
}
