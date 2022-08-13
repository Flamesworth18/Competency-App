import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateUpdateUser } from 'src/app/models/user/create-update-user.model';
import { UserService } from 'src/app/services/user.service';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/add ons/department.model';
import { College } from 'src/app/models/add ons/college.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

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

  departments:Department[] = [];
  colleges:College[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private departmentService: DepartmentService
  ) { }

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

  createUserForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    department: new FormControl(null, [Validators.required]),
    college: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
  });

  createUser(){
    this.user.firstName = this.createUserForm.get('firstname')?.value || '';
    this.user.lastName = this.createUserForm.get('lastname')?.value || '';
    this.user.emailAddress = this.createUserForm.get('email')?.value || '';
    this.user.username = this.createUserForm.get('username')?.value || '';
    this.user.password = this.createUserForm.get('password')?.value || '';
    this.user.department = this.createUserForm.get('department')?.value || '';
    this.user.college = this.createUserForm.get('college')?.value || '';
    this.user.role = this.createUserForm.get('role')?.value || '';

    this.requestCreateUser(this.user);
  }

  requestCreateUser(user: CreateUpdateUser){
    this.userService.addUser(user)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been successfully created.", user.firstName);
          this.router.navigate(['/user-list']);
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
    return this.createUserForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl{
    return this.createUserForm.get('lastname') as FormControl;
  }

  get Email(): FormControl{
    return this.createUserForm.get('email') as FormControl;
  }

  get Username(): FormControl{
    return this.createUserForm.get('username') as FormControl;
  }

  get Password(): FormControl{
    return this.createUserForm.get('password') as FormControl;
  }

  get Department(): FormControl{
    return this.createUserForm.get('department') as FormControl;
  }

  get College(): FormControl{
    return this.createUserForm.get('college') as FormControl;
  }

  get Role(): FormControl{
    return this.createUserForm.get('role') as FormControl;
  }

}
