import { Routes } from '@angular/router';
import { authGuard } from 'src/shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),
        canActivate: [authGuard],
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'transaction',
        loadComponent: () => import('./transaction/transaction.component').then((c) => c.TransactionComponent),
        canActivate: [authGuard],
    },
    {
        path: 'auth/login',
        loadComponent: () => import('./auth/auth.component').then((c) => c.AuthComponent),
    }
];
