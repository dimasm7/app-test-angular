import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService, private router: Router){}

  onSubmit(){
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const data = {
        username: this.loginForm.value.username ?? '',
        password: this.loginForm.value.password ?? ''
      };
      const res = this.authService.login(data)
      if(res) this.router.navigate(['employee']);
      else alert('Invalid username or password');
    }
  }
}
