import { Routes } from '@angular/router';

export const routes: Routes = [
        {
            path:"abuelo",
            loadComponent: () => import('./componentes/abuelo/abuelo').then(m => m.Abuelo)
        },
        {
            path:"usuarios",
            loadComponent: () => import('./componentes/lista-usuarios/lista-usuarios').then(m => m.ListaUsuarios)
        }

];
