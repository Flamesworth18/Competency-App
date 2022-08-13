import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { College } from 'src/app/models/add ons/college.model';
import { Department } from 'src/app/models/add ons/department.model';
import { CreateUpdateUser } from 'src/app/models/user/create-update-user.model';
import { User } from 'src/app/models/user/user.model';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user: CreateUpdateUser = {
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    emailAddress: '',
    username: '',
    password: '',
    department: '',
    college:'',
    rank:'',
    role: ''
  }

  tempUser:User = {
    id:'',
    firstName:'',
    middleName:'',
    lastName:'',
    emailAddress:'',
    username:'',
    passwordHash:'',
    passwordSalt:'',
    passwordResetToken:'',
    passwordTokenExpires:new Date(),
    forms: [{
      id:'',
      username:'',
      indicator:'',
      situation:'',
      task:'',
      action:'',
      result:'',
      basic:{
        id:'',
        name:''
      },
      intermediate:{
        id:'',
        name:''
      },
      advanced:{
        id:'',
        name:''
      },
      dateCreated:'',
      timeCreated:''
    }],
    department:'',
    college:'',
    rank:'',
    role:'',
    dateCreated:''
  }

  departments: Department[] = [];
  colleges: College[]= [];

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private departmentService: DepartmentService
  ) { 

    this.userService.getUser.subscribe(user => this.tempUser = user);

  }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(){
    this.departmentService.getDepartments()
    .subscribe(
      res => {
        this.departments = res;
      }
    )
  }

  selectedDepartment(depName: any){
    var department = this.departments.find(d => d.name == depName);
    this.colleges = department?.colleges || [];
  }

  navigateToUserList(){
    this.router.navigate(['/user-list']);
  }

  updateUserForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    department: new FormControl(null, [Validators.required]),
    college: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
  });

  updateUser(){
    this.user.firstName = this.updateUserForm.get('firstname')?.value || '';
    this.user.lastName = this.updateUserForm.get('lastname')?.value || '';
    this.user.emailAddress = this.updateUserForm.get('email')?.value || '';
    this.user.username = this.updateUserForm.get('username')?.value || '';
    this.user.password = this.updateUserForm.get('password')?.value || '';
    this.user.department = this.updateUserForm.get('department')?.value || '';
    this.user.college = this.updateUserForm.get('college')?.value || '';
    this.user.role = this.updateUserForm.get('role')?.value || '';

    this.requestUpdateUser(this.user);
  }

  requestUpdateUser(user: CreateUpdateUser){
    this.userService.updateUser(this.tempUser.id ,user)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been successfully updated.", user.firstName);
          this.router.navigate(['/admin-user'])
        }, 3000);
      },
      err => {
        setTimeout(() => {
          this.toastr.error("An error occured");
        }, 3000);
      }
    )
  }

  get FirstName(): FormControl{
    return this.updateUserForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl{
    return this.updateUserForm.get('lastname') as FormControl;
  }

  get Email(): FormControl{
    return this.updateUserForm.get('email') as FormControl;
  }

  get Username(): FormControl{
    return this.updateUserForm.get('username') as FormControl;
  }

  get Password(): FormControl{
    return this.updateUserForm.get('password') as FormControl;
  }

  get Department(): FormControl{
    return this.updateUserForm.get('department') as FormControl;
  }

  get College(): FormControl{
    return this.updateUserForm.get('college') as FormControl;
  }

  get Role(): FormControl{
    return this.updateUserForm.get('role') as FormControl;
  }

}
