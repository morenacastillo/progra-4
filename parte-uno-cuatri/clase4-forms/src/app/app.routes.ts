import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: "formUsuarios",
        loadComponent: () => import ('./componentes/form-usuarios/form-usuarios').then(m => m.FormUsuarios) 
    }
];
