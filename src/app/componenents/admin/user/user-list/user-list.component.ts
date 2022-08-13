import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user.model';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users:User[] = [];

  user:User = {
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

  constructor(
    private userService:UserService,
    public loader: LoaderService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  //GET all users
  getUsers(){
    this.userService.getUsers()
    .subscribe(
      res => {
        this.users = res;
      }
    )
  }

  //POST user
  createUser(){
    this.router.navigate(['/create-user']);
  }

  //PUT user
  editUser(user: User){
    this.userService.setUser(user);
    this.router.navigate(['/update-user'])
  }

  confirmDelete(id: string){
    Swal.fire({
      title: "Are you sure you want to remove?",
      text: "You will not be able to recover this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if(result.value){
        this.deleteUser(id);
      }
    })
  }

  //DELETE user
  deleteUser(id: string){
    this.userService.removeUser(id)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been successfully deleted.", "User");
          this.getUsers();
        }, 3000);
      },
      err => {
        setTimeout(() => {
          this.toastr.error("An error occured");
        }, 3000);
      }
    )

  }

}
