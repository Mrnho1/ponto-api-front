import { Component } from '@angular/core';
import { Auth } from '../../services/authService';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username = '';
  password = '';
  role = 'USER';

  constructor(private auth: Auth, private router: Router) {}

  register() {
    this.auth.register(this.username, this.password, this.role)
      .subscribe(() => {
        alert('Usuário criado!');
        this.router.navigate(['/']);
      });
  }
}
