import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // הוספת CommonModule

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // הוספת CommonModule כאן
  providers: [UserService],
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  submitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ],
      ],
      plan: ['Standard', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      
      console.log(this.signupForm.value);
      
      this.submitting = true;
      this.errorMessage = '';
      
      this.userService.signup(this.signupForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.submitting = false;
          this.errorMessage =
          error.error?.message || 'Sign up failed, please try again'; // הצגת הודעת שגיאה
        },
      });
    }
    }
    
    get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get plan() {
    return this.signupForm.get('plan');
  }
}
