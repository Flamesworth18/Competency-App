import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Logout } from 'src/app/models/auth/logout.model';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.scss']
})
export class AdminNavBarComponent implements OnInit {

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
