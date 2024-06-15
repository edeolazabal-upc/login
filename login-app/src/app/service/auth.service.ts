import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false
  private userRole: string | null = null

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Simular la autenticación
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.userRole = null;
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
