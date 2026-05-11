import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { LayoutService } from './services/layoutService';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {

  sidebarAberta = true;

  constructor(
    private layoutService: LayoutService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.layoutService.sidebar$.subscribe((valor: boolean) => {
      this.sidebarAberta = valor;
    });

  }

  mostrarNavbar(): boolean {

    return this.router.url !== '/' &&
      this.router.url !== '/register';

  }

}