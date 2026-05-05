import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ajuste {
  private API = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  criar(ponto_id: string, nova_data: string, motivo: string) {
    return this.http.post(`${this.API}/ajustes`, {
      ponto_id,
      nova_data,
      motivo
    });
  }
}
