import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private API = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
  const body = new URLSearchParams();
  body.set('username', username);
  body.set('password', password);

  return this.http.post<any>(
    `${this.API}/auth/login`,
    body.toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );
}

  salvarToken(token: string) {
    localStorage.setItem('token', token);
  }

  isLogado(): boolean {
    return !!localStorage.getItem('token');
  }

  register(username: string, password: string, role: string) {
  return this.http.post(`${this.API}/auth/register`, null, {
    params: {
      username,
      password,
      role
    }
  });
}

}

  