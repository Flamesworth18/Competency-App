import { UserCompetencyService } from './../../../../services/user-competency.service';
import { LoaderService } from '../../../../services/loader.service';
import { SubCompetency } from '../../../../models/competency/subcompetency.model';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { Competencies } from '../../../../competencies/competencies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './user-assessment-list.component.html',
  styleUrls: ['./user-assessment-list.component.scss']
})
export class UserAssessmentListComponent implements OnInit {

  competencies = Competencies

  currentCompetency = 'Core';

  userCompetencies: SubCompetency[] = [];

  searchCompetency: any;

  constructor(
    private router: Router,
    private userCompetencyService: UserCompetencyService,
    private authService: AuthService,
    public loader: LoaderService
  ) { }

  ngOnInit(): void {
    var competency = sessionStorage.getItem('user-competency')
    if(competency !== null){
      this.currentCompetency = competency;
    }

    this.getUserCompetencies();
  }

  getUserCompetencies(){
    this.userCompetencyService.getCompetencies(this.authService.user.id)
    .subscribe(
      res => {
        res.forEach(c => {
          this.userCompetencies.push(c);
        })
      }
    )
  }

  selectedCompetency(name: string){
    this.currentCompetency = name;
    this.searchCompetency = name;
    sessionStorage.setItem('user-competency', name)
  }

  navigateToAssessmentInstruction(){
    this.router.navigate(['/assessment-instruction'])
  }

  navigateToView(competency: SubCompetency){
    sessionStorage.setItem('competencyId', competency.competencyId);
    sessionStorage.setItem('competencyName', competency.employeeName);
    sessionStorage.setItem('competencyDepartment', competency.department);
    sessionStorage.setItem('competencyCollege', competency.college);
    var competencyName = competency.competencyName.split(" ");
    this.router.navigate(['/user-view-' + competencyName[0].toLowerCase()]);
  }
}
