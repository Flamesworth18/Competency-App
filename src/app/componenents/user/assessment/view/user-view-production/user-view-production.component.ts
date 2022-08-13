import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductionCompetencyCategories } from 'src/app/competencies/production-competency';
import { CategoryOptions } from 'src/app/models/competency/category-options.model';
import { CategoryResult } from 'src/app/models/competency/category-results.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserProductionCompetencyService } from 'src/app/services/user-production-competency.service';

@Component({
  selector: 'app-user-view-production',
  templateUrl: './user-view-production.component.html',
  styleUrls: ['./user-view-production.component.scss']
})
export class UserViewProductionComponent implements OnInit {

  productionCompetencyCategories = ProductionCompetencyCategories;

  currentCompetency = 'Production Competency 1';

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

  isLoading = false;
  
  @ViewChild('production1') production1 !: ElementRef;
  @ViewChild('production2') production2 !: ElementRef;
  @ViewChild('production3') production3 !: ElementRef;
  @ViewChild('production4') production4 !: ElementRef;
  @ViewChild('top') top !: ElementRef;

  constructor(
    private router: Router,
    private userProductionCompetencyService: UserProductionCompetencyService,
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

    if(section === "production1"){
      this.production1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "production2"){
      this.production2.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "production3"){
      this.production3.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "production4"){
      this.production4.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
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

//#region GET INSTRUCTION COMPETENCY ONE DATA
getCategoryOneOptions(){
  this.userProductionCompetencyService.getCategoryOneOptions(this.authService.user.id, this.competencyId)
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
  this.userProductionCompetencyService.getCategoryOneResults(this.authService.user.id, this.competencyId)
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

//#region GET INSTRUCTION COMPETENCY TWO DATA
getCategoryTwoOptions(){
  this.userProductionCompetencyService.getCategoryTwoOptions(this.authService.user.id, this.competencyId)
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
  this.userProductionCompetencyService.getCategoryTwoResults(this.authService.user.id, this.competencyId)
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

//#region GET INSTRUCTION COMPETENCY THREE DATA
getCategoryThreeOptions(){
  this.userProductionCompetencyService.getCategoryThreeOptions(this.authService.user.id, this.competencyId)
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
  this.userProductionCompetencyService.getCategoryThreeResults(this.authService.user.id, this.competencyId)
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

//#region GET INSTRUCTION COMPETENCY FOUR DATA
getCategoryFourOptions(){
  this.userProductionCompetencyService.getCategoryFourOptions(this.authService.user.id, this.competencyId)
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
  this.userProductionCompetencyService.getCategoryFourResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryFourResults = res;
      this.spinner.hide();
      this.dataIsIncomplete = false;
      this.result4Done = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 6100);
    }
  )
}

//#endregion

}
