import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  aberto = true;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.aberto = !this.aberto;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}