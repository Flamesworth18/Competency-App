import { InstructionCompetencyRoute } from '../../../../routes/instruction-competency-routes';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { InstructionCompetency } from 'src/app/models/competency/instruction-competency.model';
import { InstructionOneBasicOptions } from 'src/app/options/instruction/1/instruction-one-basic';
import { InstructionOneIntermediateOptions } from 'src/app/options/instruction/1/instruction-one-intermediate';
import { InstructionOneAdvancedOptions } from 'src/app/options/instruction/1/instruction-one-advanced';
import { InstructionOneSuperiorOptions } from 'src/app/options/instruction/1/instruction-one-superior';
import { InstructionTwoBasicOptions } from 'src/app/options/instruction/2/instruction-two-basic';
import { InstructionTwoIntermediateOptions } from 'src/app/options/instruction/2/instruction-two-intermediate';
import { InstructionTwoAdvancedOptions } from 'src/app/options/instruction/2/instruction-two-advanced';
import { InstructionTwoSuperiorOptions } from 'src/app/options/instruction/2/instruction-two-superior';
import { InstructionThreeBasicOptions } from 'src/app/options/instruction/3/instruction-three-basic';
import { InstructionThreeIntermediateOptions } from 'src/app/options/instruction/3/instruction-three-intermediate';
import { InstructionThreeAdvancedOptions } from 'src/app/options/instruction/3/instruction-three-advanced';
import { InstructionThreeSuperiorOptions } from 'src/app/options/instruction/3/instruction-three-superior';
import { InstructionFourBasicOptions } from 'src/app/options/instruction/4/instruction-four-basic';
import { InstructionFourIntermediateOptions } from 'src/app/options/instruction/4/instruction-four-intermediate';
import { InstructionFourAdvancedOptions } from 'src/app/options/instruction/4/instruction-four-advanced';
import { InstructionFourSuperiorOptions } from 'src/app/options/instruction/4/instruction-four-superior';
import { InstructionFiveBasicOptions } from 'src/app/options/instruction/5/instruction-five-basic';
import { InstructionFiveIntermediateOptions } from 'src/app/options/instruction/5/instruction-five-intermediate';
import { InstructionFiveAdvancedOptions } from 'src/app/options/instruction/5/instruction-five-advanced';
import { InstructionFiveSuperiorOptions } from 'src/app/options/instruction/5/instruction-five-superior';
import { InstructionSixBasicOptions } from 'src/app/options/instruction/6/instruction-six-basic';
import { InstructionSixIntermediateOptions } from 'src/app/options/instruction/6/instruction-six-intermediate';
import { InstructionSixAdvancedOptions } from 'src/app/options/instruction/6/instruction-six-advanced';
import { InstructionSixSuperiorOptions } from 'src/app/options/instruction/6/instruction-six-superior';
import { InstructionSevenBasicOptions } from 'src/app/options/instruction/7/instruction-seven-basic';
import { InstructionSevenIntermediateOptions } from 'src/app/options/instruction/7/instruction-seven-intermediate';
import { InstructionSevenAdvancedOptions } from 'src/app/options/instruction/7/instruction-seven-advanced';
import { InstructionSevenSuperiorOptions } from 'src/app/options/instruction/7/instruction-seven-superior';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  fullName = '';
  department = '';
  college = '';

  instructionCompetencyRoutes = InstructionCompetencyRoute;

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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    var c = sessionStorage.getItem('userInstructionCompetency') 
    if(c !== null){
      var parsedC = JSON.parse(c) as InstructionCompetency;
      this.userInstructionCompetency = parsedC;
    }
    
    if(this.authService.user.middleName !== ''){
      this.fullName = this.authService.user.firstName + " "  + this.authService.user.middleName + " "  + this.authService.user.lastName;
    }
    else{
      this.fullName = this.authService.user.firstName + " " + this.authService.user.lastName;
    }

    this.department = this.authService.user.department;
    this.college = this.authService.user.college;
    
  }

  ngOnDestroy(): void {

    var c = sessionStorage.getItem('userInstructionCompetency');
    if( c === null){
      sessionStorage.setItem('userInstructionCompetency', JSON.stringify(this.userInstructionCompetency));
    }

  }
  
  isPageActive(route: string): boolean{
    var currentRoute = this.router.url;
    return currentRoute === route? true : false;
  }

  navigateToPagination(route: string){
    this.userInstructionCompetency.competencyName = "Instruction Competency"
    this.userInstructionCompetency.employeeName = this.fullName;
    this.userInstructionCompetency.department = this.department;
    this.userInstructionCompetency.college = this.college;

    this.userInstructionCompetency.oneBasicOptions = InstructionOneBasicOptions;
    this.userInstructionCompetency.oneIntermediateOptions = InstructionOneIntermediateOptions;
    this.userInstructionCompetency.oneAdvancedOptions = InstructionOneAdvancedOptions;
    this.userInstructionCompetency.oneSuperiorOptions = InstructionOneSuperiorOptions;

    this.userInstructionCompetency.twoBasicOptions = InstructionTwoBasicOptions;
    this.userInstructionCompetency.twoIntermediateOptions = InstructionTwoIntermediateOptions;
    this.userInstructionCompetency.twoAdvancedOptions = InstructionTwoAdvancedOptions;
    this.userInstructionCompetency.twoSuperiorOptions = InstructionTwoSuperiorOptions;

    this.userInstructionCompetency.threeBasicOptions = InstructionThreeBasicOptions;
    this.userInstructionCompetency.threeIntermediateOptions = InstructionThreeIntermediateOptions;
    this.userInstructionCompetency.threeAdvancedOptions = InstructionThreeAdvancedOptions;
    this.userInstructionCompetency.threeSuperiorOptions = InstructionThreeSuperiorOptions;

    this.userInstructionCompetency.fourBasicOptions = InstructionFourBasicOptions;
    this.userInstructionCompetency.fourIntermediateOptions = InstructionFourIntermediateOptions;
    this.userInstructionCompetency.fourAdvancedOptions = InstructionFourAdvancedOptions;
    this.userInstructionCompetency.fourSuperiorOptions = InstructionFourSuperiorOptions;

    this.userInstructionCompetency.fiveBasicOptions = InstructionFiveBasicOptions;
    this.userInstructionCompetency.fiveIntermediateOptions = InstructionFiveIntermediateOptions;
    this.userInstructionCompetency.fiveAdvancedOptions = InstructionFiveAdvancedOptions;
    this.userInstructionCompetency.fiveSuperiorOptions = InstructionFiveSuperiorOptions;

    this.userInstructionCompetency.sixBasicOptions = InstructionSixBasicOptions;
    this.userInstructionCompetency.sixIntermediateOptions = InstructionSixIntermediateOptions;
    this.userInstructionCompetency.sixAdvancedOptions = InstructionSixAdvancedOptions;
    this.userInstructionCompetency.sixSuperiorOptions = InstructionSixSuperiorOptions;

    this.userInstructionCompetency.sevenBasicOptions = InstructionSevenBasicOptions;
    this.userInstructionCompetency.sevenIntermediateOptions = InstructionSevenIntermediateOptions;
    this.userInstructionCompetency.sevenAdvancedOptions = InstructionSevenAdvancedOptions;
    this.userInstructionCompetency.sevenSuperiorOptions = InstructionSevenSuperiorOptions;

    var c = sessionStorage.getItem('userInstructionCompetency');
    if( c === null){
      sessionStorage.setItem('userInstructionCompetency', JSON.stringify(this.userInstructionCompetency));
    }

    this.router.navigate([route]);
  }
}
