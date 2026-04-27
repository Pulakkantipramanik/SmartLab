import { Component } from '@angular/core';
import { ApiService } from '../api';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRequest, LoginResponse } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {

  email = '';
  password = '';
  loading = false;
  error = '';

  constructor(private api: ApiService, private router: Router) {}

  login() {
    this.loading = true;
    this.error = '';
    const loginData: LoginRequest = {
      email: this.email,
      password: this.password
    };
    this.api.login(loginData).subscribe({
      next: (res: LoginResponse) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = 'Login failed. Please check your credentials.';
        this.loading = false;
      }
    });
  }
}