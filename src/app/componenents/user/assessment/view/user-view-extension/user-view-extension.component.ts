import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExtensionCompetencyCategories } from 'src/app/competencies/extension-competency';
import { CategoryOptions } from 'src/app/models/competency/category-options.model';
import { CategoryResult } from 'src/app/models/competency/category-results.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserExtensionCompetencyService } from 'src/app/services/user-extension-competency.service';

@Component({
  selector: 'app-user-view-extension',
  templateUrl: './user-view-extension.component.html',
  styleUrls: ['./user-view-extension.component.scss']
})
export class UserViewExtensionComponent implements OnInit {

  extensionCompetencyCategories = ExtensionCompetencyCategories;

  currentCompetency = 'Extension Competency 1';

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
    
  categorySixOptions: CategoryOptions = {
    basicOptions: [],
    intermediateOptions: [],
    advancedOptions: [],
    superiorOptions: []
  }
  categorySixResults: CategoryResult = {
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
  option6Done = false;
  result6Done = false;

  isLoading = false;
  
  @ViewChild('extension1') extension1 !: ElementRef;
  @ViewChild('extension2') extension2 !: ElementRef;
  @ViewChild('extension3') extension3 !: ElementRef;
  @ViewChild('extension4') extension4 !: ElementRef;
  @ViewChild('extension5') extension5 !: ElementRef;
  @ViewChild('extension6') extension6 !: ElementRef;
  @ViewChild('top') top !: ElementRef;

  constructor(
    private router: Router,
    private userExtensionCompetencyService: UserExtensionCompetencyService,
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

    if(section === "extension1"){
      this.extension1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "extension2"){
      this.extension2.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "extension3"){
      this.extension3.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "extension4"){
      this.extension4.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "extension5"){
      this.extension5.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "extension6"){
      this.extension6.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
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
  this.userExtensionCompetencyService.getCategoryOneOptions(this.authService.user.id, this.competencyId)
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
  this.userExtensionCompetencyService.getCategoryOneResults(this.authService.user.id, this.competencyId)
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
  this.userExtensionCompetencyService.getCategoryTwoOptions(this.authService.user.id, this.competencyId)
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
  this.userExtensionCompetencyService.getCategoryTwoResults(this.authService.user.id, this.competencyId)
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
  this.userExtensionCompetencyService.getCategoryThreeOptions(this.authService.user.id, this.competencyId)
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
  this.userExtensionCompetencyService.getCategoryThreeResults(this.authService.user.id, this.competencyId)
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
  this.userExtensionCompetencyService.getCategoryFourOptions(this.authService.user.id, this.competencyId)
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
  this.userExtensionCompetencyService.getCategoryFourResults(this.authService.user.id, this.competencyId)
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

//#region GET INSTRUCTION COMPETENCY FIVE DATA
getCategoryFiveOptions(){
  this.userExtensionCompetencyService.getCategoryFiveOptions(this.authService.user.id, this.competencyId)
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
  this.userExtensionCompetencyService.getCategoryFiveResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categoryFiveResults = res;

      setTimeout(() => {
        this.getCategorySixOptions();
        this.result5Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
//#endregion


//#endregion

//#region GET INSTRUCTION COMPETENCY SIX DATA
getCategorySixOptions(){
  this.userExtensionCompetencyService.getCategorySixOptions(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categorySixOptions = res;

      setTimeout(() => {
        this.getCategorySixResults();
        this.option6Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
getCategorySixResults(){
  this.userExtensionCompetencyService.getCategorySixResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categorySixResults = res;
      this.spinner.hide();
      this.dataIsIncomplete = false;
      this.result6Done = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 6100);
    }
  )
}

//#endregion

}
