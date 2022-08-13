import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Forgot } from 'src/app/models/auth/forgot.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  forgot: Forgot = {
    emailAddress: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  forgotForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  get Email(): FormControl{
    return this.forgotForm.get('email') as FormControl;
  }

  forgotPassword(){
    this.forgot.emailAddress = this.forgotForm.get('email')?.value || '';
    this.authService.requestForgotPassword(this.forgot);
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }
}
