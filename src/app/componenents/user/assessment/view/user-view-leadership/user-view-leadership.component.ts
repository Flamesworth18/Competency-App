import { LeadershipCompetencyCategories } from './../../../../../competencies/leadership-competency';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryOptions } from 'src/app/models/competency/category-options.model';
import { CategoryResult } from 'src/app/models/competency/category-results.model';
import { Router } from '@angular/router';
import { UserLeadershipCompetencyService } from 'src/app/services/user-leadership-competency.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-view-leadership',
  templateUrl: './user-view-leadership.component.html',
  styleUrls: ['./user-view-leadership.component.scss']
})
export class UserViewLeadershipComponent implements OnInit {

  leadershipCompetencyCategories = LeadershipCompetencyCategories;

  currentCompetency = 'Leadership Competency 1';

  competencyId: string = '';  
  competencyEmployeeName: string = '';  
  competencyDepartment: string = '';  
  competencyCollege: string = '';

  categoryOneOptions: CategoryOptions = {
    basicOptions: [],
    intermediateOptions: [],
    advancedOptions: [],
    superiorOptions: []
  }
  categoryOneResults: CategoryResult = {
    basicResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    intermediateResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    advancedResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    superiorResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    essay: ''
  }

  categoryTwoOptions: CategoryOptions = {
    basicOptions: [],
    intermediateOptions: [],
    advancedOptions: [],
    superiorOptions: []
  }
  categoryTwoResults: CategoryResult = {
    basicResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    intermediateResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    advancedResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    superiorResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    essay: ''
  }

  categoryThreeOptions: CategoryOptions = {
    basicOptions: [],
    intermediateOptions: [],
    advancedOptions: [],
    superiorOptions: []
  }
  categoryThreeResults: CategoryResult = {
    basicResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    intermediateResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    advancedResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    superiorResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    essay: ''
  }

  categoryFourOptions: CategoryOptions = {
    basicOptions: [],
    intermediateOptions: [],
    advancedOptions: [],
    superiorOptions: []
  }
  categoryFourResults: CategoryResult = {
    basicResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    intermediateResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    advancedResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    superiorResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    essay: ''
  }
  
  categoryFiveOptions: CategoryOptions = {
    basicOptions: [],
    intermediateOptions: [],
    advancedOptions: [],
    superiorOptions: []
  }
  categoryFiveResults: CategoryResult = {
    basicResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    intermediateResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    advancedResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    superiorResult: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    essay: ''
  }

  notScrollable = true;
  dataIsIncomplete = true;
  showAlert = true;

  option1Done = false;
  result1Done = false;
  option2Done = false;
  result2Done = false;
  option3Done = false;
  result3Done = false;
  option4Done = false;
  result4Done = false;
  option5Done = false;
  result5Done = false;

  isLoading = false;

  @ViewChild('leadership1') leadership1 !: ElementRef;
  @ViewChild('leadership2') leadership2 !: ElementRef;
  @ViewChild('leadership3') leadership3 !: ElementRef;
  @ViewChild('leadership4') leadership4 !: ElementRef;
  @ViewChild('leadership5') leadership5 !: ElementRef;
  @ViewChild('top') top !: ElementRef;

  constructor(
    private router: Router,
    private userLeadershipCompetencyService :UserLeadershipCompetencyService,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.competencyId = sessionStorage.getItem('competencyId') || '';
    this.competencyEmployeeName = sessionStorage.getItem('competencyName') || '';
    this.competencyDepartment = sessionStorage.getItem('competencyDepartment') || '';
    this.competencyCollege = sessionStorage.getItem('competencyCollege') || '';

  }

  selectedCoreCompetency(name: string){
    this.currentCompetency = name;
  }

  navigateToTakenAssessments(){
    this.router.navigate(['/user-assessment-list']);
  }

  navigateToSection(section: string){

    if(section === "leadership1"){
      this.leadership1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "leadership2"){
      this.leadership2.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "leadership3"){
      this.leadership3.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "leadership4"){
      this.leadership4.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "leadership5"){
      this.leadership5.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
  }

  navigateToTopSection(){
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  onScroll(){

    if(this.notScrollable && this.dataIsIncomplete){
      this.spinner.show();
      this.notScrollable = false;
      this.loadData();
    }
  }

  loadData(){

    if(!this.option1Done){
      this.getCategoryOneOptions();
    }
  }

//#region GET LEADERSHIP COMPETENCY ONE DATA
 getCategoryOneOptions(){
  this.userLeadershipCompetencyService.getCategoryOneOptions(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryOneOptions = res;

      setTimeout(() => {
        this.getCategoryOneResults();
        this.option1Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
getCategoryOneResults(){
  this.userLeadershipCompetencyService.getCategoryOneResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryOneResults = res;

      setTimeout(() => {
        this.getCategoryTwoOptions();
        this.result1Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
//#endregion

//#region GET LEADERSHIP COMPETENCY TWO DATA
getCategoryTwoOptions(){
  this.userLeadershipCompetencyService.getCategoryTwoOptions(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryTwoOptions = res;

      setTimeout(() => {
        this.getCategoryTwoResults();
        this.option2Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
getCategoryTwoResults(){
  this.userLeadershipCompetencyService.getCategoryTwoResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryTwoResults = res;

      setTimeout(() => {
        this.getCategoryThreeOptions();
        this.result2Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}

//#endregion

//#region GET LEADERSHIP COMPETENCY THREE DATA
getCategoryThreeOptions(){
  this.userLeadershipCompetencyService.getCategoryThreeOptions(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryThreeOptions = res;

      setTimeout(() => {
        this.getCategoryThreeResults();
        this.option3Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
getCategoryThreeResults(){
  this.userLeadershipCompetencyService.getCategoryThreeResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryThreeResults = res;

      setTimeout(() => {
        this.getCategoryFourOptions();
        this.result3Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}

//#endregion

//#region GET LEADERSHIP COMPETENCY FOUR DATA
getCategoryFourOptions(){
  this.userLeadershipCompetencyService.getCategoryFourOptions(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryFourOptions = res;

      setTimeout(() => {
        this.getCategoryFourResults();
        this.option4Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
getCategoryFourResults(){
  this.userLeadershipCompetencyService.getCategoryFourResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryFourResults = res;

      setTimeout(() => {
        this.getCategoryFiveOptions();
        this.result4Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}

//#endregion

//#region GET LEADERSHIP COMPETENCY FIVE DATA
getCategoryFiveOptions(){
  this.userLeadershipCompetencyService.getCategoryFiveOptions(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryFiveOptions = res;

      setTimeout(() => {
        this.getCategoryFiveResults();
        this.option5Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
getCategoryFiveResults(){
  this.userLeadershipCompetencyService.getCategoryFiveResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryFiveResults = res;
      this.spinner.hide();
      this.dataIsIncomplete = false;
      this.result5Done = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 6100);
    }
  )
}

//#endregion

}
