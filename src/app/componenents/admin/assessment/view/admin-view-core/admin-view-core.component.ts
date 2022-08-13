import { ToastrService } from 'ngx-toastr';
import { CoreCompetencyService } from './../../../../../services/core-competency.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CoreCompetencyCategories } from 'src/app/competencies/core-competency';
import { NgxSpinnerService } from 'ngx-spinner';
import { CoreCompetency } from 'src/app/models/competency/core-competency.model';

@Component({
  selector: 'app-admin-view-core',
  templateUrl: './admin-view-core.component.html',
  styleUrls: ['./admin-view-core.component.scss']
})
export class AdminViewCoreComponent implements OnInit {
  
  coreCompetencyCategories = CoreCompetencyCategories

  currentCompetency = 'Core Competency 1';

  competency: CoreCompetency = {
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

  isLoading = false;

  @ViewChild('core1') core1 !: ElementRef;
  @ViewChild('core2') core2 !: ElementRef;
  @ViewChild('core3') core3 !: ElementRef;
  @ViewChild('top') top !: ElementRef;
  
  constructor(
    private router: Router,
    private coreCompetencyService: CoreCompetencyService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.competency.id = sessionStorage.getItem('adminCompetencyId') || '';
    this.competency.employeeName = sessionStorage.getItem('adminCompetencyEmployeeName') || '';
    this.competency.department = sessionStorage.getItem('adminCompetencyDepartment') || '';
    this.competency.college = sessionStorage.getItem('adminCompetencyCollege') || '';
    this.competency.competencyName = "Core Competency"

  }

  selectedCoreCompetency(name: string){
    this.currentCompetency = name;
  }

  navigateToTakenAssessments(){
    this.router.navigate(['/admin-assessment-list']);
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

  //SAVE UPDATED CORE COMPETENCY
  saveUpdate(){
    
    this.updateCompetencyOne();

  }

  //#region GET CORE COMPETENCY ONE DATA
  getCategoryOneOptions(){
    this.coreCompetencyService.getCategoryOneOptions(this.competency.id)
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
    this.coreCompetencyService.getCategoryOneResults(this.competency.id)
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

  //#region GET CORE COMPETENCY TWO DATA
  getCategoryTwoOptions(){
    this.coreCompetencyService.getCategoryTwoOptions(this.competency.id)
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
    this.coreCompetencyService.getCategoryTwoResults(this.competency.id)
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

  //#region GET CORE COMPETENCY THREE DATA
  getCategoryThreeOptions(){
    this.coreCompetencyService.getCategoryThreeOptions(this.competency.id)
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
    this.coreCompetencyService.getCategoryThreeResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.threeBasicResult = res.basicResult;
        this.competency.threeIntermediateResult = res.intermediateResult;
        this.competency.threeAdvancedResult = res.advancedResult;
        this.competency.threeSuperiorResult = res.superiorResult;
        this.competency.threeEssay = res.essay;

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

  //#region CORE 1 OPTIONS CHANGED
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

  //#region CORE 2 OPTIONS CHANGED
    twoBasicOptionsChanged(){
      var basicOptions = this.competency.twoBasicOptions;

      var basicScore = basicOptions.filter(o => o.isChecked);

      //#region BASIC
      if(basicScore.length >= 6){
        this.competency.twoBasicResult.competent = true;
      }
      else if(basicScore.length >= 3 && basicScore.length <= 5){
        this.competency.twoBasicResult.partially = true;
      }
      else if(basicScore.length <= 2){
        this.competency.twoBasicResult.notYet = true;
      }
      //#endregion

    }

    twoIntermediateOptionsChanged(){
      var intermediateOptions = this.competency.twoIntermediateOptions;

      var intermediateScore = intermediateOptions.filter(o => o.isChecked);

      //#region INTERMEDIATE
      if(intermediateScore.length >= 6){
        this.competency.twoIntermediateResult.competent = true;
      }
      else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
        this.competency.twoIntermediateResult.partially = true;
      }
      else if(intermediateScore.length <= 2){
        this.competency.twoIntermediateResult.notYet = true;
      }
      //#endregion
    }

    twoAdvancedOptionsChanged(){
      var advancedOptions = this.competency.twoAdvancedOptions;

      var advancedScore = advancedOptions.filter(o => o.isChecked);

      //#region ADVANCED
      if(advancedScore.length >= 6){
        this.competency.twoAdvancedResult.competent = true;
      }
      else if(advancedScore.length >= 3 && advancedScore.length <= 5){
        this.competency.twoAdvancedResult.partially = true;
      }
      else if(advancedScore.length <= 2){
        this.competency.twoAdvancedResult.notYet = true;
      }
      //#endregion

    }

    twoSuperiorOptionsChanged(){
      var superiorOptions = this.competency.twoSuperiorOptions;

      var superiorScore = superiorOptions.filter(o => o.isChecked);

      //#region SUPERIOR
      if(superiorScore.length >= 6){
        this.competency.twoSuperiorResult.competent = true;
      }
      else if(superiorScore.length >= 3 && superiorScore.length <= 5){
        this.competency.twoSuperiorResult.partially = true;
      }
      else if(superiorScore.length <= 2){
        this.competency.twoSuperiorResult.notYet = true;
      }
      //#endregion
    }
  //#endregion

  //#region CORE 3 OPTIONS CHANGED
    threeBasicOptionsChanged(){
      var basicOptions = this.competency.threeBasicOptions;
  
      var basicScore = basicOptions.filter(o => o.isChecked);

      //#region BASIC
      if(basicScore.length >= 6){
        this.competency.threeBasicResult.competent = true;
      }
      else if(basicScore.length >= 3 && basicScore.length <= 5){
        this.competency.threeBasicResult.partially = true;
      }
      else if(basicScore.length <= 2){
        this.competency.threeBasicResult.notYet = true;
      }
      //#endregion
    }

    threeIntermediateOptionsChanged(){
      var intermediateOptions = this.competency.threeIntermediateOptions;
  
      var intermediateScore = intermediateOptions.filter(o => o.isChecked);

      //#region INTERMEDIATE
      if(intermediateScore.length >= 6){
        this.competency.threeIntermediateResult.competent = true;
      }
      else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
        this.competency.threeIntermediateResult.partially = true;
      }
      else if(intermediateScore.length <= 2){
        this.competency.threeIntermediateResult.notYet = true;
      }
      //#endregion

    }

    threeAdvancedOptionsChanged(){
      var advancedOptions = this.competency.threeAdvancedOptions;
  
      var advancedScore = advancedOptions.filter(o => o.isChecked);

      //#region ADVANCED
      if(advancedScore.length >= 6){
        this.competency.threeAdvancedResult.competent = true;
      }
      else if(advancedScore.length >= 3 && advancedScore.length <= 5){
        this.competency.threeAdvancedResult.partially = true;
      }
      else if(advancedScore.length <= 2){
        this.competency.threeAdvancedResult.notYet = true;
      }
      //#endregion

    }

    threeSuperiorOptionsChanged(){
      var superiorOptions = this.competency.threeSuperiorOptions;

      var superiorScore = superiorOptions.filter(o => o.isChecked);
  
      //#region SUPERIOR
      if(superiorScore.length >= 6){
        this.competency.threeSuperiorResult.competent = true;
      }
      else if(superiorScore.length >= 3 && superiorScore.length <= 5){
        this.competency.threeSuperiorResult.partially = true;
      }
      else if(superiorScore.length <= 2){
        this.competency.threeSuperiorResult.notYet = true;
      }
      //#endregion
    }
  //#endregion

  //#region UPDATE

    updateCompetencyOne(){
      this.coreCompetencyService.updateCompetencyOne(this.competency.id, this.competency)
      .subscribe(
        res => {
          this.updateCompetencyTwo();
        }
      )
    }

    updateCompetencyTwo(){
      this.coreCompetencyService.updateCompetencyTwo(this.competency.id, this.competency)
      .subscribe(
        res => {
          this.updateCompetencyThree();
        }
      )
    }

    updateCompetencyThree(){
      this.coreCompetencyService.updateCompetencyThree(this.competency.id, this.competency)
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
