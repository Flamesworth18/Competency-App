import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isUserValid:boolean = false;
  isAdminValid:boolean = false;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.router.navigate(['/login']);
  }

  
}
