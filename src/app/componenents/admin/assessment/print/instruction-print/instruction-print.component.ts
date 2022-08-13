import { InstructionCompetencyService } from 'src/app/services/instruction-competency.service';
import { Component, OnInit } from '@angular/core';
import { InstructionCompetency } from 'src/app/models/competency/instruction-competency.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { PrintService } from 'src/app/services/print.service';
import { Router } from '@angular/router';
import { SubCompetency } from 'src/app/models/competency/subcompetency.model';

@Component({
  selector: 'app-instruction-print',
  templateUrl: './instruction-print.component.html',
  styleUrls: ['./instruction-print.component.scss']
})
export class InstructionPrintComponent implements OnInit {

  competency: InstructionCompetency = {
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
  
  showTables:boolean = false;

  constructor(
    private router: Router,
    private printService: PrintService,
    private spinner: NgxSpinnerService,
    private instructionService: InstructionCompetencyService  
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
  
  //#region INSTRUCTION 1
  getOneOptions(){
    this.spinner.show();
    this.instructionService.getCategoryOneOptions(this.competency.id)
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
    this.instructionService.getCategoryOneResults(this.competency.id)
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

  //#region INSTRUCTION 2
  getTwoOptions(){
    this.instructionService.getCategoryTwoOptions(this.competency.id)
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
    this.instructionService.getCategoryTwoResults(this.competency.id)
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

  //#region INSTRUCTION 3
  getThreeOptions(){
    this.instructionService.getCategoryThreeOptions(this.competency.id)
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
    this.instructionService.getCategoryThreeResults(this.competency.id)
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

  //#region INSTRUCTION 4
  getFourOptions(){
    this.instructionService.getCategoryFourOptions(this.competency.id)
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
    this.instructionService.getCategoryFourResults(this.competency.id)
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

  //#region INSTRUCTION 5
  getFiveOptions(){
    this.instructionService.getCategoryFiveOptions(this.competency.id)
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
    this.instructionService.getCategoryFiveResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.fiveBasicResult = res.basicResult;
        this.competency.fiveIntermediateResult = res.intermediateResult;
        this.competency.fiveAdvancedResult = res.advancedResult;
        this.competency.fiveSuperiorResult = res.superiorResult;
        this.competency.fiveEssay = res.essay;

        this.getSixOptions();
      }
    )
  }
  //#endregion
  
  //#region INSTRUCTION 6
  getSixOptions(){
    this.instructionService.getCategorySixOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.sixBasicOptions = res.basicOptions;
        this.competency.sixIntermediateOptions = res.intermediateOptions;
        this.competency.sixAdvancedOptions = res.advancedOptions;
        this.competency.sixSuperiorOptions = res.superiorOptions;

        this.getSixResults();
      }
    )
  }
  getSixResults(){
    this.instructionService.getCategorySixResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.sixBasicResult = res.basicResult;
        this.competency.sixIntermediateResult = res.intermediateResult;
        this.competency.sixAdvancedResult = res.advancedResult;
        this.competency.sixSuperiorResult = res.superiorResult;
        this.competency.sixEssay = res.essay;

        this.getSevenOptions();
      }
    )
  }
  //#endregion
    
  //#region INSTRUCTION 7
  getSevenOptions(){
    this.instructionService.getCategorySevenOptions(this.competency.id)
    .subscribe(
      res => {
        this.competency.sevenBasicOptions = res.basicOptions;
        this.competency.sevenIntermediateOptions = res.intermediateOptions;
        this.competency.sevenAdvancedOptions = res.advancedOptions;
        this.competency.sevenSuperiorOptions = res.superiorOptions;

        this.getSevenResults();
      }
    )
  }
  getSevenResults(){
    this.instructionService.getCategorySevenResults(this.competency.id)
    .subscribe(
      res => {
        this.competency.sevenBasicResult = res.basicResult;
        this.competency.sevenIntermediateResult = res.intermediateResult;
        this.competency.sevenAdvancedResult = res.advancedResult;
        this.competency.sevenSuperiorResult = res.superiorResult;
        this.competency.sevenEssay = res.essay;
  
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
