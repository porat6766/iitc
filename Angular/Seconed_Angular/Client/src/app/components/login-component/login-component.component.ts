import { Component } from '@angular/core';
import { GlobalService } from '../../services/globalState.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponentComponent {
  user = '';
  password = '';

  constructor(private globalService: GlobalService) {}

  login() {
    this.globalService.setGlobalStateUser({
      user: this.user,
      isLoggedIn: true,
    });
    console.log('User logged in:', this.user);
  }
}
