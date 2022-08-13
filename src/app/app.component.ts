import { PrintService } from './services/print.service';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isUserValid:boolean = false;
  isAdminValid:boolean = false;
  isLoggedIn:boolean = false;

  print:boolean = false;

  constructor(
    public loader: LoaderService,
    private authService: AuthService,
    private printService: PrintService
  ){
    this.authService.isUser.subscribe(userValid => this.isUserValid = userValid);
    this.authService.isAdmin.subscribe(adminValid => this.isAdminValid = adminValid);
    this.authService.loggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn)
  }

  ngOnInit(): void {
    var isPrinting = sessionStorage.getItem('isPrinting');
    this.printService.isPrinting.subscribe(p => this.print = p);
    if(isPrinting !== null){
      this.print = JSON.parse(isPrinting);
    }
  }
  
}
