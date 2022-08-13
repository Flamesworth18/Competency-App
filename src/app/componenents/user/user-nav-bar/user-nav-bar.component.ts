import { Component, OnInit } from '@angular/core';
import { Logout } from 'src/app/models/auth/logout.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.scss']
})
export class UserNavBarComponent implements OnInit {

  logout: Logout = {
    userId: '',
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logoutUser(){
    this.logout.userId = this.authService.user.id;
    this.authService.logoutRequest(this.logout);
  }

}
