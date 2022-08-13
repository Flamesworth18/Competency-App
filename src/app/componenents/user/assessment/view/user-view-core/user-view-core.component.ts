import { CategoryResult } from '../../../../../models/competency/category-results.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserCoreCompetencyService } from '../../../../../services/user-core-competency.service';
import { CoreCompetencyCategories } from '../../../../../competencies/core-competency';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryOptions } from 'src/app/models/competency/category-options.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-view-core',
  templateUrl: './user-view-core.component.html',
  styleUrls: ['./user-view-core.component.scss']
})
export class UserViewCoreComponent implements OnInit {

  coreCompetencyCategories = CoreCompetencyCategories

  currentCompetency = 'Core Competency 1';
  
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

  notScrollable = true;
  dataIsIncomplete = true;
  showAlert = true;

  option1Done = false;
  result1Done = false;
  option2Done = false;
  result2Done = false;
  option3Done = false;
  result3Done = false;

  isLoading = false;

  @ViewChild('core1') core1 !: ElementRef;
  @ViewChild('core2') core2 !: ElementRef;
  @ViewChild('core3') core3 !: ElementRef;
  @ViewChild('top') top !: ElementRef;

  constructor(
    private router: Router,
    private userCoreCompetencyService :UserCoreCompetencyService,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.competencyId = sessionStorage.getItem('competencyId') || '';
    this.competencyEmployeeName = sessionStorage.getItem('competencyEmployeeName') || '';
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

    if(section === "core1"){
      this.core1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "core2"){
      this.core2.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    if(section === "core3"){
      this.core3.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
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

//#region GET CORE COMPETENCY ONE DATA
  getCategoryOneOptions(){
    this.userCoreCompetencyService.getCategoryOneOptions(this.authService.user.id, this.competencyId)
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
    this.userCoreCompetencyService.getCategoryOneResults(this.authService.user.id, this.competencyId)
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

//#region GET CORE COMPETENCY TWO DATA
  getCategoryTwoOptions(){
    this.userCoreCompetencyService.getCategoryTwoOptions(this.authService.user.id, this.competencyId)
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
    this.userCoreCompetencyService.getCategoryTwoResults(this.authService.user.id, this.competencyId)
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

//#region GET CORE COMPETENCY THREE DATA
  getCategoryThreeOptions(){
    this.userCoreCompetencyService.getCategoryThreeOptions(this.authService.user.id, this.competencyId)
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
    this.userCoreCompetencyService.getCategoryTwoResults(this.authService.user.id, this.competencyId)
    .subscribe(
      res => {
        this.categoryThreeResults = res;
        this.spinner.hide();
        this.dataIsIncomplete = false;
        this.result3Done = true;

        setTimeout(() => {
          this.showAlert = false;
        }, 6100);
      }
    )
  }
//#endregion
}
