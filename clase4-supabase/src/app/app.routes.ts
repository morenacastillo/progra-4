import { Routes } from '@angular/router';

export const routes: Routes = [
    {  
        path: "", 
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: 'login',
        loadComponent: () => import('./componentes/login/login').then(m => m.Login)
    },
    {
        path: 'registro',
        loadComponent: () => import('./componentes/registro/registro').then(m => m.Registro)
    },
    {
        path: 'cosas',
        loadComponent: () => import('./componentes/cosas/cosas').then(m => m.Cosas)
    }
    
];
