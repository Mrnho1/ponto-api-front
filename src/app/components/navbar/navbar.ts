import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/authService';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  aberto = true;
  isAdmin = false;

  constructor(
    private router: Router,
    private auth: Auth
  ) {
    this.isAdmin = this.auth.isAdmin();
  }

  toggleSidebar() {
    this.aberto = !this.aberto;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}