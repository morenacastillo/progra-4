import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Items } from './componentes/items/items';
import { Error } from './componentes/error/error';
import { Detalle } from './componentes/detalle/detalle';

export const routes: Routes = [ // aca se definen las rutas de la aplicacion, se toma un path y se vincula con un componente especifico
    {   // si el path es "" significa que ante la ruta vacia, redirige a lo que se indique por default
        path: "", 
        redirectTo: "home", //redirige a home si no hay ninguna ruta
        pathMatch: "full" //
    },
    {   
        path: "home", 
        loadComponent: () => import('./componentes/home/home').then(m => m.Home)
    },
    {
        path: "items", 
        loadComponent: () => import('./componentes/items/items').then(m => m.Items),
        children: [ // dentro de la misma pantalla de items va a existir un path hijo
            /*  {
                path: "detalle/:id", //parametro boligatorio que va a depender del ID que se le pase al path en la logica
                component: Detalle,

            }
                */
            {
                path: "detalle",
                loadComponent: () => import('./componentes/detalle/detalle').then(m => m.Detalle)
            }
    ]
    },
    {
        path: "error", 
        loadComponent: () => import('./componentes/error/error').then(m => m.Error)
    },
    { // este manejo de que un usuario ingrese una ruta random no existete, siempre tiene que ir como ultimo path
        path:"**",
        redirectTo: "error"
    }


]; 

