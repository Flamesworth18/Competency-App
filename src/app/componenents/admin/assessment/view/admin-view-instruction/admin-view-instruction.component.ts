import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { InstructionCompetencyCategories } from 'src/app/competencies/instruction-competency';
import { InstructionCompetency } from 'src/app/models/competency/instruction-competency.model';
import { InstructionCompetencyService } from 'src/app/services/instruction-competency.service';

@Component({
  selector: 'app-admin-view-instruction',
  templateUrl: './admin-view-instruction.component.html',
  styleUrls: ['./admin-view-instruction.component.scss']
})
export class AdminViewInstructionComponent implements OnInit {

  instructionCompetencyCategories = InstructionCompetencyCategories;

  currentCompetency = 'Instruction Competency 1';
  
  competency: InstructionCompetency = {
    id: '',
    competencyName: '',
    employeeName: '',
    department: '',
    college: '',
    oneBasicOptions: [],
    oneIntermediateOptions: [],
    oneAdvancedOptions: [],
    oneSuperiorOptions: [],
    oneBasicResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    oneIntermediateResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    oneAdvancedResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    oneSuperiorResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    oneEssay: '',
    twoBasicOptions: [],
    twoIntermediateOptions: [],
    twoAdvancedOptions: [],
    twoSuperiorOptions: [],
    twoBasicResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    twoIntermediateResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    twoAdvancedResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    twoSuperiorResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    twoEssay: '',
    threeBasicOptions: [],
    threeIntermediateOptions: [],
    threeAdvancedOptions: [],
    threeSuperiorOptions: [],
    threeBasicResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    threeIntermediateResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    threeAdvancedResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    threeSuperiorResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    threeEssay: '',
    fourBasicOptions: [],
    fourIntermediateOptions: [],
    fourAdvancedOptions: [],
    fourSuperiorOptions: [],
    fourBasicResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    fourIntermediateResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    fourAdvancedResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    fourSuperiorResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    fourEssay: '',
    fiveBasicOptions: [],
    fiveIntermediateOptions: [],
    fiveAdvancedOptions: [],
    fiveSuperiorOptions: [],
    fiveBasicResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    fiveIntermediateResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    fiveAdvancedResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    fiveSuperiorResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    fiveEssay: '',
    sixBasicOptions: [],
    sixIntermediateOptions: [],
    sixAdvancedOptions: [],
    sixSuperiorOptions: [],
    sixBasicResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    sixIntermediateResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    sixAdvancedResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    sixSuperiorResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    sixEssay: '',
    sevenBasicOptions: [],
    sevenIntermediateOptions: [],
    sevenAdvancedOptions: [],
    sevenSuperiorOptions: [],
    sevenBasicResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    sevenIntermediateResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    sevenAdvancedResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    sevenSuperiorResult: {
      id: '00000000-0000-0000-0000-000000000000',
      notYet: false,
      partially: false,
      competent: false
    },
    sevenEssay: '',
    dateCreated: '',
    timeCreated: ''
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
    private instructionCompetencyService: InstructionCompetencyService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {

    this.competency.id = sessionStorage.getItem('adminCompetencyId') || '';
    this.competency.employeeName = sessionStorage.getItem('adminCompetencyEmployeeName') || '';
    this.competency.department = sessionStorage.getItem('adminCompetencyDepartment') || '';
    this.competency.college = sessionStorage.getItem('adminCompetencyCollege') || '';
    this.competency.competencyName = "Leadership Competency"

  }

  selectedCoreCompetency(name: string){
    this.currentCompetency = name;
  }

  navigateToTakenAssessments(){
    this.router.navigate(['/admin-assessment-list']);
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

  //SAVE UPDATED INSTRUCTION COMPETENCY
  saveUpdate(){
    
    this.updateCompetencyOne();

  }

  //#region GET INSTRUCTION COMPETENCY ONE DATA
  getCategoryOneOptions(){
    this.instructionCompetencyService.getCategoryOneOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.oneBasicOptions = res.basicOptions;
        this.competency.oneIntermediateOptions = res.intermediateOptions;
        this.competency.oneAdvancedOptions = res.advancedOptions;
        this.competency.oneSuperiorOptions = res.superiorOptions;

        setTimeout(() => {
          this.getCategoryOneResults();
          this.option1Done = true;
          this.notScrollable = true;
        }, 5000);
      }
    )
  }
  getCategoryOneResults(){
    this.instructionCompetencyService.getCategoryOneResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.oneBasicResult = res.basicResult;
        this.competency.oneIntermediateResult = res.intermediateResult;
        this.competency.oneAdvancedResult = res.advancedResult;
        this.competency.oneSuperiorResult = res.superiorResult;
        this.competency.oneEssay = res.essay;

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
    this.instructionCompetencyService.getCategoryTwoOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.twoBasicOptions = res.basicOptions;
        this.competency.twoIntermediateOptions = res.intermediateOptions;
        this.competency.twoAdvancedOptions = res.advancedOptions;
        this.competency.twoSuperiorOptions = res.superiorOptions;

        setTimeout(() => {
          this.getCategoryTwoResults();
          this.option2Done = true;
          this.notScrollable = true;
        }, 5000);
      }
    )
  }
  getCategoryTwoResults(){
    this.instructionCompetencyService.getCategoryTwoResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.twoBasicResult = res.basicResult;
        this.competency.twoIntermediateResult = res.intermediateResult;
        this.competency.twoAdvancedResult = res.advancedResult;
        this.competency.twoSuperiorResult = res.superiorResult;
        this.competency.twoEssay = res.essay;

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
    this.instructionCompetencyService.getCategoryThreeOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.threeBasicOptions = res.basicOptions;
        this.competency.threeIntermediateOptions = res.intermediateOptions;
        this.competency.threeAdvancedOptions = res.advancedOptions;
        this.competency.threeSuperiorOptions = res.superiorOptions;

        setTimeout(() => {
          this.getCategoryThreeResults();
          this.option3Done = true;
          this.notScrollable = true;
        }, 5000);
      }
    )
  }
  getCategoryThreeResults(){
    this.instructionCompetencyService.getCategoryThreeResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.threeBasicResult = res.basicResult;
        this.competency.threeIntermediateResult = res.intermediateResult;
        this.competency.threeAdvancedResult = res.advancedResult;
        this.competency.threeSuperiorResult = res.superiorResult;
        this.competency.threeEssay = res.essay;

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
    this.instructionCompetencyService.getCategoryFourOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.fourBasicOptions = res.basicOptions;
        this.competency.fourIntermediateOptions = res.intermediateOptions;
        this.competency.fourAdvancedOptions = res.advancedOptions;
        this.competency.fourSuperiorOptions = res.superiorOptions;

        setTimeout(() => {
          this.getCategoryFourResults();
          this.option4Done = true;
          this.notScrollable = true;
        }, 5000);
      }
    )
  }
  getCategoryFourResults(){
    this.instructionCompetencyService.getCategoryFourResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.fourBasicResult = res.basicResult;
        this.competency.fourIntermediateResult = res.intermediateResult;
        this.competency.fourAdvancedResult = res.advancedResult;
        this.competency.fourSuperiorResult = res.superiorResult;
        this.competency.fourEssay = res.essay;

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
    this.instructionCompetencyService.getCategoryFiveOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.fiveBasicOptions = res.basicOptions;
        this.competency.fiveIntermediateOptions = res.intermediateOptions;
        this.competency.fiveAdvancedOptions = res.advancedOptions;
        this.competency.fiveSuperiorOptions = res.superiorOptions;

        setTimeout(() => {
          this.getCategoryFiveResults();
          this.option5Done = true;
          this.notScrollable = true;
        }, 5000);
      }
    )
  }
  getCategoryFiveResults(){
    this.instructionCompetencyService.getCategoryFiveResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.fiveBasicResult = res.basicResult;
        this.competency.fiveIntermediateResult = res.intermediateResult;
        this.competency.fiveAdvancedResult = res.advancedResult;
        this.competency.fiveSuperiorResult = res.superiorResult;
        this.competency.fiveEssay = res.essay;

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
    this.instructionCompetencyService.getCategorySixOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.sixBasicOptions = res.basicOptions;
        this.competency.sixIntermediateOptions = res.intermediateOptions;
        this.competency.sixAdvancedOptions = res.advancedOptions;
        this.competency.sixSuperiorOptions = res.superiorOptions;

        setTimeout(() => {
          this.getCategorySixResults();
          this.option6Done = true;
          this.notScrollable = true;
        }, 5000);
      }
    )
  }
  getCategorySixResults(){
    this.instructionCompetencyService.getCategorySixResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.sixBasicResult = res.basicResult;
        this.competency.sixIntermediateResult = res.intermediateResult;
        this.competency.sixAdvancedResult = res.advancedResult;
        this.competency.sixSuperiorResult = res.superiorResult;
        this.competency.sixEssay = res.essay;

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
    this.instructionCompetencyService.getCategorySevenOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.sevenBasicOptions = res.basicOptions;
        this.competency.sevenIntermediateOptions = res.intermediateOptions;
        this.competency.sevenAdvancedOptions = res.advancedOptions;
        this.competency.sevenSuperiorOptions = res.superiorOptions;

        setTimeout(() => {
          this.getCategorySevenResults();
          this.option7Done = true;
          this.notScrollable = true;
        }, 5000);
      }
    )
  }
  getCategorySevenResults(){
    this.instructionCompetencyService.getCategorySevenResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.sevenBasicResult = res.basicResult;
        this.competency.sevenIntermediateResult = res.intermediateResult;
        this.competency.sevenAdvancedResult = res.advancedResult;
        this.competency.sevenSuperiorResult = res.superiorResult;
        this.competency.sevenEssay = res.essay;

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
  

  //#region INSTRUCTION 1 OPTIONS CHANGED
  oneBasicOptionsChanged(){
    var basicOptions = this.competency.oneBasicOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.competency.oneBasicResult.competent = true;

      this.competency.oneBasicResult.partially = false;
      this.competency.oneBasicResult.notYet = false;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.competency.oneBasicResult.partially = true;

      this.competency.oneBasicResult.competent = false;
      this.competency.oneBasicResult.notYet = false;
    }
    else if(basicScore.length <= 2){
      this.competency.oneBasicResult.notYet = true;
      
      this.competency.oneBasicResult.competent = false;
      this.competency.oneBasicResult.partially = false;
    }
    //#endregion
  }

  oneIntermediateOptionsChanged(){
    var intermediateOptions = this.competency.oneIntermediateOptions;

    var intermediateScore = intermediateOptions.filter(o => o.isChecked);

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.competency.oneIntermediateResult.competent = true;

      this.competency.oneIntermediateResult.partially = false;
      this.competency.oneIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.competency.oneIntermediateResult.partially = true;
      
      this.competency.oneIntermediateResult.competent = false;
      this.competency.oneIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length <= 2){
      this.competency.oneIntermediateResult.notYet = true;

      this.competency.oneIntermediateResult.competent = false;
      this.competency.oneIntermediateResult.partially = false;
    }
    //#endregion

  }

  oneAdvancedOptionsChanged(){
    var advancedOptions = this.competency.oneAdvancedOptions;

    var advancedScore = advancedOptions.filter(o => o.isChecked);

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.competency.oneAdvancedResult.competent = true;

      this.competency.oneAdvancedResult.partially = false;
      this.competency.oneAdvancedResult.notYet = false;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.competency.oneAdvancedResult.partially = true;
      
      this.competency.oneAdvancedResult.competent = false;
      this.competency.oneAdvancedResult.notYet = false;
    }
    else if(advancedScore.length <= 2){
      this.competency.oneAdvancedResult.notYet = true;

      this.competency.oneAdvancedResult.competent = false;
      this.competency.oneAdvancedResult.partially = false;
    }
    //#endregion

  }

  oneSuperiorOptionsChanged(){
    var superiorOptions = this.competency.oneSuperiorOptions;

    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.competency.oneSuperiorResult.competent = true;

      this.competency.oneSuperiorResult.partially = false;
      this.competency.oneSuperiorResult.notYet = false;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.competency.oneSuperiorResult.partially = true;
      
      this.competency.oneSuperiorResult.competent = false;
      this.competency.oneSuperiorResult.notYet = false;
    }
    else if(superiorScore.length <= 2){
      this.competency.oneSuperiorResult.notYet = true;

      this.competency.oneSuperiorResult.competent = false;
      this.competency.oneSuperiorResult.partially = false;
    }
    //#endregion

  }
