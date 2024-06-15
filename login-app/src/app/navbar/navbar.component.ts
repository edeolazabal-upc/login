import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,  
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }
}
