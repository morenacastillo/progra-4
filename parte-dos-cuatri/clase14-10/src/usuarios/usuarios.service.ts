import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {

    constructor() {
        console.log('usuariosservice inicializado')
    }

    getAll(): string {
        return 'todos los usuarios'
    }

    getById(id: string): string {
        return `usuario con id ${id}}`
    }

    create(createUsuarioDto: any): string {
        return `usuario creado ${createUsuarioDto}`
    }

    update(id: string, updateUsuarioDto: any): string {
        return `Usuario con ${id} actualizado`
    }

    delete(id: string): string {
        return `Usuario con ${id} eliminado`
    }

}
