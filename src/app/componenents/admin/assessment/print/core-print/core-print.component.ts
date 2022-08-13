import { PrintService } from './../../../../../services/print.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubCompetency } from 'src/app/models/competency/subcompetency.model';
import { CoreCompetencyService } from 'src/app/services/core-competency.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoreCompetency } from 'src/app/models/competency/core-competency.model';

@Component({
  selector: 'app-core-print',
  templateUrl: './core-print.component.html',
  styleUrls: ['./core-print.component.scss']
})
export class CorePrintComponent implements OnInit {

  competency: CoreCompetency = {
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

  showTables:boolean = false;

  constructor(
    private router: Router,
    private coreCompetencyService: CoreCompetencyService,
    private spinner: NgxSpinnerService,
    private printService: PrintService
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

  //#region CORE 1
  getOneOptions(){
    this.spinner.show();
    this.coreCompetencyService.getCategoryOneOptions(this.competency.id)
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
    this.coreCompetencyService.getCategoryOneResults(this.competency.id)
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

  //#region CORE 2
  getTwoOptions(){
    this.coreCompetencyService.getCategoryTwoOptions(this.competency.id)
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
    this.coreCompetencyService.getCategoryTwoResults(this.competency.id)
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

  //#region CORE 3
  getThreeOptions(){
    this.coreCompetencyService.getCategoryThreeOptions(this.competency.id)
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
    this.coreCompetencyService.getCategoryThreeResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.threeBasicResult = res.basicResult;
        this.competency.threeIntermediateResult = res.intermediateResult;
        this.competency.threeAdvancedResult = res.advancedResult;
        this.competency.threeSuperiorResult = res.superiorResult;
        this.competency.threeEssay = res.essay;

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