//#endregion
  
  //#region INSTRUCTION 2 OPTIONS CHANGED
  twoBasicOptionsChanged(){
    var basicOptions = this.competency.twoBasicOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.competency.twoBasicResult.competent = true;

      this.competency.twoBasicResult.partially = false;
      this.competency.twoBasicResult.notYet = false;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.competency.twoBasicResult.partially = true;

      this.competency.twoBasicResult.competent = false;
      this.competency.twoBasicResult.notYet = false;
    }
    else if(basicScore.length <= 2){
      this.competency.twoBasicResult.notYet = true;
      
      this.competency.twoBasicResult.competent = false;
      this.competency.twoBasicResult.partially = false;
    }
    //#endregion
  }

  twoIntermediateOptionsChanged(){
    var intermediateOptions = this.competency.twoIntermediateOptions;

    var intermediateScore = intermediateOptions.filter(o => o.isChecked);

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.competency.twoIntermediateResult.competent = true;

      this.competency.twoIntermediateResult.partially = false;
      this.competency.twoIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.competency.twoIntermediateResult.partially = true;
      
      this.competency.twoIntermediateResult.competent = false;
      this.competency.twoIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length <= 2){
      this.competency.twoIntermediateResult.notYet = true;

      this.competency.twoIntermediateResult.competent = false;
      this.competency.twoIntermediateResult.partially = false;
    }
    //#endregion

  }

  twoAdvancedOptionsChanged(){
    var advancedOptions = this.competency.twoAdvancedOptions;

    var advancedScore = advancedOptions.filter(o => o.isChecked);

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.competency.twoAdvancedResult.competent = true;

      this.competency.twoAdvancedResult.partially = false;
      this.competency.twoAdvancedResult.notYet = false;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.competency.twoAdvancedResult.partially = true;
      
      this.competency.twoAdvancedResult.competent = false;
      this.competency.twoAdvancedResult.notYet = false;
    }
    else if(advancedScore.length <= 2){
      this.competency.twoAdvancedResult.notYet = true;

      this.competency.twoAdvancedResult.competent = false;
      this.competency.twoAdvancedResult.partially = false;
    }
    //#endregion

  }

  twoSuperiorOptionsChanged(){
    var superiorOptions = this.competency.twoSuperiorOptions;

    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.competency.twoSuperiorResult.competent = true;

      this.competency.twoSuperiorResult.partially = false;
      this.competency.twoSuperiorResult.notYet = false;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.competency.twoSuperiorResult.partially = true;
      
      this.competency.twoSuperiorResult.competent = false;
      this.competency.twoSuperiorResult.notYet = false;
    }
    else if(superiorScore.length <= 2){
      this.competency.twoSuperiorResult.notYet = true;

      this.competency.twoSuperiorResult.competent = false;
      this.competency.twoSuperiorResult.partially = false;
    }
    //#endregion

  }
