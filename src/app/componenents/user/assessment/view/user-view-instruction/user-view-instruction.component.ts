import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InstructionCompetencyCategories } from 'src/app/competencies/instruction-competency';
import { CategoryOptions } from 'src/app/models/competency/category-options.model';
import { CategoryResult } from 'src/app/models/competency/category-results.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserInstructionCompetencyService } from 'src/app/services/user-instruction-competency.service';

@Component({
  selector: 'app-user-view-instruction',
  templateUrl: './user-view-instruction.component.html',
  styleUrls: ['./user-view-instruction.component.scss']
})
export class UserViewInstructionComponent implements OnInit {

  instructionCompetencyCategories = InstructionCompetencyCategories;

  currentCompetency = 'Instruction Competency 1';

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
    
  categorySevenOptions: CategoryOptions = {
    basicOptions: [],
    intermediateOptions: [],
    advancedOptions: [],
    superiorOptions: []
  }
  categorySevenResults: CategoryResult = {
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
  option7Done = false;
  result7Done = false;

  isLoading = false;
  
  @ViewChild('leadership1') instruction1 !: ElementRef;
  @ViewChild('leadership2') instruction2 !: ElementRef;
  @ViewChild('leadership3') instruction3 !: ElementRef;
  @ViewChild('leadership4') instruction4 !: ElementRef;
  @ViewChild('leadership5') instruction5 !: ElementRef;
  @ViewChild('leadership6') instruction6 !: ElementRef;
  @ViewChild('leadership7') instruction7 !: ElementRef;
  @ViewChild('top') top !: ElementRef;

  constructor(
    private router: Router,
    private userInstructionCompetencyService :UserInstructionCompetencyService,
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

    if(section === "instruction1"){
      this.instruction1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "instruction2"){
      this.instruction2.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "instruction3"){
      this.instruction3.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "instruction4"){
      this.instruction4.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "instruction5"){
      this.instruction5.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "instruction6"){
      this.instruction6.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    else if(section === "instruction7"){
      this.instruction7.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
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
  this.userInstructionCompetencyService.getCategoryOneOptions(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryOneResults(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryTwoOptions(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryTwoResults(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryThreeOptions(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryThreeResults(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryFourOptions(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryFourResults(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryFiveOptions(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategoryFiveResults(this.authService.user.id, this.competencyId)
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

//#region GET INSTRUCTION COMPETENCY SIX DATA
getCategorySixOptions(){
  this.userInstructionCompetencyService.getCategorySixOptions(this.authService.user.id, this.competencyId)
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
  this.userInstructionCompetencyService.getCategorySixResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categorySixResults = res;

      setTimeout(() => {
        this.getCategorySevenOptions();
        this.result6Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}

//#endregion

//#region GET INSTRUCTION COMPETENCY SEVEN DATA
getCategorySevenOptions(){
  this.userInstructionCompetencyService.getCategorySevenOptions(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categorySevenOptions = res;

      setTimeout(() => {
        this.getCategorySevenResults();
        this.option7Done = true;
        this.notScrollable = true;
      }, 5000);
    }
  )
}
getCategorySevenResults(){
  this.userInstructionCompetencyService.getCategorySevenResults(this.authService.user.id, this.competencyId)
  .subscribe(
    res => {
      this.categorySevenResults = res;
      this.spinner.hide();
      this.dataIsIncomplete = false;
      this.result7Done = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 6100);
    }
  )
}

//#endregion

}
