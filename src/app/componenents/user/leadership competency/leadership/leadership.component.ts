import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeadershipCompetency } from 'src/app/models/competency/leadership-competency.model';
import { LeadershipOneAdvancedOptions } from 'src/app/options/leadership/1/leadership-one-advanced';
import { LeadershipOneBasicOptions } from 'src/app/options/leadership/1/leadership-one-basic';
import { LeadershipOneIntermediateOptions } from 'src/app/options/leadership/1/leadership-one-intermediate';
import { LeadershipOneSuperiorOptions } from 'src/app/options/leadership/1/leadership-one-superior';
import { LeadershipTwoAdvancedOptions } from 'src/app/options/leadership/2/leadership-two-advanced';
import { LeadershipTwoBasicOptions } from 'src/app/options/leadership/2/leadership-two-basic';
import { LeadershipTwoIntermediateOptions } from 'src/app/options/leadership/2/leadership-two-intermediate';
import { LeadershipTwoSuperiorOptions } from 'src/app/options/leadership/2/leadership-two-superior';
import { LeadershipThreeAdvancedOptions } from 'src/app/options/leadership/3/leadership-three-advanced';
import { LeadershipThreeBasicOptions } from 'src/app/options/leadership/3/leadership-three-basic';
import { LeadershipThreeIntermediateOptions } from 'src/app/options/leadership/3/leadership-three-intermediate';
import { LeadershipThreeSuperiorOptions } from 'src/app/options/leadership/3/leadership-three-superior';
import { LeadershipFourAdvancedOptions } from 'src/app/options/leadership/4/leadership-four-advanced';
import { LeadershipFourBasicOptions } from 'src/app/options/leadership/4/leadership-four-basic';
import { LeadershipFourIntermediateOptions } from 'src/app/options/leadership/4/leadership-four-intermediate';
import { LeadershipFourSuperiorOptions } from 'src/app/options/leadership/4/leadership-four-superior';
import { LeadershipFiveAdvancedOptions } from 'src/app/options/leadership/5/leadership-five-advanced';
import { LeadershipFiveBasicOptions } from 'src/app/options/leadership/5/leadership-five-basic';
import { LeadershipFiveIntermediateOptions } from 'src/app/options/leadership/5/leadership-five-intermediate';
import { LeadershipFiveSuperiorOptions } from 'src/app/options/leadership/5/leadership-five-superior';
import { LeadershipCompetencyRoute } from 'src/app/routes/leadership-competency-routes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {

  fullName = '';
  department = '';
  college = '';

  leadershipCompetencyRoutes = LeadershipCompetencyRoute;

  userLeadershipCompetency: LeadershipCompetency = {
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
    dateCreated: '',
    timeCreated: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    var c = sessionStorage.getItem('userLeadershipCompetency') 
    if(c !== null){
      var parsedC = JSON.parse(c) as LeadershipCompetency;
      this.userLeadershipCompetency = parsedC;
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

    var c = sessionStorage.getItem('userLeadershipCompetency');
    if( c === null){
      sessionStorage.setItem('userLeadershipCompetency', JSON.stringify(this.userLeadershipCompetency));
    }

  }
  
  isPageActive(route: string): boolean{
    var currentRoute = this.router.url;
    return currentRoute === route? true : false;
  }

  navigateToPagination(route: string){
    this.userLeadershipCompetency.competencyName = "Leadership Competency"
    this.userLeadershipCompetency.employeeName = this.fullName;
    this.userLeadershipCompetency.department = this.department;
    this.userLeadershipCompetency.college = this.college;

    this.userLeadershipCompetency.oneBasicOptions = LeadershipOneBasicOptions;
    this.userLeadershipCompetency.oneIntermediateOptions = LeadershipOneIntermediateOptions;
    this.userLeadershipCompetency.oneAdvancedOptions = LeadershipOneAdvancedOptions;
    this.userLeadershipCompetency.oneSuperiorOptions = LeadershipOneSuperiorOptions;

    this.userLeadershipCompetency.twoBasicOptions = LeadershipTwoBasicOptions;
    this.userLeadershipCompetency.twoIntermediateOptions = LeadershipTwoIntermediateOptions;
    this.userLeadershipCompetency.twoAdvancedOptions = LeadershipTwoAdvancedOptions;
    this.userLeadershipCompetency.twoSuperiorOptions = LeadershipTwoSuperiorOptions;

    this.userLeadershipCompetency.threeBasicOptions = LeadershipThreeBasicOptions;
    this.userLeadershipCompetency.threeIntermediateOptions = LeadershipThreeIntermediateOptions;
    this.userLeadershipCompetency.threeAdvancedOptions = LeadershipThreeAdvancedOptions;
    this.userLeadershipCompetency.threeSuperiorOptions = LeadershipThreeSuperiorOptions;

    this.userLeadershipCompetency.fourBasicOptions = LeadershipFourBasicOptions;
    this.userLeadershipCompetency.fourIntermediateOptions = LeadershipFourIntermediateOptions;
    this.userLeadershipCompetency.fourAdvancedOptions = LeadershipFourAdvancedOptions;
    this.userLeadershipCompetency.fourSuperiorOptions = LeadershipFourSuperiorOptions;

    this.userLeadershipCompetency.fiveBasicOptions = LeadershipFiveBasicOptions;
    this.userLeadershipCompetency.fiveIntermediateOptions = LeadershipFiveIntermediateOptions;
    this.userLeadershipCompetency.fiveAdvancedOptions = LeadershipFiveAdvancedOptions;
    this.userLeadershipCompetency.fiveSuperiorOptions = LeadershipFiveSuperiorOptions;

    var c = sessionStorage.getItem('userLeadershipCompetency');
    if( c === null){
      sessionStorage.setItem('userLeadershipCompetency', JSON.stringify(this.userLeadershipCompetency));
    }

    this.router.navigate([route]);
  }
}
