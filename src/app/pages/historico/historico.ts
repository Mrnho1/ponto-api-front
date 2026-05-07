import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Ponto } from '../../services/pontoService';

@Component({
  selector: 'app-historico',
  imports: [CommonModule],
  templateUrl: './historico.html',
  styleUrl: './historico.css',
})
export class Historico implements OnInit {

  pontos: any[] = [];

  constructor(private pontoService: Ponto) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.pontoService.listar().subscribe((res: any) => {
      this.pontos = res;
    });
  }
}