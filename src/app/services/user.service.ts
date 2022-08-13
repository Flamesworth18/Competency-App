import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateUpdateUser } from '../models/user/create-update-user.model';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly userURL = "https://hrdmocompetencyapp.azurewebsites.net/api/user/";

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
    private http: HttpClient
  ) { }

  //GET users
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userURL)
  }

  //ADD user
  addUser(user: CreateUpdateUser): Observable<User>{
    user.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(this.userURL, user);
  }

  //edit user
  updateUser(id: string, user: CreateUpdateUser): Observable<User>{
    user.id = '00000000-0000-0000-0000-000000000000';
    return this.http.put<User>(this.userURL + id, user);
  }

  //remove user
  removeUser(id: string): Observable<User>{
    return this.http.delete<User>(this.userURL + id);
  }

  private _user = new BehaviorSubject<User>(this.user);
  getUser = this._user.asObservable();

  setUser(user: any){
    this._user.next(user);
  }
}
