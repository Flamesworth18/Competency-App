import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtensionCompetency } from 'src/app/models/competency/extension-competency.model';
import { ExtensionOneAdvancedOptions } from 'src/app/options/extension/1/extension-one-advanced';
import { ExtensionOneBasicOptions } from 'src/app/options/extension/1/extension-one-basic';
import { ExtensionOneIntermediateOptions } from 'src/app/options/extension/1/extension-one-intermediate';
import { ExtensionOneSuperiorOptions } from 'src/app/options/extension/1/extension-one-superior';
import { ExtensionTwoAdvancedOptions } from 'src/app/options/extension/2/extension-two-advanced';
import { ExtensionTwoBasicOptions } from 'src/app/options/extension/2/extension-two-basic';
import { ExtensionTwoIntermediateOptions } from 'src/app/options/extension/2/extension-two-intermediate';
import { ExtensionTwoSuperiorOptions } from 'src/app/options/extension/2/extension-two-superior';
import { ExtensionThreeAdvancedOptions } from 'src/app/options/extension/3/extension-three-advanced';
import { ExtensionThreeBasicOptions } from 'src/app/options/extension/3/extension-three-basic';
import { ExtensionThreeIntermediateOptions } from 'src/app/options/extension/3/extension-three-intermediate';
import { ExtensionThreeSuperiorOptions } from 'src/app/options/extension/3/extension-three-superior';
import { ExtensionFourAdvancedOptions } from 'src/app/options/extension/4/extension-four-advanced';
import { ExtensionFourBasicOptions } from 'src/app/options/extension/4/extension-four-basic';
import { ExtensionFourIntermediateOptions } from 'src/app/options/extension/4/extension-four-intermediate';
import { ExtensionFourSuperiorOptions } from 'src/app/options/extension/4/extension-four-superior';
import { ExtensionFiveAdvancedOptions } from 'src/app/options/extension/5/extension-five-advanced';
import { ExtensionFiveBasicOptions } from 'src/app/options/extension/5/extension-five-basic';
import { ExtensionFiveIntermediateOptions } from 'src/app/options/extension/5/extension-five-intermediate';
import { ExtensionFiveSuperiorOptions } from 'src/app/options/extension/5/extension-five-superior';
import { ExtensionSixAdvancedOptions } from 'src/app/options/extension/6/extension-six-advanced';
import { ExtensionSixBasicOptions } from 'src/app/options/extension/6/extension-six-basic';
import { ExtensionSixIntermediateOptions } from 'src/app/options/extension/6/extension-six-intermediate';
import { ExtensionSixSuperiorOptions } from 'src/app/options/extension/6/extension-six-superior';
import { ExtensionCompetencyRoute } from 'src/app/routes/extension-competency-routes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.scss']
})
export class ExtensionComponent implements OnInit {

  fullName = '';
  department = '';
  college = '';

  extensionCompetencyRoutes = ExtensionCompetencyRoute;

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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    var c = sessionStorage.getItem('userExtensionCompetency') 
    if(c !== null){
      var parsedC = JSON.parse(c) as ExtensionCompetency;
      this.userExtensionCompetency = parsedC;
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
    var c = sessionStorage.getItem('userExtensionCompetency');
    if( c === null){
      sessionStorage.setItem('userExtensionCompetency', JSON.stringify(this.userExtensionCompetency));
    }
  }

  isPageActive(route: string): boolean{
    var currentRoute = this.router.url;
    return currentRoute === route? true : false;
  }

  navigateToPagination(route: string){
    this.userExtensionCompetency.competencyName = "Extension Competency"
    this.userExtensionCompetency.employeeName = this.fullName;
    this.userExtensionCompetency.department = this.department;
    this.userExtensionCompetency.college = this.college;

    this.userExtensionCompetency.oneBasicOptions = ExtensionOneBasicOptions;
    this.userExtensionCompetency.oneIntermediateOptions = ExtensionOneIntermediateOptions;
    this.userExtensionCompetency.oneAdvancedOptions = ExtensionOneAdvancedOptions;
    this.userExtensionCompetency.oneSuperiorOptions = ExtensionOneSuperiorOptions;

    this.userExtensionCompetency.twoBasicOptions = ExtensionTwoBasicOptions;
    this.userExtensionCompetency.twoIntermediateOptions = ExtensionTwoIntermediateOptions;
    this.userExtensionCompetency.twoAdvancedOptions = ExtensionTwoAdvancedOptions;
    this.userExtensionCompetency.twoSuperiorOptions = ExtensionTwoSuperiorOptions;

    this.userExtensionCompetency.threeBasicOptions = ExtensionThreeBasicOptions;
    this.userExtensionCompetency.threeIntermediateOptions = ExtensionThreeIntermediateOptions;
    this.userExtensionCompetency.threeAdvancedOptions = ExtensionThreeAdvancedOptions;
    this.userExtensionCompetency.threeSuperiorOptions = ExtensionThreeSuperiorOptions;

    this.userExtensionCompetency.fourBasicOptions = ExtensionFourBasicOptions;
    this.userExtensionCompetency.fourIntermediateOptions = ExtensionFourIntermediateOptions;
    this.userExtensionCompetency.fourAdvancedOptions = ExtensionFourAdvancedOptions;
    this.userExtensionCompetency.fourSuperiorOptions = ExtensionFourSuperiorOptions;

    this.userExtensionCompetency.fiveBasicOptions = ExtensionFiveBasicOptions;
    this.userExtensionCompetency.fiveIntermediateOptions = ExtensionFiveIntermediateOptions;
    this.userExtensionCompetency.fiveAdvancedOptions = ExtensionFiveAdvancedOptions;
    this.userExtensionCompetency.fiveSuperiorOptions = ExtensionFiveSuperiorOptions;

    this.userExtensionCompetency.sixBasicOptions = ExtensionSixBasicOptions;
    this.userExtensionCompetency.sixIntermediateOptions = ExtensionSixIntermediateOptions;
    this.userExtensionCompetency.sixAdvancedOptions = ExtensionSixAdvancedOptions;
    this.userExtensionCompetency.sixSuperiorOptions = ExtensionSixSuperiorOptions;

    var c = sessionStorage.getItem('userExtensionCompetency');
    if( c === null){
      sessionStorage.setItem('userExtensionCompetency', JSON.stringify(this.userExtensionCompetency));
    }

    this.router.navigate([route]);
  }

}