//#endregion
  
  //#region INSTRUCTION 3 OPTIONS CHANGED
  threeBasicOptionsChanged(){
    var basicOptions = this.competency.threeBasicOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.competency.threeBasicResult.competent = true;

      this.competency.threeBasicResult.partially = false;
      this.competency.threeBasicResult.notYet = false;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.competency.threeBasicResult.partially = true;

      this.competency.threeBasicResult.competent = false;
      this.competency.threeBasicResult.notYet = false;
    }
    else if(basicScore.length <= 2){
      this.competency.threeBasicResult.notYet = true;
      
      this.competency.threeBasicResult.competent = false;
      this.competency.threeBasicResult.partially = false;
    }
    //#endregion
  }

  threeIntermediateOptionsChanged(){
    var intermediateOptions = this.competency.threeIntermediateOptions;

    var intermediateScore = intermediateOptions.filter(o => o.isChecked);

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.competency.threeIntermediateResult.competent = true;

      this.competency.threeIntermediateResult.partially = false;
      this.competency.threeIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.competency.threeIntermediateResult.partially = true;
      
      this.competency.threeIntermediateResult.competent = false;
      this.competency.threeIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length <= 2){
      this.competency.threeIntermediateResult.notYet = true;

      this.competency.threeIntermediateResult.competent = false;
      this.competency.threeIntermediateResult.partially = false;
    }
    //#endregion

  }

  threeAdvancedOptionsChanged(){
    var advancedOptions = this.competency.threeAdvancedOptions;

    var advancedScore = advancedOptions.filter(o => o.isChecked);

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.competency.threeAdvancedResult.competent = true;

      this.competency.threeAdvancedResult.partially = false;
      this.competency.threeAdvancedResult.notYet = false;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.competency.threeAdvancedResult.partially = true;
      
      this.competency.threeAdvancedResult.competent = false;
      this.competency.threeAdvancedResult.notYet = false;
    }
    else if(advancedScore.length <= 2){
      this.competency.threeAdvancedResult.notYet = true;

      this.competency.threeAdvancedResult.competent = false;
      this.competency.threeAdvancedResult.partially = false;
    }
    //#endregion

  }

  threeSuperiorOptionsChanged(){
    var superiorOptions = this.competency.threeSuperiorOptions;

    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.competency.threeSuperiorResult.competent = true;

      this.competency.threeSuperiorResult.partially = false;
      this.competency.threeSuperiorResult.notYet = false;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.competency.threeSuperiorResult.partially = true;
      
      this.competency.threeSuperiorResult.competent = false;
      this.competency.threeSuperiorResult.notYet = false;
    }
    else if(superiorScore.length <= 2){
      this.competency.threeSuperiorResult.notYet = true;

      this.competency.threeSuperiorResult.competent = false;
      this.competency.threeSuperiorResult.partially = false;
    }
    //#endregion

  }
