import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
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
      plan: ['', Validators.required],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.signupForm.invalid) {
      return;
    }

    this.submitting = true;
    this.errorMessage = '';

    this.userService.signup(this.signupForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.submitting = false;
        this.errorMessage = error.error?.message || 'הרשמה נכשלה. אנא נסה שוב.';
      },
    });
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
