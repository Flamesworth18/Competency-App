import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { Forgot } from '../models/auth/forgot.model';
import { Login } from '../models/auth/login.model';
import { Logout } from '../models/auth/logout.model';
import { Register } from '../models/auth/register.model';
import { Reset } from '../models/auth/reset.model';
import { UserToken } from '../models/add ons/user-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly accountURL = "https://hrdmocompetencyapp.azurewebsites.net/api/Auth/";
  readonly token_name:string = "token";
  readonly refresh_token_name:string = "refreshToken"

  tokenresp: any;

  userToken: UserToken = {
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    department: '',
    college: '',
    role: '',
  }

  role: any;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private jwt: JwtHelperService,
    private toastr: ToastrService,
    ) {

      let token = localStorage.getItem("token");
      if(token != null){
        let decode = this.jwt.decodeToken(token);
        let role = decode['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        if(role === 'User'){
          this._isUser.next(true);
          this._isAdmin.next(false);
        }else if(role === 'Administrator'){
          this._isAdmin.next(true);
          this._isUser.next(false);
        }else{
          this._isUser.next(false);
          this._isAdmin.next(false);
        }
      } 

    }

  get user(){
    return this.userToken || '';
  }

  get token(){
    return localStorage.getItem(this.token_name) || '';
  }

  //create user
  registerUser(request: Register){
    console.log(request);
    return this.http.post(this.accountURL + 'register', request, {
      responseType: 'text'
    });
  }

  registerRequest(request: Register){
    this.registerUser(request).subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success('Account has been registered.', 'Congratulations!');
          this.router.navigate(['/login']);
        }, 3000);
      },
      err => {
        console.log(err);
        setTimeout(() => {
          this.toastr.error('Request Invalid!');
        }, 3000);
      }
    );
  }

  //login user
  loginUser(request: Login){
    return this.http.post(this.accountURL + 'login', request, {
      responseType: 'text',
    });
  }

  //request for login
  loginRequest(request: Login){
    this.loginUser(request).subscribe(
      response => {
          var decodedToken = this.jwt.decodeToken(JSON.stringify(response));
          
          this.userToken.id = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
          this.userToken.firstName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'];
          this.userToken.middleName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
          this.userToken.lastName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'];
          this.userToken.username = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
          this.userToken.department = decodedToken['http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor'];
          this.userToken.college = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/anonymous'];
          this.userToken.role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

          localStorage.setItem(this.token_name, response);

          if(this.userToken.role === 'User'){

            setTimeout(() => {
              this.router.navigate(['/home']);
              
              this._isUser.next(true);
              this._isAdmin.next(false);
              this._loggedIn.next(false);
            }, 3000);
          }else if(this.userToken.role === 'Administrator'){
            
            setTimeout(() => {
              this.router.navigate(['/dashboard']);

              this._isAdmin.next(true);
              this._isUser.next(false);
              this._loggedIn.next(false);
            }, 3000);
          }else{
            this._isAdmin.next(false);
            this._isUser.next(false);
            this._loggedIn.next(true);
          }
      },
      error => {
        setTimeout(() => {
          this.toastr.error('Invalid username or password');
        }, 3000);
      }
    );    
  }
  
  //logout user
  logoutUser(request: Logout){
    return this.http.post(this.accountURL + 'logout', request, {
      responseType: 'text',
    });
  }

  //request for logout
  logoutRequest(request: Logout){
    this.logoutUser(request)
    .subscribe(
      res => {
        setTimeout(() => {
          
          localStorage.clear();
          this._isUser.next(false);
          this._isAdmin.next(false);
          this._loggedIn.next(false);
          this.router.navigateByUrl('/login');

        }, 3000);
      },
      err => {
        console.log(this.userToken.id);
        setTimeout(() => {
          this.toastr.error("Request Failed!");
        }, 3000);
      }
    )
  }

  sessionExpired(){
    this.toastr.error("Session Expired!");      
    localStorage.clear();
    this._isUser.next(false);
    this._isAdmin.next(false);
    this._loggedIn.next(false);
    this.router.navigateByUrl('/login');
  }

  //get user role
  GetRolebyToken(token: any) {
    const decodedToken = this.jwt.decodeToken(JSON.stringify(token));
    this.userToken.firstName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'];
    this.userToken.middleName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    this.userToken.lastName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'];
    this.userToken.id = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    this.userToken.department = decodedToken['http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor'];
    this.userToken.college = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/anonymous'];
    this.userToken.role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    return this.userToken.role;
  }

  private _isUser = new BehaviorSubject<boolean>(false);
  isUser = this._isUser.asObservable();

  isUserLoggedIn(){
    this._isUser.next(false);
  }

  private _isAdmin = new BehaviorSubject<boolean>(false);
  isAdmin = this._isAdmin.asObservable();

  isAdminLoggedIn(){
    this._isAdmin.next(false);
  }

  private _loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn = this._loggedIn.asObservable();

  isLoggedIn(){
    this._loggedIn.next(false);
  }

  //forgot user password
  forgotPassword(email: Forgot){
    return this.http.post(this.accountURL + 'forgot-password', email,  {
      responseType: 'text',
    });
  }

  //request forgot user password
  requestForgotPassword(email: Forgot){
    this.forgotPassword(email)
    .subscribe(
      res => {
        sessionStorage.setItem('password-token', res);

        setTimeout(() => {
          this.router.navigate(['/reset']);
        }, 3000);

      },
      err => {
        console.log(err)
        setTimeout(() => {
          this.toastr.error("Email is invalid", 'Request Error');
        }, 3000);
      }
    )
  }

  resetPassword(reset: Reset){
    return this.http.post(this.accountURL +'reset-password', reset, {
      responseType: 'text',
    })
  }

  requestResetPassword(reset: Reset){
    this.resetPassword(reset)
    .subscribe(
      res => {
        
        setTimeout(() => {
          Swal.fire({
            title: "Congratulations!",
            text: "Your password has been reset successfully",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Login",
          }).then((result) => {
            if(result.value){
              this.router.navigate(['/login'])
            }
          })
        }, 3000);

        sessionStorage.setItem('password-token', '')
      },
      err => {
        console.log(err)
        this.toastr.error("Request Timeout");
      }
    )
  }
}
