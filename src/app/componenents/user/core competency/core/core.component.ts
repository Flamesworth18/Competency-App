import { CoreThreeSuperiorOptions } from './../../../../options/core/3/core-three-superior';
import { CoreThreeAdvancedOptions } from './../../../../options/core/3/core-three-advanced';
import { CoreThreeIntermediateOptions } from './../../../../options/core/3/core-three-intermediate';
import { CoreThreeBasicOptions } from './../../../../options/core/3/core-three-basic';
import { CoreTwoSuperiorOptions } from './../../../../options/core/2/core-two-superior';
import { CoreTwoAdvancedOptions } from './../../../../options/core/2/core-two-advanced';
import { CoreTwoIntermediateOptions } from './../../../../options/core/2/core-two-intermediate';
import { CoreTwoBasicOptions } from './../../../../options/core/2/core-two-basic';
import { CoreOneSuperiorOptions } from './../../../../options/core/1/core-one-superior';
import { CoreOneAdvancedOptions } from './../../../../options/core/1/core-one-advanced';
import { CoreOneIntermediateOptions } from './../../../../options/core/1/core-one-intermediate';
import { CoreOneBasicOptions } from './../../../../options/core/1/core-one-basic';
import { UserCoreCompetencyService } from './../../../../services/user-core-competency.service';
import { CoreCompetencyRoute } from '../../../../routes/core-competency-routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CoreCompetency } from 'src/app/models/competency/core-competency.model';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  fullName = '';
  department = '';
  college = '';

  coreCompetencyRoutes = CoreCompetencyRoute;

  private userCoreCompetency: CoreCompetency = {
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private userCoreCompetencyService: UserCoreCompetencyService
  ) { }

  ngOnInit(): void {

    var c = sessionStorage.getItem('userCoreCompetency');
    if(c !== null){
      var parsedC = JSON.parse(c) as CoreCompetency;
      this.userCoreCompetency = parsedC;
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

    var c = sessionStorage.getItem('userCoreCompetency');
    if( c === null){
      sessionStorage.setItem('userCoreCompetency', JSON.stringify(this.userCoreCompetency));
    }

  }

  isPageActive(route: string): boolean{
    var currentRoute = this.router.url;
    return currentRoute === route? true : false;
  }

  navigateToPagination(route: string){
    this.userCoreCompetency.competencyName = "Core Competency"
    this.userCoreCompetency.employeeName = this.fullName;
    this.userCoreCompetency.department = this.department;
    this.userCoreCompetency.college = this.college;

    this.userCoreCompetency.oneBasicOptions = CoreOneBasicOptions;
    this.userCoreCompetency.oneIntermediateOptions = CoreOneIntermediateOptions;
    this.userCoreCompetency.oneAdvancedOptions = CoreOneAdvancedOptions;
    this.userCoreCompetency.oneSuperiorOptions = CoreOneSuperiorOptions;

    this.userCoreCompetency.twoBasicOptions = CoreTwoBasicOptions;
    this.userCoreCompetency.twoIntermediateOptions = CoreTwoIntermediateOptions;
    this.userCoreCompetency.twoAdvancedOptions = CoreTwoAdvancedOptions;
    this.userCoreCompetency.twoSuperiorOptions = CoreTwoSuperiorOptions;

    this.userCoreCompetency.threeBasicOptions = CoreThreeBasicOptions;
    this.userCoreCompetency.threeIntermediateOptions = CoreThreeIntermediateOptions;
    this.userCoreCompetency.threeAdvancedOptions = CoreThreeAdvancedOptions;
    this.userCoreCompetency.threeSuperiorOptions = CoreThreeSuperiorOptions;

    var c = sessionStorage.getItem('userCoreCompetency');
    if( c === null){
      sessionStorage.setItem('userCoreCompetency', JSON.stringify(this.userCoreCompetency));
    }

    this.router.navigate([route]);
  }

}
