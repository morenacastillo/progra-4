import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "login",
        pathMatch: "full" //
    },
    {
        path: "login",  
        loadComponent: () => import('./componentes/login/login').then(m => m.Login) 
    },
    {
        path: "home",  
        loadComponent: () => import('./componentes/home/home').then(m => m.Home) 
    },
    {
        path: "calculos",  
        loadComponent: () => import('./componentes/calculos/calculos').then(m => m.Calculos) 
    },
    {
        path: "componente1",  
        loadComponent: () => import('./componentes/componente1/componente1').then(m => m.Componente1) 
    },
    {
        path: "componente2",  
        loadComponent: () => import('./componentes/componente2/componente2').then(m => m.Componente2) 
    },
    {
        path: "componente3",  
        loadComponent: () => import('./componentes/componente3/componente3').then(m => m.Componente3) 
    },
    {
        path: "items",  
        loadComponent: () => import('./componentes/items/items').then(m => m.Items), 
        children: [
            {
                path: "detalle/:id",   // :id -> parámetro OBLIGATORIO, es parte de la ruta (/items/detalle/2)
                loadComponent: () => import('./componentes/detalle/detalle').then(m => m.Detalle)
            }
        ]
    },
    {
        path: "clase3",
        loadComponent: () => import('./clase3/abuelo/abuelo').then(m => m.Abuelo)
    },
    {
        path: "**",
        redirectTo: "login"
    }
];
