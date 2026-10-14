import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { User } from '../modelos/user';

@Service()
export class Http {
    http = inject(HttpClient); // injectar servicios FUERA del contexto de angular

    get(url: string) {
        return this.http.get<User[]>(url); //peticion http a una conexion
    }
}