//#endregion
  
  //#region INSTRUCTION 4 OPTIONS CHANGED
  fourBasicOptionsChanged(){
    var basicOptions = this.competency.fourBasicOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.competency.fourBasicResult.competent = true;

      this.competency.fourBasicResult.partially = false;
      this.competency.fourBasicResult.notYet = false;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.competency.fourBasicResult.partially = true;

      this.competency.fourBasicResult.competent = false;
      this.competency.fourBasicResult.notYet = false;
    }
    else if(basicScore.length <= 2){
      this.competency.fourBasicResult.notYet = true;
      
      this.competency.fourBasicResult.competent = false;
      this.competency.fourBasicResult.partially = false;
    }
    //#endregion
  }

  fourIntermediateOptionsChanged(){
    var intermediateOptions = this.competency.fourIntermediateOptions;

    var intermediateScore = intermediateOptions.filter(o => o.isChecked);

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.competency.fourIntermediateResult.competent = true;

      this.competency.fourIntermediateResult.partially = false;
      this.competency.fourIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.competency.fourIntermediateResult.partially = true;
      
      this.competency.fourIntermediateResult.competent = false;
      this.competency.fourIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length <= 2){
      this.competency.fourIntermediateResult.notYet = true;

      this.competency.fourIntermediateResult.competent = false;
      this.competency.fourIntermediateResult.partially = false;
    }
    //#endregion

  }

  fourAdvancedOptionsChanged(){
    var advancedOptions = this.competency.fourAdvancedOptions;

    var advancedScore = advancedOptions.filter(o => o.isChecked);

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.competency.fourAdvancedResult.competent = true;

      this.competency.fourAdvancedResult.partially = false;
      this.competency.fourAdvancedResult.notYet = false;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.competency.fourAdvancedResult.partially = true;
      
      this.competency.fourAdvancedResult.competent = false;
      this.competency.fourAdvancedResult.notYet = false;
    }
    else if(advancedScore.length <= 2){
      this.competency.fourAdvancedResult.notYet = true;

      this.competency.fourAdvancedResult.competent = false;
      this.competency.fourAdvancedResult.partially = false;
    }
    //#endregion

  }

  fourSuperiorOptionsChanged(){
    var superiorOptions = this.competency.fourSuperiorOptions;

    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.competency.fourSuperiorResult.competent = true;

      this.competency.fourSuperiorResult.partially = false;
      this.competency.fourSuperiorResult.notYet = false;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.competency.fourSuperiorResult.partially = true;
      
      this.competency.fourSuperiorResult.competent = false;
      this.competency.fourSuperiorResult.notYet = false;
    }
    else if(superiorScore.length <= 2){
      this.competency.fourSuperiorResult.notYet = true;

      this.competency.fourSuperiorResult.competent = false;
      this.competency.fourSuperiorResult.partially = false;
    }
    //#endregion

  }
