import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';
import { childGuard } from './guards/child-guard';
import { formGuard } from './guards/form-guard';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./componentes/login/login').then(m => m.Login)
    },
    {
        path: "bienvenido",
        loadComponent: () => import('./componentes/bienvenido/bienvenido').then(m => m.Bienvenido),
        canActivate: [authGuard] // carga el componente aunque no permita entrar
    },
    {
        path: "registro",
        loadComponent: () => import('./componentes/registro/registro').then(m => m.Registro),
        canDeactivate: [formGuard] // carga el componente aunque no permita entrar
    },
    {  
        path: 'productos',
        loadComponent: () => import('./componentes/productos/productos').then(m => m.Productos),
        canActivateChild: [childGuard],
        canMatch: [roleGuard], // si no matchea con el role guard, sigue de largo y no genera la ruta ni carga el componente
        children: [
            {
            path: 'detalle/:id',
            loadComponent: () => import('./componentes/detalle-producto/detalle-producto').then(m => m.DetalleProducto),
            }
        ],
    },
    {
        path: '**',
        loadComponent: () => import('./componentes/productos-error/productos-error').then(m => m.ProductosError),
        
    }

];
