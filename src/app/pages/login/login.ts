import { Component } from '@angular/core';
import { Auth } from '../../services/authService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

login() {
  this.auth.login(this.username, this.password).subscribe({
    next: (res) => {
      this.auth.salvarToken(res.access_token);
      this.router.navigate(['/home']);
      }
    });
  }
}