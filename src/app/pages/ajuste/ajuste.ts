import { Component } from '@angular/core';
import { Ajuste } from '../../services/ajusteService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-ajuste',
  imports: [CommonModule, FormsModule],
  templateUrl: './ajuste.html',
  styleUrl: './ajuste.css',
})
export class AjusteS {
  pontoId = '';
  data = '';
  motivo = '';

  constructor(private ajusteService: Ajuste) {}

  ajustar() {
    this.ajusteService.criar(this.pontoId, this.data, this.motivo)
      .subscribe(() => alert('Ajustado!'));
  }
}
