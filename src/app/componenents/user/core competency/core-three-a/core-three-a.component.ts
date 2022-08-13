import { CoreThreeSuperiorOptions } from './../../../../options/core/3/core-three-superior';
import { CoreThreeAdvancedOptions } from './../../../../options/core/3/core-three-advanced';
import { CoreThreeIntermediateOptions } from './../../../../options/core/3/core-three-intermediate';
import { CoreThreeBasicOptions } from './../../../../options/core/3/core-three-basic';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competencies } from 'src/app/competencies/competencies';
import { CoreCompetencyRoute } from 'src/app/routes/core-competency-routes';
import Swal from 'sweetalert2';
import { UserCoreCompetencyService } from 'src/app/services/user-core-competency.service';
import { CoreCompetency } from 'src/app/models/competency/core-competency.model';

@Component({
  selector: 'app-core-three-a',
  templateUrl: './core-three-a.component.html',
  styleUrls: ['./core-three-a.component.scss']
})
export class CoreThreeAComponent implements OnInit {

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
    if(!this.removeStorageItem){
      sessionStorage.setItem('userCoreCompetency', JSON.stringify(this.userCoreCompetency));
    }
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
        
    var basicOptions = this.userCoreCompetency.threeBasicOptions;
    var intermediateOptions = this.userCoreCompetency.threeIntermediateOptions;
    var advancedOptions = this.userCoreCompetency.threeAdvancedOptions;
    var superiorOptions = this.userCoreCompetency.threeSuperiorOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);
    var intermediateScore = intermediateOptions.filter(o => o.isChecked);
    var advancedScore = advancedOptions.filter(o => o.isChecked);
    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.userCoreCompetency.threeBasicResult.competent = true;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.userCoreCompetency.threeBasicResult.partially = true;
    }
    else if(basicScore.length <= 2){
      this.userCoreCompetency.threeBasicResult.notYet = true;
    }
    //#endregion

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.userCoreCompetency.threeIntermediateResult.competent = true;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.userCoreCompetency.threeIntermediateResult.partially = true;
    }
    else if(intermediateScore.length <= 2){
      this.userCoreCompetency.threeIntermediateResult.notYet = true;
    }
    //#endregion

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.userCoreCompetency.threeAdvancedResult.competent = true;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.userCoreCompetency.threeAdvancedResult.partially = true;
    }
    else if(advancedScore.length <= 2){
      this.userCoreCompetency.threeAdvancedResult.notYet = true;
    }
    //#endregion

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.userCoreCompetency.threeSuperiorResult.competent = true;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.userCoreCompetency.threeSuperiorResult.partially = true;
    }
    else if(superiorScore.length <= 2){
      this.userCoreCompetency.threeSuperiorResult.notYet = true;
    }
    //#endregion

    sessionStorage.setItem('userCoreCompetency', JSON.stringify(this.userCoreCompetency));
    this.router.navigate([route]);
  }

  addToBasicOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userCoreCompetency.threeBasicOptions.findIndex(o => o.id === option.id);
      this.userCoreCompetency.threeBasicOptions[optionIndex] = option;
    }
  }

  addToIntermediateOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userCoreCompetency.threeIntermediateOptions.findIndex(o => o.id === option.id);
      this.userCoreCompetency.threeIntermediateOptions[optionIndex] = option;
    }
  }

  addToAdvancedOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userCoreCompetency.threeAdvancedOptions.findIndex(o => o.id === option.id);
      this.userCoreCompetency.threeAdvancedOptions[optionIndex] = option;
    }
  }

  addToSuperiorOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userCoreCompetency.threeSuperiorOptions.findIndex(o => o.id === option.id);
      this.userCoreCompetency.threeSuperiorOptions[optionIndex] = option;
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
