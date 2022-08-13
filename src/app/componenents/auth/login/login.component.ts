import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/auth/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = {
    username: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { 
    localStorage.clear();
    authService.isUserLoggedIn();
    authService.isAdminLoggedIn();
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  loginSubmitted(){

    this.login.username = this.loginForm.get('username')?.value || '';
    this.login.password = this.loginForm.get('password')?.value || '';

    this.authService.loginRequest(this.login);
  }

  get Username(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }

  get Password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  navigateToRegister(){
    this.router.navigate(['/register'])
  }

  navigateToForgot(){
    this.router.navigate(['/forgot'])
  }
}
