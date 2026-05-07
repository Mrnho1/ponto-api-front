import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutService } from '../../services/layoutService';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  aberto = true;

  constructor(
  private router: Router,
  private layoutService: LayoutService
) {}

  toggleSidebar() {
    this.aberto = !this.aberto;
  }

  abrirDashboard() {
  this.layoutService.mudarTela('dashboard');
}

abrirHistorico() {
  this.layoutService.mudarTela('historico');
}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}