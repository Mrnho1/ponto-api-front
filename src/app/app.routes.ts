import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { AjusteS } from './pages/ajuste/ajuste';


export const routes: Routes = [
    { path: '', component: Login },
    { path: 'home', component: Home },
    { path: 'ajuste', component: AjusteS }
];
