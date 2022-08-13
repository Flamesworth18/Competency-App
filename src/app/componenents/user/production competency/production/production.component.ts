import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductionCompetency } from 'src/app/models/competency/production-competency.model';
import { ProductionOneAdvancedOptions } from 'src/app/options/production/1/production-one-advanced';
import { ProductionOneBasicOptions } from 'src/app/options/production/1/production-one-basic';
import { ProductionOneIntermediateOptions } from 'src/app/options/production/1/production-one-intermediate';
import { ProductionOneSuperiorOptions } from 'src/app/options/production/1/production-one-superior';
import { ProductionTwoAdvancedOptions } from 'src/app/options/production/2/production-two-advanced';
import { ProductionTwoBasicOptions } from 'src/app/options/production/2/production-two-basic';
import { ProductionTwoIntermediateOptions } from 'src/app/options/production/2/production-two-intermediate';
import { ProductionTwoSuperiorOptions } from 'src/app/options/production/2/production-two-superior';
import { ProductionThreeAdvancedOptions } from 'src/app/options/production/3/production-three-advanced';
import { ProductionThreeBasicOptions } from 'src/app/options/production/3/production-three-basic';
import { ProductionThreeIntermediateOptions } from 'src/app/options/production/3/production-three-intermediate';
import { ProductionThreeSuperiorOptions } from 'src/app/options/production/3/production-three-superior';
import { ProductionFourAdvancedOptions } from 'src/app/options/production/4/production-four-advanced';
import { ProductionFourBasicOptions } from 'src/app/options/production/4/production-four-basic';
import { ProductionFourIntermediateOptions } from 'src/app/options/production/4/production-four-intermediate';
import { ProductionFourSuperiorOptions } from 'src/app/options/production/4/production-four-superior';
import { ProductionCompetencyRoute } from 'src/app/routes/production-competency-routes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  fullName = '';
  department = '';
  college = '';

  productionCompetencyRoutes = ProductionCompetencyRoute;

  userProductionCompetency: ProductionCompetency = {
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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    var c = sessionStorage.getItem('userProductionCompetency') 
    if(c !== null){
      var parsedC = JSON.parse(c) as ProductionCompetency;
      this.userProductionCompetency = parsedC;
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
    var c = sessionStorage.getItem('userProductionCompetency');
    if( c === null){
      sessionStorage.setItem('userProductionCompetency', JSON.stringify(this.userProductionCompetency));
    }
  }

  isPageActive(route: string): boolean{
    var currentRoute = this.router.url;
    return currentRoute === route? true : false;
  }

  navigateToPagination(route: string){
    this.userProductionCompetency.competencyName = "Production Competency"
    this.userProductionCompetency.employeeName = this.fullName;
    this.userProductionCompetency.department = this.department;
    this.userProductionCompetency.college = this.college;

    this.userProductionCompetency.oneBasicOptions = ProductionOneBasicOptions;
    this.userProductionCompetency.oneIntermediateOptions = ProductionOneIntermediateOptions;
    this.userProductionCompetency.oneAdvancedOptions = ProductionOneAdvancedOptions;
    this.userProductionCompetency.oneSuperiorOptions = ProductionOneSuperiorOptions;

    this.userProductionCompetency.twoBasicOptions = ProductionTwoBasicOptions;
    this.userProductionCompetency.twoIntermediateOptions = ProductionTwoIntermediateOptions;
    this.userProductionCompetency.twoAdvancedOptions = ProductionTwoAdvancedOptions;
    this.userProductionCompetency.twoSuperiorOptions = ProductionTwoSuperiorOptions;

    this.userProductionCompetency.threeBasicOptions = ProductionThreeBasicOptions;
    this.userProductionCompetency.threeIntermediateOptions = ProductionThreeIntermediateOptions;
    this.userProductionCompetency.threeAdvancedOptions = ProductionThreeAdvancedOptions;
    this.userProductionCompetency.threeSuperiorOptions = ProductionThreeSuperiorOptions;

    this.userProductionCompetency.fourBasicOptions = ProductionFourBasicOptions;
    this.userProductionCompetency.fourIntermediateOptions = ProductionFourIntermediateOptions;
    this.userProductionCompetency.fourAdvancedOptions = ProductionFourAdvancedOptions;
    this.userProductionCompetency.fourSuperiorOptions = ProductionFourSuperiorOptions;

    var c = sessionStorage.getItem('userProductionCompetency');
    if( c === null){
      sessionStorage.setItem('userProductionCompetency', JSON.stringify(this.userProductionCompetency));
    }

    this.router.navigate([route]);
  }

}
