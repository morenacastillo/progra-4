import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiModuloRoutingModule } from './mi-modulo-routing-module';
import { Componente1 } from '../../componentes/componente1/componente1';
import { FormsModule } from '@angular/forms';
import { Componente2 } from '../../componentes/componente2/componente2';

@NgModule({
  declarations: [Componente1, Componente2], // los componentes que pertneecen al modulo van a estar en el array de declarations
  imports: [CommonModule, MiModuloRoutingModule, FormsModule], //imports globales que van a poder usar todos los componentes declarados y todos van a ser parte de mi-modulo
  exports: [Componente1, Componente2] // esots elementos van a estar expuestos a que otros modulos los consuman
})

export class MiModuloModule {

}