//#endregion
  
  //#region INSTRUCTION 5 OPTIONS CHANGED
  fiveBasicOptionsChanged(){
    var basicOptions = this.competency.fiveBasicOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.competency.fiveBasicResult.competent = true;

      this.competency.fiveBasicResult.partially = false;
      this.competency.fiveBasicResult.notYet = false;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.competency.fiveBasicResult.partially = true;

      this.competency.fiveBasicResult.competent = false;
      this.competency.fiveBasicResult.notYet = false;
    }
    else if(basicScore.length <= 2){
      this.competency.fiveBasicResult.notYet = true;
      
      this.competency.fiveBasicResult.competent = false;
      this.competency.fiveBasicResult.partially = false;
    }
    //#endregion
  }

  fiveIntermediateOptionsChanged(){
    var intermediateOptions = this.competency.fiveIntermediateOptions;

    var intermediateScore = intermediateOptions.filter(o => o.isChecked);

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.competency.fiveIntermediateResult.competent = true;

      this.competency.fiveIntermediateResult.partially = false;
      this.competency.fiveIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.competency.fiveIntermediateResult.partially = true;
      
      this.competency.fiveIntermediateResult.competent = false;
      this.competency.fiveIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length <= 2){
      this.competency.fiveIntermediateResult.notYet = true;

      this.competency.fiveIntermediateResult.competent = false;
      this.competency.fiveIntermediateResult.partially = false;
    }
    //#endregion

  }

  fiveAdvancedOptionsChanged(){
    var advancedOptions = this.competency.fiveAdvancedOptions;

    var advancedScore = advancedOptions.filter(o => o.isChecked);

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.competency.fiveAdvancedResult.competent = true;

      this.competency.fiveAdvancedResult.partially = false;
      this.competency.fiveAdvancedResult.notYet = false;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.competency.fiveAdvancedResult.partially = true;
      
      this.competency.fiveAdvancedResult.competent = false;
      this.competency.fiveAdvancedResult.notYet = false;
    }
    else if(advancedScore.length <= 2){
      this.competency.fiveAdvancedResult.notYet = true;

      this.competency.fiveAdvancedResult.competent = false;
      this.competency.fiveAdvancedResult.partially = false;
    }
    //#endregion

  }

  fiveSuperiorOptionsChanged(){
    var superiorOptions = this.competency.fiveSuperiorOptions;

    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.competency.fiveSuperiorResult.competent = true;

      this.competency.fiveSuperiorResult.partially = false;
      this.competency.fiveSuperiorResult.notYet = false;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.competency.fiveSuperiorResult.partially = true;
      
      this.competency.fiveSuperiorResult.competent = false;
      this.competency.fiveSuperiorResult.notYet = false;
    }
    else if(superiorScore.length <= 2){
      this.competency.fiveSuperiorResult.notYet = true;

      this.competency.fiveSuperiorResult.competent = false;
      this.competency.fiveSuperiorResult.partially = false;
    }
    //#endregion

  }
