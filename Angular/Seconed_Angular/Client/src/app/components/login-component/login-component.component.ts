import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  standalone: true,
  imports: [FormsModule],
  providers: [UserService],
})
export class LoginComponentComponent {
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('User logged in:', response.user);
        this.router.navigate(['/']);
        alert('you log in successfully');
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
