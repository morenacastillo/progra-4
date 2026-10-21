import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {

    constructor() {
        console.log("usuarios service inicializado")
    }

    getAll(): string {
        return 'todos los usuarios desde USUARIOS'
    }

    getById(id: string): string {
        return `usuario con ID: ${id}`
    }

    create(createUsuarioDto: any): string {
        console.log(createUsuarioDto)
        return 'usuario creado'
    }

    update(id: string, updateUsuarioDto: any): string {
        console.log(updateUsuarioDto)
        return `usuario con ID: ${id} actualizado`
    }

    delete(id: string): string {
        return `usuario con ID: ${id} eliminado`
    }

    

}