//#endregion
  
  //#region INSTRUCTION 6 OPTIONS CHANGED
  sixBasicOptionsChanged(){
    var basicOptions = this.competency.sixBasicOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.competency.sixBasicResult.competent = true;

      this.competency.sixBasicResult.partially = false;
      this.competency.sixBasicResult.notYet = false;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.competency.sixBasicResult.partially = true;

      this.competency.sixBasicResult.competent = false;
      this.competency.sixBasicResult.notYet = false;
    }
    else if(basicScore.length <= 2){
      this.competency.sixBasicResult.notYet = true;
      
      this.competency.sixBasicResult.competent = false;
      this.competency.sixBasicResult.partially = false;
    }
    //#endregion
  }

  sixIntermediateOptionsChanged(){
    var intermediateOptions = this.competency.sixIntermediateOptions;

    var intermediateScore = intermediateOptions.filter(o => o.isChecked);

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.competency.sixIntermediateResult.competent = true;

      this.competency.sixIntermediateResult.partially = false;
      this.competency.sixIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.competency.sixIntermediateResult.partially = true;
      
      this.competency.sixIntermediateResult.competent = false;
      this.competency.sixIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length <= 2){
      this.competency.sixIntermediateResult.notYet = true;

      this.competency.sixIntermediateResult.competent = false;
      this.competency.sixIntermediateResult.partially = false;
    }
    //#endregion

  }

  sixAdvancedOptionsChanged(){
    var advancedOptions = this.competency.sixAdvancedOptions;

    var advancedScore = advancedOptions.filter(o => o.isChecked);

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.competency.sixAdvancedResult.competent = true;

      this.competency.sixAdvancedResult.partially = false;
      this.competency.sixAdvancedResult.notYet = false;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.competency.sixAdvancedResult.partially = true;
      
      this.competency.sixAdvancedResult.competent = false;
      this.competency.sixAdvancedResult.notYet = false;
    }
    else if(advancedScore.length <= 2){
      this.competency.sixAdvancedResult.notYet = true;

      this.competency.sixAdvancedResult.competent = false;
      this.competency.sixAdvancedResult.partially = false;
    }
    //#endregion

  }

  sixSuperiorOptionsChanged(){
    var superiorOptions = this.competency.sixSuperiorOptions;

    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.competency.sixSuperiorResult.competent = true;

      this.competency.sixSuperiorResult.partially = false;
      this.competency.sixSuperiorResult.notYet = false;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.competency.sixSuperiorResult.partially = true;
      
      this.competency.sixSuperiorResult.competent = false;
      this.competency.sixSuperiorResult.notYet = false;
    }
    else if(superiorScore.length <= 2){
      this.competency.sixSuperiorResult.notYet = true;

      this.competency.sixSuperiorResult.competent = false;
      this.competency.sixSuperiorResult.partially = false;
    }
    //#endregion

  }
