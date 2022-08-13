import { CoreTwoSuperiorOptions } from './../../../../options/core/2/core-two-superior';
import { CoreTwoAdvancedOptions } from './../../../../options/core/2/core-two-advanced';
import { CoreTwoIntermediateOptions } from './../../../../options/core/2/core-two-intermediate';
import { CoreTwoBasicOptions } from './../../../../options/core/2/core-two-basic';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoreCompetencyRoute } from 'src/app/routes/core-competency-routes';
import { Competencies } from 'src/app/competencies/competencies';
import Swal from 'sweetalert2';
import { UserCoreCompetencyService } from 'src/app/services/user-core-competency.service';
import { CoreCompetency } from 'src/app/models/competency/core-competency.model';

@Component({
  selector: 'app-core-two-a',
  templateUrl: './core-two-a.component.html',
  styleUrls: ['./core-two-a.component.scss']
})
export class CoreTwoAComponent implements OnInit {

  coreCompetencyRoutes = CoreCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core';

  userCoreCompetency: CoreCompetency = {
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
  removeStorageItem:boolean = false;

  constructor(
    private router: Router,
    private userCoreCompetencyService: UserCoreCompetencyService
    ) { }

  ngOnInit(): void {

    this.userCoreCompetency = JSON.parse(sessionStorage.getItem('userCoreCompetency') || '') as CoreCompetency;

    var competency = sessionStorage.getItem('competency')
    if(competency !== null){
      this.currentCompetency = competency;
    }
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("userCoreCompetency");
    this.removeStorageItem = true;
  }

  isPageActive(route: string): boolean{
    var currentRoute = this.router.url;
    return currentRoute === route? true : false;
  }

  selectedCompetency(name: string){
    this.currentCompetency = name;
    sessionStorage.setItem('competency', name);
    this.router.navigate(['/assessment-instruction']);
  }

  confirmNavigate(name: string){
    var competency = sessionStorage.getItem('competency') || '';

    if(competency !== name){
      
      Swal.fire({
        title: "Are you sure you want to go to " + name + " Competency page",
        text: "Your data will not be save!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, redirect me",
        cancelButtonText: "Cancel"
      }).then((result) => {
        if(result.value){
          sessionStorage.removeItem("userCoreCompetency");
          this.removeStorageItem = true;
          this.selectedCompetency(name);
        }
      })      

    }

  }
  
  navigateToPagination(route: string){
        
    var basicOptions = this.userCoreCompetency.twoBasicOptions;
    var intermediateOptions = this.userCoreCompetency.twoIntermediateOptions;
    var advancedOptions = this.userCoreCompetency.twoAdvancedOptions;
    var superiorOptions = this.userCoreCompetency.twoSuperiorOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);
    var intermediateScore = intermediateOptions.filter(o => o.isChecked);
    var advancedScore = advancedOptions.filter(o => o.isChecked);
    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.userCoreCompetency.twoBasicResult.competent = true;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.userCoreCompetency.twoBasicResult.partially = true;
    }
    else if(basicScore.length <= 2){
      this.userCoreCompetency.twoBasicResult.notYet = true;
    }
    //#endregion

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.userCoreCompetency.twoIntermediateResult.competent = true;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.userCoreCompetency.twoIntermediateResult.partially = true;
    }
    else if(intermediateScore.length <= 2){
      this.userCoreCompetency.twoIntermediateResult.notYet = true;
    }
    //#endregion

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.userCoreCompetency.twoAdvancedResult.competent = true;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.userCoreCompetency.twoAdvancedResult.partially = true;
    }
    else if(advancedScore.length <= 2){
      this.userCoreCompetency.twoAdvancedResult.notYet = true;
    }
    //#endregion

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.userCoreCompetency.twoSuperiorResult.competent = true;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.userCoreCompetency.twoSuperiorResult.partially = true;
    }
    else if(superiorScore.length <= 2){
      this.userCoreCompetency.twoSuperiorResult.notYet = true;
    }
    //#endregion

    sessionStorage.setItem('userCoreCompetency', JSON.stringify(this.userCoreCompetency));
    this.router.navigate([route]);
  }
  
  addToBasicOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userCoreCompetency.twoBasicOptions.findIndex(o => o.id === option.id);
      this.userCoreCompetency.twoBasicOptions[optionIndex] = option;
    }
  }

  addToIntermediateOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userCoreCompetency.twoIntermediateOptions.findIndex(o => o.id == option.id);
      this.userCoreCompetency.twoIntermediateOptions[optionIndex] = option;
    }
  }

  addToAdvancedOptionList(event: any, option: any) {
    option.isChecked = event.target.checked
    
    if ( event.target.checked ) {
      var optionIndex = this.userCoreCompetency.twoAdvancedOptions.findIndex(o => o.id == option.id);
      this.userCoreCompetency.twoAdvancedOptions[optionIndex] = option;
    }
  }

  addToSuperiorOptionList(event: any, option: any) {
    option.isChecked = event.target.checked
    
    if ( event.target.checked ) {
      var optionIndex = this.userCoreCompetency.twoSuperiorOptions.findIndex(o => o.id == option.id);
      this.userCoreCompetency.twoSuperiorOptions[optionIndex] = option;
    }
  }
  
  navigateToTakenAssessments(){
    Swal.fire({
      title: "Are you sure you want to go to your taken assessments?",
      text: "Your data will not be save!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, redirect me",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if(result.value){
        sessionStorage.removeItem("userCoreCompetency");
        this.removeStorageItem = true;
        this.router.navigate(['/user-assessment-list']);
      }
    }) 
  }

}
