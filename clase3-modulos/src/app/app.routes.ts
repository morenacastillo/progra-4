import { Routes } from '@angular/router';
import { Componente1 } from './componentes/componente1/componente1';

export const routes: Routes = [
    {
        path: 'modulo',
        loadChildren: () => import('./modulos/mi-modulo/mi-modulo-module').then(m => m.MiModuloModule)
    },
    {
        path: 'componente3',
        loadComponent: () => import('./componentes/componente3/componente3').then(m => m.Componente3)
    }

];
