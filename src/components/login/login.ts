import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../app/services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(Auth);
  emailData = signal<string>('');
  passwordData = signal<string>('');
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  submitting() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Test Login: ', email, ' | ', password);
      this.authService.signin(email, password).subscribe({
        next: (res) => {
          console.log('LoggedIn !!!');
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.log('Invalid Data !!!');
    }
  }
}
