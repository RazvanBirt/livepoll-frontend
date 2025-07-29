import { Routes } from '@angular/router';

export const routes: Routes = [] = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' as const
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
