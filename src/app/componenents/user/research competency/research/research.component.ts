import { Router } from '@angular/router';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ResearchCompetency } from 'src/app/models/competency/research-competency.model';
import { ResearchCompetencyRoute } from 'src/app/routes/research-competency-routes';
import { ResearchOneBasicOptions } from 'src/app/options/research/1/research-one-basic';
import { ResearchOneIntermediateOptions } from 'src/app/options/research/1/research-one-intermediate';
import { ResearchOneAdvancedOptions } from 'src/app/options/research/1/research-one-advanced';
import { ResearchOneSuperiorOptions } from 'src/app/options/research/1/research-one-superior';
import { ResearchTwoBasicOptions } from 'src/app/options/research/2/research-two-basic';
import { ResearchTwoIntermediateOptions } from 'src/app/options/research/2/research-two-intermediate';
import { ResearchTwoAdvancedOptions } from 'src/app/options/research/2/research-two-advanced';
import { ResearchTwoSuperiorOptions } from 'src/app/options/research/2/research-two-superior';
import { ResearchThreeBasicOptions } from 'src/app/options/research/3/research-three-basic';
import { ResearchThreeIntermediateOptions } from 'src/app/options/research/3/research-three-intermediate';
import { ResearchThreeAdvancedOptions } from 'src/app/options/research/3/research-three-advanced';
import { ResearchThreeSuperiorOptions } from 'src/app/options/research/3/research-three-superior';
import { ResearchFourBasicOptions } from 'src/app/options/research/4/research-four-basic';
import { ResearchFourIntermediateOptions } from 'src/app/options/research/4/research-four-intermediate';
import { ResearchFourAdvancedOptions } from 'src/app/options/research/4/research-four-advanced';
import { ResearchFourSuperiorOptions } from 'src/app/options/research/4/research-four-superior';
import { ResearchFiveBasicOptions } from 'src/app/options/research/5/research-five-basic';
import { ResearchFiveIntermediateOptions } from 'src/app/options/research/5/research-five-intermediate';
import { ResearchFiveAdvancedOptions } from 'src/app/options/research/5/research-five-advanced';
import { ResearchFiveSuperiorOptions } from 'src/app/options/research/5/research-five-superior';
import { ResearchSixBasicOptions } from 'src/app/options/research/6/research-six-basic';
import { ResearchSixIntermediateOptions } from 'src/app/options/research/6/research-six-intermediate';
import { ResearchSixAdvancedOptions } from 'src/app/options/research/6/research-six-advanced';
import { ResearchSixSuperiorOptions } from 'src/app/options/research/6/research-six-superior';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  fullName = '';
  department = '';
  college = '';

  researchCompetencyRoutes = ResearchCompetencyRoute;

  userResearchCompetency: ResearchCompetency = {
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

    var c = sessionStorage.getItem('userResearchCompetency') 
    if(c !== null){
      var parsedC = JSON.parse(c) as ResearchCompetency;
      this.userResearchCompetency = parsedC;
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
    var c = sessionStorage.getItem('userResearchCompetency');
    if( c === null){
      sessionStorage.setItem('userResearchCompetency', JSON.stringify(this.userResearchCompetency));
    }
  }

  isPageActive(route: string): boolean{
    var currentRoute = this.router.url;
    return currentRoute === route? true : false;
  }

  navigateToPagination(route: string){
    this.userResearchCompetency.competencyName = "Research Competency"
    this.userResearchCompetency.employeeName = this.fullName;
    this.userResearchCompetency.department = this.department;
    this.userResearchCompetency.college = this.college;

    this.userResearchCompetency.oneBasicOptions = ResearchOneBasicOptions;
    this.userResearchCompetency.oneIntermediateOptions = ResearchOneIntermediateOptions;
    this.userResearchCompetency.oneAdvancedOptions = ResearchOneAdvancedOptions;
    this.userResearchCompetency.oneSuperiorOptions = ResearchOneSuperiorOptions;

    this.userResearchCompetency.twoBasicOptions = ResearchTwoBasicOptions;
    this.userResearchCompetency.twoIntermediateOptions = ResearchTwoIntermediateOptions;
    this.userResearchCompetency.twoAdvancedOptions = ResearchTwoAdvancedOptions;
    this.userResearchCompetency.twoSuperiorOptions = ResearchTwoSuperiorOptions;

    this.userResearchCompetency.threeBasicOptions = ResearchThreeBasicOptions;
    this.userResearchCompetency.threeIntermediateOptions = ResearchThreeIntermediateOptions;
    this.userResearchCompetency.threeAdvancedOptions = ResearchThreeAdvancedOptions;
    this.userResearchCompetency.threeSuperiorOptions = ResearchThreeSuperiorOptions;

    this.userResearchCompetency.fourBasicOptions = ResearchFourBasicOptions;
    this.userResearchCompetency.fourIntermediateOptions = ResearchFourIntermediateOptions;
    this.userResearchCompetency.fourAdvancedOptions = ResearchFourAdvancedOptions;
    this.userResearchCompetency.fourSuperiorOptions = ResearchFourSuperiorOptions;

    this.userResearchCompetency.fiveBasicOptions = ResearchFiveBasicOptions;
    this.userResearchCompetency.fiveIntermediateOptions = ResearchFiveIntermediateOptions;
    this.userResearchCompetency.fiveAdvancedOptions = ResearchFiveAdvancedOptions;
    this.userResearchCompetency.fiveSuperiorOptions = ResearchFiveSuperiorOptions;

    this.userResearchCompetency.sixBasicOptions = ResearchSixBasicOptions;
    this.userResearchCompetency.sixIntermediateOptions = ResearchSixIntermediateOptions;
    this.userResearchCompetency.sixAdvancedOptions = ResearchSixAdvancedOptions;
    this.userResearchCompetency.sixSuperiorOptions = ResearchSixSuperiorOptions;

    var c = sessionStorage.getItem('userResearchCompetency');
    if( c === null){
      sessionStorage.setItem('userResearchCompetency', JSON.stringify(this.userResearchCompetency));
    }

    this.router.navigate([route]);
  }

}
