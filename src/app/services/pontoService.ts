import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ponto {
  private API = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  registrar() {
    return this.http.post(`${this.API}/pontos/`, {});
  }

  listar() {
    return this.http.get(`${this.API}/pontos/`);
  }

  banco() {
    return this.http.get(`${this.API}/pontos/banco`);
  }
}
