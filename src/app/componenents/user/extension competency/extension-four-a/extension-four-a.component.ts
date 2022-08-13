import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competencies } from 'src/app/competencies/competencies';
import { ExtensionCompetency } from 'src/app/models/competency/extension-competency.model';
import { ExtensionCompetencyRoute } from 'src/app/routes/extension-competency-routes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-extension-four-a',
  templateUrl: './extension-four-a.component.html',
  styleUrls: ['./extension-four-a.component.scss']
})
export class ExtensionFourAComponent implements OnInit {

  extensionCompetencyRoutes = ExtensionCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core';

  userExtensionCompetency: ExtensionCompetency = {
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
    dateCreated: '',
    timeCreated: ''
  }
  removeStorageItem:boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userExtensionCompetency = JSON.parse(sessionStorage.getItem('userExtensionCompetency') || '') as ExtensionCompetency;

    var competency = sessionStorage.getItem('competency')
    if(competency !== null){
      this.currentCompetency = competency;
    }
  }

  ngOnDestroy(): void {
    if(!this.removeStorageItem){
      sessionStorage.setItem('userExtensionCompetency', JSON.stringify(this.userExtensionCompetency));
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
          sessionStorage.removeItem("userExtensionCompetency");
          this.removeStorageItem = true;
          this.selectedCompetency(name);
        }
      })      

    }

  }

  navigateToPagination(route: string){
        
    var basicOptions = this.userExtensionCompetency.fourBasicOptions;
    var intermediateOptions = this.userExtensionCompetency.fourIntermediateOptions;
    var advancedOptions = this.userExtensionCompetency.fourAdvancedOptions;
    var superiorOptions = this.userExtensionCompetency.fourSuperiorOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);
    var intermediateScore = intermediateOptions.filter(o => o.isChecked);
    var advancedScore = advancedOptions.filter(o => o.isChecked);
    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.userExtensionCompetency.fourBasicResult.competent = true;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.userExtensionCompetency.fourBasicResult.partially = true;
    }
    else if(basicScore.length <= 2){
      this.userExtensionCompetency.fourBasicResult.notYet = true;
    }
    //#endregion

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.userExtensionCompetency.fourIntermediateResult.competent = true;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.userExtensionCompetency.fourIntermediateResult.partially = true;
    }
    else if(intermediateScore.length <= 2){
      this.userExtensionCompetency.fourIntermediateResult.notYet = true;
    }
    //#endregion

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.userExtensionCompetency.fourAdvancedResult.competent = true;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.userExtensionCompetency.fourAdvancedResult.partially = true;
    }
    else if(advancedScore.length <= 2){
      this.userExtensionCompetency.fourAdvancedResult.notYet = true;
    }
    //#endregion

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.userExtensionCompetency.fourSuperiorResult.competent = true;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.userExtensionCompetency.fourSuperiorResult.partially = true;
    }
    else if(superiorScore.length <= 2){
      this.userExtensionCompetency.fourSuperiorResult.notYet = true;
    }
    //#endregion

    sessionStorage.setItem('userExtensionCompetency', JSON.stringify(this.userExtensionCompetency));
    this.router.navigate([route]);
  }

  addToBasicOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userExtensionCompetency.fourBasicOptions.findIndex(o => o.id === option.id);
      this.userExtensionCompetency.fourBasicOptions[optionIndex] = option;
    }
  }

  addToIntermediateOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userExtensionCompetency.fourIntermediateOptions.findIndex(o => o.id === option.id);
      this.userExtensionCompetency.fourIntermediateOptions[optionIndex] = option;
    }
  }

  addToAdvancedOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userExtensionCompetency.fourAdvancedOptions.findIndex(o => o.id === option.id);
      this.userExtensionCompetency.fourAdvancedOptions[optionIndex] = option;
    }
  }

  addToSuperiorOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userExtensionCompetency.fourSuperiorOptions.findIndex(o => o.id === option.id);
      this.userExtensionCompetency.fourSuperiorOptions[optionIndex] = option;
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
        sessionStorage.removeItem("userExtensionCompetency");
        this.removeStorageItem = true;
        this.router.navigate(['/user-assessment-list']);
      }
    }) 
  }

}
