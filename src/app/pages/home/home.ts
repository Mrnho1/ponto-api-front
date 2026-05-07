import { Component, OnInit } from '@angular/core';
import { Ponto } from '../../services/pontoService';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { LayoutService } from '../../services/layoutService';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  pontos: any[] = [];
  bancoHoras = '00:00:00';
  ultimoPonto: any = null;

  telaAtual = 'dashboard';

  constructor(
  private pontoService: Ponto,
  private layoutService: LayoutService
) {}

  ngOnInit() {

  this.carregar();

  this.layoutService.tela$.subscribe(tela => {
    this.telaAtual = tela;
  });

}

  trocarTela(tela: string) {
    this.telaAtual = tela;
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

    this.pontoService.registrar().subscribe(() => {
      this.carregar();
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