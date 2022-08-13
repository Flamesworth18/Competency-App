import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductionCompetencyCategories } from 'src/app/competencies/production-competency';
import { ProductionCompetency } from 'src/app/models/competency/production-competency.model';
import { ProductionCompetencyService } from 'src/app/services/production-competency.service';

@Component({
  selector: 'app-admin-view-production',
  templateUrl: './admin-view-production.component.html',
  styleUrls: ['./admin-view-production.component.scss']
})
export class AdminViewProductionComponent implements OnInit {

  productionCompetencyCategories = ProductionCompetencyCategories;

  currentCompetency = 'Production Competency 1';
  
  competency: ProductionCompetency = {
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

  isLoading = false;
  
  @ViewChild('production1') production1 !: ElementRef;
  @ViewChild('production2') production2 !: ElementRef;
  @ViewChild('production3') production3 !: ElementRef;
  @ViewChild('production4') production4 !: ElementRef;
  @ViewChild('top') top !: ElementRef;

  constructor(
    private router: Router,
    private productionCompetencyService: ProductionCompetencyService,
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

  //SAVE UPDATED PRODUCTION COMPETENCY
  saveUpdate(){
    
    this.updateCompetencyOne();

  }

  //#region GET PRODUCTION COMPETENCY ONE DATA
  getCategoryOneOptions(){
    this.productionCompetencyService.getCategoryOneOptions(this.competency.id)
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
    this.productionCompetencyService.getCategoryOneResults(this.competency.id)
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

  //#region GET RESEARCH COMPETENCY TWO DATA
  getCategoryTwoOptions(){
    this.productionCompetencyService.getCategoryTwoOptions(this.competency.id)
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
    this.productionCompetencyService.getCategoryTwoResults(this.competency.id)
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

  //#region GET RESEARCH COMPETENCY THREE DATA
  getCategoryThreeOptions(){
    this.productionCompetencyService.getCategoryThreeOptions(this.competency.id)
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
    this.productionCompetencyService.getCategoryThreeResults(this.competency.id)
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

  //#region GET RESEARCH COMPETENCY FOUR DATA
  getCategoryFourOptions(){
    this.productionCompetencyService.getCategoryFourOptions(this.competency.id)
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
    this.productionCompetencyService.getCategoryFourResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.fourBasicResult = res.basicResult;
        this.competency.fourIntermediateResult = res.intermediateResult;
        this.competency.fourAdvancedResult = res.advancedResult;
        this.competency.fourSuperiorResult = res.superiorResult;
        this.competency.fourEssay = res.essay;

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
  

  //#region PRODUCTION 1 OPTIONS CHANGED
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
  
  //#region PRODUCTION 2 OPTIONS CHANGED
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
  
  //#region PRODUCTION 3 OPTIONS CHANGED
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
  
  //#region PRODUCTION 4 OPTIONS CHANGED
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

  //#region UPDATE

  updateCompetencyOne(){
    this.productionCompetencyService.updateCompetencyOne(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencyTwo();
      }
    )
  }

  updateCompetencyTwo(){
    this.productionCompetencyService.updateCompetencyTwo(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencyThree();
      }
    )
  }
  
  updateCompetencyThree(){
    this.productionCompetencyService.updateCompetencyThree(this.competency.id, this.competency)
    .subscribe(
      res => {
        this.updateCompetencyFour();
      }
    )
  }

  updateCompetencyFour(){
    this.productionCompetencyService.updateCompetencyFour(this.competency.id, this.competency)
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
