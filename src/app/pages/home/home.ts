import { Component, OnInit } from '@angular/core';
import { Ponto } from '../../services/pontoService';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  pontos: any[] = [];
  bancoHoras = '00:00:00';
  ultimoPonto: any = null;

  constructor(private pontoService: Ponto) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
  this.pontoService.listar().subscribe((res: any) => {
    this.pontos = res;

    if (this.pontos.length > 0) {
      this.ultimoPonto = this.pontos[this.pontos.length - 1];
    }
  });

  this.pontoService.banco().subscribe((res: any) => {
    this.bancoHoras = res.banco_horas;
  });
}

  baterPonto() {
  const tipo = this.getProximoTipo();

  const pontoFake = {
    tipo: tipo.toUpperCase().replace(' ', '_'),
    data_hora: new Date()
  };

  this.pontos = [...this.pontos, pontoFake];

  this.pontoService.registrar().subscribe({
    error: () => {
      alert('Erro ao registrar ponto');
      this.carregar(); // rollback
    }
  });
}

  getProximoTipo(): string {
  const quantidade = this.pontos.length;

  if (quantidade === 0) return 'Entrada';
  if (quantidade === 1) return 'Saída Almoço';
  if (quantidade === 2) return 'Volta Almoço';
  if (quantidade === 3) return 'Saída';

  return 'Finalizado';
}
}
