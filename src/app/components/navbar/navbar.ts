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

  ngOnInit() {
    this.layoutService.sidebar$.subscribe(valor => {
      this.aberto = valor;
    });
  }

  constructor(
    private router: Router,
    private layoutService: LayoutService
  ) { }

  toggleSidebar() {
    this.layoutService.toggleSidebar();
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