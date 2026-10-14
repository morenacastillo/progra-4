import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class Data {
    datosServicios = new BehaviorSubject<number>(0);

    incrementar() {
        this.datosServicios.next(this.datosServicios.value + 1);
    }
}
