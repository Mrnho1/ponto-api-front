import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { AjusteS } from './pages/ajuste/ajuste';
import { Register } from './pages/register/register';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
  { path: '', component: Login },

  { path: 'register', component: Register },

  {
    path: 'home',
    component: Home,
    canActivate: [authGuard]
  },

  {
    path: 'ajuste',
    component: AjusteS,
    canActivate: [authGuard]
  }
];
