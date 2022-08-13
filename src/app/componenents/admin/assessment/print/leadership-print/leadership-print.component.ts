import { LeadershipCompetencyService } from './../../../../../services/leadership-competency.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PrintService } from './../../../../../services/print.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubCompetency } from 'src/app/models/competency/subcompetency.model';
import { LeadershipCompetency } from 'src/app/models/competency/leadership-competency.model';

@Component({
  selector: 'app-leadership-print',
  templateUrl: './leadership-print.component.html',
  styleUrls: ['./leadership-print.component.scss']
})
export class LeadershipPrintComponent implements OnInit {

  competency: LeadershipCompetency = {
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
  
  showTables:boolean = false;

  constructor(
    private router: Router,
    private printService: PrintService,
    private spinner: NgxSpinnerService,
    private leadershipService: LeadershipCompetencyService
  ) { }

  ngOnInit(): void {

    var subCompetency = JSON.parse(sessionStorage.getItem("print") || '')  as SubCompetency;
    this.competency.id = subCompetency.competencyId;
    this.competency.competencyName = subCompetency.competencyName;
    this.competency.employeeName = subCompetency.employeeName;
    this.competency.department = subCompetency.department;
    this.competency.college = subCompetency.college;

    this.getOneOptions();
  }

  
  //#region LEADERSHIP 1
  getOneOptions(){
    this.spinner.show();
    this.leadershipService.getCategoryOneOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.oneBasicOptions = res.basicOptions;
        this.competency.oneIntermediateOptions = res.intermediateOptions;
        this.competency.oneAdvancedOptions = res.advancedOptions;
        this.competency.oneSuperiorOptions = res.superiorOptions;

        this.getOneResults();
      }
    )
  }
  getOneResults(){
    this.leadershipService.getCategoryOneResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.oneBasicResult = res.basicResult;
        this.competency.oneIntermediateResult = res.intermediateResult;
        this.competency.oneAdvancedResult = res.advancedResult;
        this.competency.oneSuperiorResult = res.superiorResult;
        this.competency.oneEssay = res.essay;

        this.getTwoOptions();
      }
    )
  }
  //#endregion

  //#region LEADERSHIP 2
  getTwoOptions(){
    this.leadershipService.getCategoryTwoOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.twoBasicOptions = res.basicOptions;
        this.competency.twoIntermediateOptions = res.intermediateOptions;
        this.competency.twoAdvancedOptions = res.advancedOptions;
        this.competency.twoSuperiorOptions = res.superiorOptions;

        this.getTwoResults();
      }
    )
  }
  getTwoResults(){
    this.leadershipService.getCategoryTwoResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.twoBasicResult = res.basicResult;
        this.competency.twoIntermediateResult = res.intermediateResult;
        this.competency.twoAdvancedResult = res.advancedResult;
        this.competency.twoSuperiorResult = res.superiorResult;
        this.competency.twoEssay = res.essay;

        this.getThreeOptions();
      }
    )
  }
  //#endregion

  //#region LEADERSHIP 3
  getThreeOptions(){
    this.leadershipService.getCategoryThreeOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.threeBasicOptions = res.basicOptions;
        this.competency.threeIntermediateOptions = res.intermediateOptions;
        this.competency.threeAdvancedOptions = res.advancedOptions;
        this.competency.threeSuperiorOptions = res.superiorOptions;

        this.getThreeResults();
      }
    )
  }
  getThreeResults(){
    this.leadershipService.getCategoryThreeResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.threeBasicResult = res.basicResult;
        this.competency.threeIntermediateResult = res.intermediateResult;
        this.competency.threeAdvancedResult = res.advancedResult;
        this.competency.threeSuperiorResult = res.superiorResult;
        this.competency.threeEssay = res.essay;

        this.getFourOptions();
      }
    )
  }
  //#endregion

  //#region LEADERSHIP 4
  getFourOptions(){
    this.leadershipService.getCategoryFourOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.fourBasicOptions = res.basicOptions;
        this.competency.fourIntermediateOptions = res.intermediateOptions;
        this.competency.fourAdvancedOptions = res.advancedOptions;
        this.competency.fourSuperiorOptions = res.superiorOptions;

        this.getFourResults();
      }
    )
  }
  getFourResults(){
    this.leadershipService.getCategoryFourResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.fourBasicResult = res.basicResult;
        this.competency.fourIntermediateResult = res.intermediateResult;
        this.competency.fourAdvancedResult = res.advancedResult;
        this.competency.fourSuperiorResult = res.superiorResult;
        this.competency.fourEssay = res.essay;

        this.getFiveOptions();
      }
    )
  }
  //#endregion

  //#region LEADERSHIP 5
  getFiveOptions(){
    this.leadershipService.getCategoryFiveOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.fiveBasicOptions = res.basicOptions;
        this.competency.fiveIntermediateOptions = res.intermediateOptions;
        this.competency.fiveAdvancedOptions = res.advancedOptions;
        this.competency.fiveSuperiorOptions = res.superiorOptions;

        this.getFiveResults();
      }
    )
  }
  getFiveResults(){
    this.leadershipService.getCategoryFiveResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.fiveBasicResult = res.basicResult;
        this.competency.fiveIntermediateResult = res.intermediateResult;
        this.competency.fiveAdvancedResult = res.advancedResult;
        this.competency.fiveSuperiorResult = res.superiorResult;
        this.competency.fiveEssay = res.essay;

        this.spinner.hide();
        this.showTables = true;
      }
    )
  }
  //#endregion


  back(){
    sessionStorage.setItem("print", "false");
    this.printService.setPrint(false);
    this.router.navigate(['/admin-assessment-list']);
  }

}
