import { DepartmentService } from './../../../services/department.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/models/auth/register.model';
import { Department } from 'src/app/models/add ons/department.model';
import { College } from 'src/app/models/add ons/college.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: Register = {
    firstName: '',
    middleName: '',
    lastName: '',
    emailAddress: '',
    username: '',
    password: '',
    confirmPassword: '',
    department: '',
    college: ''
  }

  termsAccepted:boolean = false;

  departments: Department[] = [];
  colleges: College[] = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.getDepartments()
  }

  getDepartments(){
    this.departmentService.getDepartments()
    .subscribe(
      res => {
        this.departments = res;
      },
      err => {
        this.toastr.error("An error occured!");
      }
    )
  }

  registerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    middleName: new FormControl(null),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    department: new FormControl(null, [Validators.required]),
    college: new FormControl(null, [Validators.required])
  });
  
  registerSubmitted(){
    this.register.firstName = this.registerForm.get('firstName')?.value || '';
    this.register.middleName = this.registerForm.get('middleName')?.value || '';
    this.register.lastName = this.registerForm.get('lastName')?.value || '';
    this.register.emailAddress = this.registerForm.get('email')?.value || '';
    this.register.username = this.registerForm.get('username')?.value || '';
    this.register.password = this.registerForm.get('password')?.value || '';
    this.register.confirmPassword = this.registerForm.get('confirmPassword')?.value || '';
    this.register.department = this.registerForm.get('department')?.value || '';
    this.register.college = this.registerForm.get('college')?.value || '';

    if(this.termsAccepted){
      this.auth.registerRequest(this.register);
    }else{
      this.toastr.error("Check Agree Terms!", "Request Error");
    }
  }

  get FirstName(): FormControl{
    return this.registerForm.get('firstName') as FormControl;
  }

  get MiddleName(): FormControl{
    return this.registerForm.get('middleName') as FormControl;
  }

  get LastName(): FormControl{
    return this.registerForm.get('lastName') as FormControl;
  }

  get Email(): FormControl{
    return this.registerForm.get('email') as FormControl;
  }

  get Username(): FormControl{
    return this.registerForm.get('username') as FormControl;
  }

  get Password(): FormControl{
    return this.registerForm.get('password') as FormControl;
  }

  get ConfirmPassword(): FormControl{
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  get Department(): FormControl{
    return this.registerForm.get('department') as FormControl;
  }

  get College(): FormControl{
    return this.registerForm.get('college') as FormControl;
  }

  confirmPassword(){
    var password = this.registerForm.get('password')?.value;
    var confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password !== confirmPassword ? true: false;
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

  acceptTerms(){
    this.termsAccepted = !this.termsAccepted;
  }

  departmentIsEmpty(){
    var d = this.registerForm.get('department')?.value || '';
    return d !== ''? false : true;
  }

  collegeIsEmpty(){
    var c = this.registerForm.get('college')?.value || '';
    return c !== ''? false : true;
  }

  selectedDepartment(depName: any){
    var department = this.departments.find(d => d.name == depName);
    this.colleges = department?.colleges || [];
  }
}
