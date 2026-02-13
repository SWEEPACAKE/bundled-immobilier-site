import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage/homepage').then(m => m.Homepage)
    },
    {
        path: 'nos-offres',
        loadComponent: () => import('./pages/recherche-offres/recherche-offres').then(m => m.RechercheOffres)
    }
];
