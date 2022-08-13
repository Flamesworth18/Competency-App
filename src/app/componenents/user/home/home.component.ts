import { UserCompetencyCount } from './../../../models/user-competency-count.model';
import { AuthService } from './../../../services/auth.service';
import { UserCompetencyService } from './../../../services/user-competency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count: UserCompetencyCount = {
    coreCount: '',
    leadershipCount: '',
    instructionCount: '',
    researchCount: '',
    extensionCount: '',
    productionCount: ''
  }

  constructor(
    private userCompetencyService: UserCompetencyService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUserCompetencyCount();
  }

  getUserCompetencyCount(){
    this.userCompetencyService.getCompetenciesCount(this.authService.user.id)
    .subscribe(
      res => {
        this.count.coreCount = res.coreCount;
        this.count.leadershipCount = res.leadershipCount;
        this.count.instructionCount = res.instructionCount;
        this.count.researchCount = res.researchCount;
        this.count.extensionCount = res.extensionCount;
        this.count.productionCount = res.productionCount;
      }
    )
  }

}