//#endregion
  
  //#region INSTRUCTION 7 OPTIONS CHANGED
  sevenBasicOptionsChanged(){
    var basicOptions = this.competency.sevenBasicOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.competency.sevenBasicResult.competent = true;

      this.competency.sevenBasicResult.partially = false;
      this.competency.sevenBasicResult.notYet = false;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.competency.sevenBasicResult.partially = true;

      this.competency.sevenBasicResult.competent = false;
      this.competency.sevenBasicResult.notYet = false;
    }
    else if(basicScore.length <= 2){
      this.competency.sevenBasicResult.notYet = true;
      
      this.competency.sevenBasicResult.competent = false;
      this.competency.sevenBasicResult.partially = false;
    }
    //#endregion
  }

  sevenIntermediateOptionsChanged(){
    var intermediateOptions = this.competency.sevenIntermediateOptions;

    var intermediateScore = intermediateOptions.filter(o => o.isChecked);

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.competency.sevenIntermediateResult.competent = true;

      this.competency.sevenIntermediateResult.partially = false;
      this.competency.sevenIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.competency.sevenIntermediateResult.partially = true;
      
      this.competency.sevenIntermediateResult.competent = false;
      this.competency.sevenIntermediateResult.notYet = false;
    }
    else if(intermediateScore.length <= 2){
      this.competency.sevenIntermediateResult.notYet = true;

      this.competency.sevenIntermediateResult.competent = false;
      this.competency.sevenIntermediateResult.partially = false;
    }
    //#endregion

  }

  sevenAdvancedOptionsChanged(){
    var advancedOptions = this.competency.sevenAdvancedOptions;

    var advancedScore = advancedOptions.filter(o => o.isChecked);

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.competency.sevenAdvancedResult.competent = true;

      this.competency.sevenAdvancedResult.partially = false;
      this.competency.sevenAdvancedResult.notYet = false;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.competency.sevenAdvancedResult.partially = true;
  
      this.competency.sevenAdvancedResult.competent = false;
      this.competency.sevenAdvancedResult.notYet = false;
    }
    else if(advancedScore.length <= 2){
      this.competency.sevenAdvancedResult.notYet = true;

      this.competency.sevenAdvancedResult.competent = false;
      this.competency.sevenAdvancedResult.partially = false;
    }
    //#endregion

  }

  sevenSuperiorOptionsChanged(){
    var superiorOptions = this.competency.sevenSuperiorOptions;

    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.competency.sevenSuperiorResult.competent = true;

      this.competency.sevenSuperiorResult.partially = false;
      this.competency.sevenSuperiorResult.notYet = false;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.competency.sevenSuperiorResult.partially = true;
      
      this.competency.sevenSuperiorResult.competent = false;
      this.competency.sevenSuperiorResult.notYet = false;
    }
    else if(superiorScore.length <= 2){
      this.competency.sevenSuperiorResult.notYet = true;

      this.competency.sevenSuperiorResult.competent = false;
      this.competency.sevenSuperiorResult.partially = false;
    }
    //#endregion

  }
//#endregion

  //#region UPDATE

  updateCompetencyOne(){
    this.instructionCompetencyService.updateCompetencyOne(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencyTwo();
      }
    )
  }

  updateCompetencyTwo(){
    this.instructionCompetencyService.updateCompetencyTwo(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencyThree();
      }
    )
  }
  
  updateCompetencyThree(){
    this.instructionCompetencyService.updateCompetencyThree(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencyFour();
      }
    )
  }
    
  updateCompetencyFour(){
    this.instructionCompetencyService.updateCompetencyFour(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencyFive();
      }
    )
  }

  updateCompetencyFive(){
    this.instructionCompetencyService.updateCompetencyFive(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencySix();
      }
    )
  }

  updateCompetencySix(){
    this.instructionCompetencyService.updateCompetencySix(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencySeven();
      }
    )
  }

  updateCompetencySeven(){
    this.instructionCompetencyService.updateCompetencySeven(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.toastr.success("has been updated successfully", "Competency Form");
        sessionStorage.clear();
        this.router.navigate(['/admin-assessment-list']);
      }
    )
  }

//#endregion

}
