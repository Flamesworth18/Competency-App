import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competencies } from 'src/app/competencies/competencies';
import { InstructionCompetency } from 'src/app/models/competency/instruction-competency.model';
import { InstructionCompetencyRoute } from 'src/app/routes/instruction-competency-routes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction-three-a',
  templateUrl: './instruction-three-a.component.html',
  styleUrls: ['./instruction-three-a.component.scss']
})
export class InstructionThreeAComponent implements OnInit {

  instructionCompetencyRoutes = InstructionCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core';

  userInstructionCompetency: InstructionCompetency = {
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
  removeStorageItem:boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userInstructionCompetency = JSON.parse(sessionStorage.getItem('userInstructionCompetency') || '') as InstructionCompetency;

    var competency = sessionStorage.getItem('competency')
    if(competency !== null){
      this.currentCompetency = competency;
    }
  }

  ngOnDestroy(): void {
    if(!this.removeStorageItem){
      sessionStorage.setItem('userInstructionCompetency', JSON.stringify(this.userInstructionCompetency));
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
          sessionStorage.removeItem("userInstructionCompetency");
          this.removeStorageItem = true;
          this.selectedCompetency(name);
        }
      })      

    }

  }

  navigateToPagination(route: string){
        
    var basicOptions = this.userInstructionCompetency.threeBasicOptions;
    var intermediateOptions = this.userInstructionCompetency.threeIntermediateOptions;
    var advancedOptions = this.userInstructionCompetency.threeAdvancedOptions;
    var superiorOptions = this.userInstructionCompetency.threeSuperiorOptions;

    var basicScore = basicOptions.filter(o => o.isChecked);
    var intermediateScore = intermediateOptions.filter(o => o.isChecked);
    var advancedScore = advancedOptions.filter(o => o.isChecked);
    var superiorScore = superiorOptions.filter(o => o.isChecked);

    //#region BASIC
    if(basicScore.length >= 6){
      this.userInstructionCompetency.threeBasicResult.competent = true;
    }
    else if(basicScore.length >= 3 && basicScore.length <= 5){
      this.userInstructionCompetency.threeBasicResult.partially = true;
    }
    else if(basicScore.length <= 2){
      this.userInstructionCompetency.threeBasicResult.notYet = true;
    }
    //#endregion

    //#region INTERMEDIATE
    if(intermediateScore.length >= 6){
      this.userInstructionCompetency.threeIntermediateResult.competent = true;
    }
    else if(intermediateScore.length >= 3 && intermediateScore.length <= 5){
      this.userInstructionCompetency.threeIntermediateResult.partially = true;
    }
    else if(intermediateScore.length <= 2){
      this.userInstructionCompetency.threeIntermediateResult.notYet = true;
    }
    //#endregion

    //#region ADVANCED
    if(advancedScore.length >= 6){
      this.userInstructionCompetency.threeAdvancedResult.competent = true;
    }
    else if(advancedScore.length >= 3 && advancedScore.length <= 5){
      this.userInstructionCompetency.threeAdvancedResult.partially = true;
    }
    else if(advancedScore.length <= 2){
      this.userInstructionCompetency.threeAdvancedResult.notYet = true;
    }
    //#endregion

    //#region SUPERIOR
    if(superiorScore.length >= 6){
      this.userInstructionCompetency.threeSuperiorResult.competent = true;
    }
    else if(superiorScore.length >= 3 && superiorScore.length <= 5){
      this.userInstructionCompetency.threeSuperiorResult.partially = true;
    }
    else if(superiorScore.length <= 2){
      this.userInstructionCompetency.threeSuperiorResult.notYet = true;
    }
    //#endregion

    sessionStorage.setItem('userInstructionCompetency', JSON.stringify(this.userInstructionCompetency));
    this.router.navigate([route]);
  }

  addToBasicOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userInstructionCompetency.threeBasicOptions.findIndex(o => o.id === option.id);
      this.userInstructionCompetency.threeBasicOptions[optionIndex] = option;
    }
  }

  addToIntermediateOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userInstructionCompetency.threeIntermediateOptions.findIndex(o => o.id === option.id);
      this.userInstructionCompetency.threeIntermediateOptions[optionIndex] = option;
    }
  }

  addToAdvancedOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userInstructionCompetency.threeAdvancedOptions.findIndex(o => o.id === option.id);
      this.userInstructionCompetency.threeAdvancedOptions[optionIndex] = option;
    }
  }

  addToSuperiorOptionList(event: any, option: any) {
    option.isChecked = event.target.checked

    if ( event.target.checked ) {
      var optionIndex = this.userInstructionCompetency.threeSuperiorOptions.findIndex(o => o.id === option.id);
      this.userInstructionCompetency.threeSuperiorOptions[optionIndex] = option;
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
        sessionStorage.removeItem("userInstructionCompetency");
        this.removeStorageItem = true;
        this.router.navigate(['/user-assessment-list']);
      }
    }) 
  }

}
