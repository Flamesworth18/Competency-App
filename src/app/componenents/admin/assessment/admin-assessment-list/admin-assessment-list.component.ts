import { PrintService } from './../../../../services/print.service';
import { DatePipe } from '@angular/common';
import { ProductionCompetencyService } from './../../../../services/production-competency.service';
import { InstructionResultComponent } from './../result/instruction-result/instruction-result.component';
import { InstructionCompetencyService } from './../../../../services/instruction-competency.service';
import { LeadershipResultComponent } from './../result/leadership-result/leadership-result.component';
import { LeadershipCompetencyService } from './../../../../services/leadership-competency.service';
import { SubResult } from '../../../../models/competency/subresult.model';
import { CoreResultComponent } from '../result/core-result/core-result.component';
import { ToastrService } from 'ngx-toastr';
import { Competencies } from './../../../../competencies/competencies';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubCompetency } from 'src/app/models/competency/subcompetency.model';
import { CoreCompetencyService } from 'src/app/services/core-competency.service';
import { LoaderService } from 'src/app/services/loader.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCompetencyService } from 'src/app/services/admin-competency.service';
import Swal from 'sweetalert2';
import { ResearchCompetencyService } from 'src/app/services/research-competency.service';
import { ExtensionCompetencyService } from 'src/app/services/extension-competency.service';
import { ResearchResultComponent } from '../result/research-result/research-result.component';
import { ExtensionResultComponent } from '../result/extension-result/extension-result.component';
import { ProductionResultComponent } from '../result/production-result/production-result.component';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './admin-assessment-list.component.html',
  styleUrls: ['./admin-assessment-list.component.scss']
})
export class AdminAssessmentListComponent implements OnInit {

  competencies = Competencies

  currentCompetency = 'Core';

  userCompetencies: SubCompetency[] = [];

  searchCompetency: any;
  start: any = null;
  end: any = null;

//#region CORE COMPETENCY
  coreOneResults: SubResult = {
    basicScore: '',
    basicTotalScore: '',
    basicResult: '',
    intermediateScore: '',
    intermediateTotalScore: '',
    intermediateResult: '',
    advancedScore: '',
    advancedTotalScore: '',
    advancedResult: '',
    superiorScore: '',
    superiorTotalScore: '',
    superiorResult: '',
  }
  coreTwoResults: SubResult = {
    basicScore: '',
    basicTotalScore: '',
    basicResult: '',
    intermediateScore: '',
    intermediateTotalScore: '',
    intermediateResult: '',
    advancedScore: '',
    advancedTotalScore: '',
    advancedResult: '',
    superiorScore: '',
    superiorTotalScore: '',
    superiorResult: '',
  } 
  coreThreeResults: SubResult = {
    basicScore: '',
    basicTotalScore: '',
    basicResult: '',
    intermediateScore: '',
    intermediateTotalScore: '',
    intermediateResult: '',
    advancedScore: '',
    advancedTotalScore: '',
    advancedResult: '',
    superiorScore: '',
    superiorTotalScore: '',
    superiorResult: '',
  }
//#endregion

//#region LEADERSHIP COMPETENCY
  leadershipOneResults: SubResult = {
    basicScore: '',
    basicTotalScore: '',
    basicResult: '',
    intermediateScore: '',
    intermediateTotalScore: '',
    intermediateResult: '',
    advancedScore: '',
    advancedTotalScore: '',
    advancedResult: '',
    superiorScore: '',
    superiorTotalScore: '',
    superiorResult: '',
  }
  leadershipTwoResults: SubResult = {
    basicScore: '',
    basicTotalScore: '',
    basicResult: '',
    intermediateScore: '',
    intermediateTotalScore: '',
    intermediateResult: '',
    advancedScore: '',
    advancedTotalScore: '',
    advancedResult: '',
    superiorScore: '',
    superiorTotalScore: '',
    superiorResult: '',
  }
  leadershipThreeResults: SubResult = {
    basicScore: '',
    basicTotalScore: '',
    basicResult: '',
    intermediateScore: '',
    intermediateTotalScore: '',
    intermediateResult: '',
    advancedScore: '',
    advancedTotalScore: '',
    advancedResult: '',
    superiorScore: '',
    superiorTotalScore: '',
    superiorResult: '',
  }
  leadershipFourResults: SubResult = {
    basicScore: '',
    basicTotalScore: '',
    basicResult: '',
    intermediateScore: '',
    intermediateTotalScore: '',
    intermediateResult: '',
    advancedScore: '',
    advancedTotalScore: '',
    advancedResult: '',
    superiorScore: '',
    superiorTotalScore: '',
    superiorResult: '',
  }
  leadershipFiveResults: SubResult = {
    basicScore: '',
    basicTotalScore: '',
    basicResult: '',
    intermediateScore: '',
    intermediateTotalScore: '',
    intermediateResult: '',
    advancedScore: '',
    advancedTotalScore: '',
    advancedResult: '',
    superiorScore: '',
    superiorTotalScore: '',
    superiorResult: '',
  }
//#endregion

//#region INSTRUCTION COMPETENCY
instructionOneResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
instructionTwoResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
instructionThreeResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
instructionFourResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
instructionFiveResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
instructionSixResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
instructionSevenResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
//#endregion

//#region RESEARCH COMPETENCY
researchOneResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
researchTwoResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
researchThreeResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
researchFourResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
researchFiveResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
researchSixResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
//#endregion

//#region EXTENSION COMPETENCY
extensionOneResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
extensionTwoResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
extensionThreeResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
extensionFourResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
extensionFiveResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
extensionSixResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
//#endregion

//#region PRODUCTION COMPETENCY
productionOneResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
productionTwoResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
productionThreeResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
productionFourResults: SubResult = {
  basicScore: '',
  basicTotalScore: '',
  basicResult: '',
  intermediateScore: '',
  intermediateTotalScore: '',
  intermediateResult: '',
  advancedScore: '',
  advancedTotalScore: '',
  advancedResult: '',
  superiorScore: '',
  superiorTotalScore: '',
  superiorResult: '',
}
//#endregion

  constructor(
    private router: Router,
    private adminCompetencyService: AdminCompetencyService,
    private coreCompetencyService: CoreCompetencyService,
    private leadershipCompetencyService: LeadershipCompetencyService,
    private instructionCompetencyService: InstructionCompetencyService,
    private researchCompetencyService: ResearchCompetencyService,
    private extensionCompetencyService: ExtensionCompetencyService,
    private productionCompetencyService: ProductionCompetencyService,
    public loader: LoaderService,
    private toastr: ToastrService,
    private dialogRef: MatDialog,
    private datePipe: DatePipe,
    private printService: PrintService
  ) { }

  ngOnInit(): void {
    var competency = sessionStorage.getItem('admin-competency')
    if(competency !== null){
      this.currentCompetency = competency;
    }

    this.getCompetencies();
  }

  //GET ALL COMPETENCIES
  getCompetencies(){
    this.adminCompetencyService.getCompetencies()
    .subscribe(
      res => {
        this.userCompetencies = res;
      }
    )
  }

  selectedCompetency(name: string){
    this.currentCompetency = name;
    this.searchCompetency = name;
    sessionStorage.setItem('admin-competency', name)
  }

  navigateToView(competency: SubCompetency){
    sessionStorage.setItem('adminCompetencyId', competency.competencyId);
    sessionStorage.setItem('adminCompetencyEmployeeName', competency.employeeName);
    sessionStorage.setItem('adminCompetencyDepartment', competency.department);
    sessionStorage.setItem('adminCompetencyCollege', competency.college);
    var competencyName = competency.competencyName.split(" ");
    this.router.navigate(['/admin-view-' + competencyName[0].toLowerCase()]);
  }

//VIEW COMPETENCY RESULTS
viewResult(competency: SubCompetency){

    if(competency.competencyName === 'Core Competency'){
      this.getCoreCompetencyOneResults(competency);
    }
    else if(competency.competencyName === 'Leadership Competency'){
      this.getLeadershipCompetencyOneResults(competency)
    }
    else if(competency.competencyName === 'Instruction Competency'){
      this.getInstructionCompetencyOneResults(competency)
    }
    else if(competency.competencyName === 'Research Competency'){
      this.getResearchCompetencyOneResults(competency)
    }
    else if(competency.competencyName === 'Extension Competency'){
      this.getExtensionCompetencyOneResults(competency)
    }
    else if(competency.competencyName === 'Production Competency'){
      this.getProductionCompetencyOneResults(competency)
    }

}

//PRINT COMPETENCY
print(competency: SubCompetency){
  
  if(competency.competencyName === 'Core Competency'){
    sessionStorage.setItem("print", JSON.stringify(competency));
    sessionStorage.setItem("isPrinting", "true");
    this.printService.setPrint(true);
    this.router.navigate(['/admin-print-core'])
  }
  else if(competency.competencyName === 'Leadership Competency'){
    sessionStorage.setItem("print", JSON.stringify(competency));
    sessionStorage.setItem("isPrinting", "true");
    this.printService.setPrint(true);
    this.router.navigate(['/admin-print-leadership'])
  }
  else if(competency.competencyName === 'Instruction Competency'){
    sessionStorage.setItem("print", JSON.stringify(competency));
    sessionStorage.setItem("isPrinting", "true");
    this.printService.setPrint(true);
    this.router.navigate(['/admin-print-instruction'])
  }
  else if(competency.competencyName === 'Research Competency'){
    sessionStorage.setItem("print", JSON.stringify(competency));
    sessionStorage.setItem("isPrinting", "true");
    this.printService.setPrint(true);
    this.router.navigate(['/admin-print-research'])
  }
  else if(competency.competencyName === 'Extension Competency'){
    sessionStorage.setItem("print", JSON.stringify(competency));
    sessionStorage.setItem("isPrinting", "true");
    this.printService.setPrint(true);
    this.router.navigate(['/admin-print-extension'])
  }
  else if(competency.competencyName === 'Production Competency'){
    sessionStorage.setItem("print", JSON.stringify(competency));
    sessionStorage.setItem("isPrinting", "true");
    this.printService.setPrint(true);
    this.router.navigate(['/admin-print-production'])
  }

}

  //CONFIRM DELETION
  confirmDelete(competency: SubCompetency){
    Swal.fire({
      title: "Are you sure you want to remove?",
      text: "You will not be able to recover this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if(result.value){
        this.deleteCompetency(competency);
      }
    })
  }

//DELETE COMPETENCY
  deleteCompetency(competency: SubCompetency){
    if(competency.competencyName === 'Core Competency'){
      this.deleteCoreCompetency(competency);
    }
    else if(competency.competencyName === 'Leadership Competency'){
      this.deleteLeadershipCompetency(competency)
    }
    else if(competency.competencyName === 'Instruction Competency'){
      this.deleteInstructionCompetency(competency)
    }
    else if(competency.competencyName === 'Research Competency'){
      this.deleteResearchCompetency(competency)
    }
    else if(competency.competencyName === 'Extension Competency'){
      this.deleteExtensionCompetency(competency)
    }
    else if(competency.competencyName === 'Production Competency'){
      this.deleteProductionCompetency(competency)
    }
  }

  //#region DELETE CORE COMPETENCY
  deleteCoreCompetency(competency: SubCompetency){
    
    this.deleteCoreCompetencyOne(competency.competencyId);
    
  } 

  deleteCoreCompetencyOne(id: string){
    this.coreCompetencyService.deleteCompetencyOne(id)
    .subscribe(
      res => {
        this.deleteCoreCompetencyTwo(id);
      }
    )
  }

  deleteCoreCompetencyTwo(id: string){
    this.coreCompetencyService.deleteCompetencyTwo(id)
    .subscribe(
      res => {
        this.deleteCoreCompetencyThree(id);
      }
    )
  }

  deleteCoreCompetencyThree(id: string){
    this.coreCompetencyService.deleteCompetencyThree(id)
    .subscribe(
      res => {
        this.deleteWholeCoreCompetency(id);
      }
    )
  }

  deleteWholeCoreCompetency(id: string){
    this.coreCompetencyService.deleteWholeCompetency(id)
    .subscribe(
      res => {
        this.toastr.success("has been deleted successfully!", "Core Competency");
        sessionStorage.clear();
      }
    )
  }

//#endregion

  //#region RESULT CORE COMPETENCY
  getCoreCompetencyOneResults(competency: SubCompetency){
    this.coreCompetencyService.getCompetencyOneResults(competency.competencyId)
    .subscribe(
      res => {
        this.coreOneResults = res;
        this.getCoreCompetencyTwoResults(competency);
      }
    )
  }

  getCoreCompetencyTwoResults(competency: SubCompetency){
    this.coreCompetencyService.getCompetencyTwoResults(competency.competencyId)
    .subscribe(
      res => {
        this.coreTwoResults = res;
        this.getCoreCompetencyThreeResults(competency);
      }
    )
  }

  getCoreCompetencyThreeResults(competency: SubCompetency){
    this.coreCompetencyService.getCompetencyThreeResults(competency.competencyId)
    .subscribe(
      res => {
        this.coreThreeResults = res;

          this.dialogRef.open(CoreResultComponent, {
            data: {
              resultsOne: this.coreOneResults,
              resultsTwo: this.coreTwoResults,
              resultsThree: this.coreThreeResults
            }
          });
        
      }
    )
  }
  //#endregion

  //#region DELETE LEADERSHIP COMPETENCY
  deleteLeadershipCompetency(competency: SubCompetency){
    
    this.deleteLeadershipCompetencyOne(competency.competencyId);
    
  } 

  deleteLeadershipCompetencyOne(id: string){
    this.leadershipCompetencyService.deleteCompetencyOne(id)
    .subscribe(
      res => {
        this.deleteLeadershipCompetencyTwo(id);
      }
    )
  }

  deleteLeadershipCompetencyTwo(id: string){
    this.leadershipCompetencyService.deleteCompetencyTwo(id)
    .subscribe(
      res => {
        this.deleteLeadershipCompetencyThree(id);
      }
    )
  }

  deleteLeadershipCompetencyThree(id: string){
    this.leadershipCompetencyService.deleteCompetencyThree(id)
    .subscribe(
      res => {
        this.deleteLeadershipCompetencyFour(id);
      }
    )
  }

  deleteLeadershipCompetencyFour(id: string){
    this.leadershipCompetencyService.deleteCompetencyFour(id)
    .subscribe(
      res => {
        this.deleteLeadershipCompetencyFive(id);
      }
    )
  }

  deleteLeadershipCompetencyFive(id: string){
    this.leadershipCompetencyService.deleteCompetencyFive(id)
    .subscribe(
      res => {
        this.deleteWholeLeadershipCompetency(id);
      }
    )
  }

  deleteWholeLeadershipCompetency(id: string){
    this.leadershipCompetencyService.deleteWholeCompetency(id)
    .subscribe(
      res => {
        this.toastr.success("has been deleted successfully!", "Leadership Competency");
        sessionStorage.clear();
      }
    )
  }

//#endregion

  //#region RESULT LEADERSHIP COMPETENCY
  getLeadershipCompetencyOneResults(competency: SubCompetency){
    this.leadershipCompetencyService.getCompetencyOneResults(competency.competencyId)
    .subscribe(
      res => {
        this.leadershipOneResults = res;
        this.getLeadershipCompetencyTwoResults(competency);
      }
    )
  }

  getLeadershipCompetencyTwoResults(competency: SubCompetency){
    this.leadershipCompetencyService.getCompetencyTwoResults(competency.competencyId)
    .subscribe(
      res => {
        this.leadershipTwoResults = res;
        this.getLeadershipCompetencyThreeResults(competency);
      }
    )
  }

  getLeadershipCompetencyThreeResults(competency: SubCompetency){
    this.leadershipCompetencyService.getCompetencyThreeResults(competency.competencyId)
    .subscribe(
      res => {
        this.leadershipThreeResults = res;
        this.getLeadershipCompetencyFourResults(competency);
      }
    )
  }

  getLeadershipCompetencyFourResults(competency: SubCompetency){
    this.leadershipCompetencyService.getCompetencyFourResults(competency.competencyId)
    .subscribe(
      res => {
        this.leadershipFourResults = res;
        this.getLeadershipCompetencyFiveResults(competency);
      }
    )
  }

  getLeadershipCompetencyFiveResults(competency: SubCompetency){
    this.leadershipCompetencyService.getCompetencyFiveResults(competency.competencyId)
    .subscribe(
      res => {
        this.leadershipFiveResults = res;

          this.dialogRef.open(LeadershipResultComponent, {
            data: {
              resultsOne: this.leadershipOneResults,
              resultsTwo: this.leadershipTwoResults,
              resultsThree: this.leadershipThreeResults,
              resultsFour: this.leadershipFourResults,
              resultsFive: this.leadershipFiveResults
            }
          });
        
      }
    )
  }
  //#endregion

      
  //#region DELETE INSTRUCTION COMPETENCY
  deleteInstructionCompetency(competency: SubCompetency){
    
    this.deleteInstructionCompetencyOne(competency.competencyId);
    
  } 

  deleteInstructionCompetencyOne(id: string){
    this.instructionCompetencyService.deleteCompetencyOne(id)
    .subscribe(
      res => {
        this.deleteInstructionCompetencyTwo(id);
      }
    )
  }

  deleteInstructionCompetencyTwo(id: string){
    this.instructionCompetencyService.deleteCompetencyTwo(id)
    .subscribe(
      res => {
        this.deleteInstructionCompetencyThree(id);
      }
    )
  }

  deleteInstructionCompetencyThree(id: string){
    this.instructionCompetencyService.deleteCompetencyThree(id)
    .subscribe(
      res => {
        this.deleteInstructionCompetencyFour(id);
      }
    )
  }

  deleteInstructionCompetencyFour(id: string){
    this.instructionCompetencyService.deleteCompetencyFour(id)
    .subscribe(
      res => {
        this.deleteInstructionCompetencyFive(id);
      }
    )
  }

  deleteInstructionCompetencyFive(id: string){
    this.instructionCompetencyService.deleteCompetencyFive(id)
    .subscribe(
      res => {
        this.deleteInstructionCompetencySix(id);
      }
    )
  }

  deleteInstructionCompetencySix(id: string){
    this.instructionCompetencyService.deleteCompetencySix(id)
    .subscribe(
      res => {
        this.deleteInstructionCompetencySeven(id);
      }
    )
  }

  deleteInstructionCompetencySeven(id: string){
    this.instructionCompetencyService.deleteCompetencySeven(id)
    .subscribe(
      res => {
        this.deleteWholeInstructionCompetency(id);
      }
    )
  }

  deleteWholeInstructionCompetency(id: string){
    this.instructionCompetencyService.deleteWholeCompetency(id)
    .subscribe(
      res => {
        this.toastr.success("has been deleted successfully!", "Leadership Competency");
        sessionStorage.clear();
      }
    )
  }

//#endregion

  //#region RESULT INSTRUCTION COMPETENCY
  getInstructionCompetencyOneResults(competency: SubCompetency){
    this.instructionCompetencyService.getCompetencyOneResults(competency.competencyId)
    .subscribe(
      res => {
        this.instructionOneResults = res;
        this.getInstructionCompetencyTwoResults(competency);
      }
    )
  }

  getInstructionCompetencyTwoResults(competency: SubCompetency){
    this.instructionCompetencyService.getCompetencyTwoResults(competency.competencyId)
    .subscribe(
      res => {
        this.instructionTwoResults = res;
        this.getInstructionCompetencyThreeResults(competency);
      }
    )
  }

  getInstructionCompetencyThreeResults(competency: SubCompetency){
    this.instructionCompetencyService.getCompetencyThreeResults(competency.competencyId)
    .subscribe(
      res => {
        this.instructionThreeResults = res;
        this.getInstructionCompetencyFourResults(competency);
      }
    )
  }

  getInstructionCompetencyFourResults(competency: SubCompetency){
    this.instructionCompetencyService.getCompetencyFourResults(competency.competencyId)
    .subscribe(
      res => {
        this.instructionFourResults = res;
        this.getInstructionCompetencyFiveResults(competency);
      }
    )
  }
  
  getInstructionCompetencyFiveResults(competency: SubCompetency){
    this.instructionCompetencyService.getCompetencyFiveResults(competency.competencyId)
    .subscribe(
      res => {
        this.instructionFiveResults = res;
        this.getInstructionCompetencySixResults(competency);
      }
    )
  }
    
  getInstructionCompetencySixResults(competency: SubCompetency){
    this.instructionCompetencyService.getCompetencySixResults(competency.competencyId)
    .subscribe(
      res => {
        this.instructionSixResults = res;
        this.getInstructionCompetencySevenResults(competency);
      }
    )
  }

  getInstructionCompetencySevenResults(competency: SubCompetency){
    this.instructionCompetencyService.getCompetencySevenResults(competency.competencyId)
    .subscribe(
      res => {
        this.instructionSevenResults = res;

          this.dialogRef.open(InstructionResultComponent, {
            data: {
              resultsOne: this.instructionOneResults,
              resultsTwo: this.instructionTwoResults,
              resultsThree: this.instructionThreeResults,
              resultsFour: this.instructionFourResults,
              resultsFive: this.instructionFiveResults,
              resultsSix: this.instructionSixResults,
              resultsSeven: this.instructionSevenResults
            }
          });
        
      }
    )
  }
  //#endregion

        
  //#region DELETE RESEARCH COMPETENCY
  deleteResearchCompetency(competency: SubCompetency){
    
    this.deleteResearchCompetencyOne(competency.competencyId);
    
  } 

  deleteResearchCompetencyOne(id: string){
    this.researchCompetencyService.deleteCompetencyOne(id)
    .subscribe(
      res => {
        this.deleteResearchCompetencyTwo(id);
      }
    )
  }

  deleteResearchCompetencyTwo(id: string){
    this.researchCompetencyService.deleteCompetencyTwo(id)
    .subscribe(
      res => {
        this.deleteResearchCompetencyThree(id);
      }
    )
  }

  deleteResearchCompetencyThree(id: string){
    this.researchCompetencyService.deleteCompetencyThree(id)
    .subscribe(
      res => {
        this.deleteResearchCompetencyFour(id);
      }
    )
  }

  deleteResearchCompetencyFour(id: string){
    this.researchCompetencyService.deleteCompetencyFour(id)
    .subscribe(
      res => {
        this.deleteResearchCompetencyFive(id);
      }
    )
  }

  deleteResearchCompetencyFive(id: string){
    this.researchCompetencyService.deleteCompetencyFive(id)
    .subscribe(
      res => {
        this.deleteResearchCompetencySix(id);
      }
    )
  }

  deleteResearchCompetencySix(id: string){
    this.researchCompetencyService.deleteCompetencySix(id)
    .subscribe(
      res => {
        this.deleteWholeResearchCompetency(id);
      }
    )
  }

  deleteWholeResearchCompetency(id: string){
    this.researchCompetencyService.deleteWholeCompetency(id)
    .subscribe(
      res => {
        this.toastr.success("has been deleted successfully!", "Research Competency");
        sessionStorage.clear();
      }
    )
  }

//#endregion

  //#region RESULT RESEARCH COMPETENCY
  getResearchCompetencyOneResults(competency: SubCompetency){
    this.researchCompetencyService.getCompetencyOneResults(competency.competencyId)
    .subscribe(
      res => {
        this.researchOneResults = res;
        this.getResearchCompetencyTwoResults(competency);
      }
    )
  }

  getResearchCompetencyTwoResults(competency: SubCompetency){
    this.researchCompetencyService.getCompetencyTwoResults(competency.competencyId)
    .subscribe(
      res => {
        this.researchTwoResults = res;
        this.getResearchCompetencyThreeResults(competency);
      }
    )
  }

  getResearchCompetencyThreeResults(competency: SubCompetency){
    this.researchCompetencyService.getCompetencyThreeResults(competency.competencyId)
    .subscribe(
      res => {
        this.researchThreeResults = res;
        this.getResearchCompetencyFourResults(competency);
      }
    )
  }

  getResearchCompetencyFourResults(competency: SubCompetency){
    this.researchCompetencyService.getCompetencyFourResults(competency.competencyId)
    .subscribe(
      res => {
        this.researchFourResults = res;
        this.getResearchCompetencyFiveResults(competency);
      }
    )
  }
  
  getResearchCompetencyFiveResults(competency: SubCompetency){
    this.researchCompetencyService.getCompetencyFiveResults(competency.competencyId)
    .subscribe(
      res => {
        this.researchFiveResults = res;
        this.getResearchCompetencySixResults(competency);
      }
    )
  }

  getResearchCompetencySixResults(competency: SubCompetency){
    this.researchCompetencyService.getCompetencySixResults(competency.competencyId)
    .subscribe(
      res => {
        this.researchSixResults = res;

          this.dialogRef.open(ResearchResultComponent, {
            data: {
              resultsOne: this.researchOneResults,
              resultsTwo: this.researchTwoResults,
              resultsThree: this.researchThreeResults,
              resultsFour: this.researchFourResults,
              resultsFive: this.researchFiveResults,
              resultsSix: this.researchSixResults,
            }
          });
        
      }
    )
  }
  //#endregion
        

  //#region DELETE EXTENSION COMPETENCY
  deleteExtensionCompetency(competency: SubCompetency){
    
    this.deleteExtensionCompetencyOne(competency.competencyId);
    
  } 

  deleteExtensionCompetencyOne(id: string){
    this.extensionCompetencyService.deleteCompetencyOne(id)
    .subscribe(
      res => {
        this.deleteExtensionCompetencyTwo(id);
      }
    )
  }

  deleteExtensionCompetencyTwo(id: string){
    this.extensionCompetencyService.deleteCompetencyTwo(id)
    .subscribe(
      res => {
        this.deleteExtensionCompetencyThree(id);
      }
    )
  }

  deleteExtensionCompetencyThree(id: string){
    this.extensionCompetencyService.deleteCompetencyThree(id)
    .subscribe(
      res => {
        this.deleteExtensionCompetencyFour(id);
      }
    )
  }

  deleteExtensionCompetencyFour(id: string){
    this.extensionCompetencyService.deleteCompetencyFour(id)
    .subscribe(
      res => {
        this.deleteExtensionCompetencyFive(id);
      }
    )
  }

  deleteExtensionCompetencyFive(id: string){
    this.extensionCompetencyService.deleteCompetencyFive(id)
    .subscribe(
      res => {
        this.deleteExtensionCompetencySix(id);
      }
    )
  }

  deleteExtensionCompetencySix(id: string){
    this.extensionCompetencyService.deleteCompetencySix(id)
    .subscribe(
      res => {
        this.deleteWholeExtensionCompetency(id);
      }
    )
  }

  deleteWholeExtensionCompetency(id: string){
    this.extensionCompetencyService.deleteWholeCompetency(id)
    .subscribe(
      res => {
        this.toastr.success("has been deleted successfully!", "Extension Competency");
        sessionStorage.clear();
      }
    )
  }

//#endregion

  //#region RESULT EXTENSION COMPETENCY
  getExtensionCompetencyOneResults(competency: SubCompetency){
    this.extensionCompetencyService.getCompetencyOneResults(competency.competencyId)
    .subscribe(
      res => {
        this.extensionOneResults = res;
        this.getExtensionCompetencyTwoResults(competency);
      }
    )
  }

  getExtensionCompetencyTwoResults(competency: SubCompetency){
    this.extensionCompetencyService.getCompetencyTwoResults(competency.competencyId)
    .subscribe(
      res => {
        this.extensionTwoResults = res;
        this.getExtensionCompetencyThreeResults(competency);
      }
    )
  }

  getExtensionCompetencyThreeResults(competency: SubCompetency){
    this.extensionCompetencyService.getCompetencyThreeResults(competency.competencyId)
    .subscribe(
      res => {
        this.extensionThreeResults = res;
        this.getExtensionCompetencyFourResults(competency);
      }
    )
  }

  getExtensionCompetencyFourResults(competency: SubCompetency){
    this.extensionCompetencyService.getCompetencyFourResults(competency.competencyId)
    .subscribe(
      res => {
        this.extensionFourResults = res;
        this.getExtensionCompetencyFiveResults(competency);
      }
    )
  }
  
  getExtensionCompetencyFiveResults(competency: SubCompetency){
    this.extensionCompetencyService.getCompetencyFiveResults(competency.competencyId)
    .subscribe(
      res => {
        this.extensionFiveResults = res;
        this.getExtensionCompetencySixResults(competency);
      }
    )
  }

  getExtensionCompetencySixResults(competency: SubCompetency){
    this.extensionCompetencyService.getCompetencySixResults(competency.competencyId)
    .subscribe(
      res => {
        this.extensionSixResults = res;

          this.dialogRef.open(ExtensionResultComponent, {
            data: {
              resultsOne: this.extensionOneResults,
              resultsTwo: this.extensionTwoResults,
              resultsThree: this.extensionThreeResults,
              resultsFour: this.extensionFourResults,
              resultsFive: this.extensionFiveResults,
              resultsSix: this.extensionSixResults,
            }
          });
        
      }
    )
  }
  //#endregion

  
  //#region DELETE PRODUCTION COMPETENCY
  deleteProductionCompetency(competency: SubCompetency){
    
    this.deleteProductionCompetencyOne(competency.competencyId);
    
  } 

  deleteProductionCompetencyOne(id: string){
    this.productionCompetencyService.deleteCompetencyOne(id)
    .subscribe(
      res => {
        this.deleteProductionCompetencyTwo(id);
      }
    )
  }

  deleteProductionCompetencyTwo(id: string){
    this.productionCompetencyService.deleteCompetencyTwo(id)
    .subscribe(
      res => {
        this.deleteProductionCompetencyThree(id);
      }
    )
  }

  deleteProductionCompetencyThree(id: string){
    this.productionCompetencyService.deleteCompetencyThree(id)
    .subscribe(
      res => {
        this.deleteProductionCompetencyFour(id);
      }
    )
  }

  deleteProductionCompetencyFour(id: string){
    this.productionCompetencyService.deleteCompetencyFour(id)
    .subscribe(
      res => {
        this.deleteWholeProductionCompetency(id);
      }
    )
  }

  deleteWholeProductionCompetency(id: string){
    this.productionCompetencyService.deleteWholeCompetency(id)
    .subscribe(
      res => {
        this.toastr.success("has been deleted successfully!", "Production Competency");
        sessionStorage.clear();
      }
    )
  }

//#endregion

  //#region RESULT PRODUCTION COMPETENCY
  getProductionCompetencyOneResults(competency: SubCompetency){
    this.productionCompetencyService.getCompetencyOneResults(competency.competencyId)
    .subscribe(
      res => {
        this.productionOneResults = res;
        this.getProductionCompetencyTwoResults(competency);
      }
    )
  }

  getProductionCompetencyTwoResults(competency: SubCompetency){
    this.productionCompetencyService.getCompetencyTwoResults(competency.competencyId)
    .subscribe(
      res => {
        this.productionTwoResults = res;
        this.getProductionCompetencyThreeResults(competency);
      }
    )
  }

  getProductionCompetencyThreeResults(competency: SubCompetency){
    this.productionCompetencyService.getCompetencyThreeResults(competency.competencyId)
    .subscribe(
      res => {
        this.productionThreeResults = res;
        this.getProductionCompetencyFourResults(competency);
      }
    )
  }

  getProductionCompetencyFourResults(competency: SubCompetency){
    this.productionCompetencyService.getCompetencyFourResults(competency.competencyId)
    .subscribe(
      res => {
        this.productionFourResults = res;

          this.dialogRef.open(ProductionResultComponent, {
            data: {
              resultsOne: this.productionOneResults,
              resultsTwo: this.productionTwoResults,
              resultsThree: this.productionThreeResults,
              resultsFour: this.productionFourResults
            }
          });
        
      }
    )
  }
  //#endregion

  //SHOW BY
  showByRecently(){
    this.searchCompetency = this.datePipe.transform(Date.now(), 'EEEE, d MMMM y');
    this.start = null;
    this.end = null;
  }
  showByYesterday(){
    var date = new Date();
    date.setDate(date.getDate() - 1);
    this.searchCompetency = this.datePipe.transform(date.toDateString(), 'EEEE, d MMMM y');
    this.start = null;
    this.end = null;
  }
  showByThisWeek(){
    let now = new Date();
    let dayOfWeek = now.getDay() + 1; //1-7
    let numDay = now.getDate();

    let start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);


    let end = new Date(now); //copy
    end.setDate(numDay + (7 - dayOfWeek));
    end.setHours(0, 0, 0, 0);

    this.start = start;
    this.end = end;
    this.searchCompetency = "";
  }
  showByThisMonth(){
    this.searchCompetency = this.datePipe.transform(Date.now(), 'MMMM');
    this.start = null;
    this.end = null;
  }

  filterBy(competency: SubCompetency){
    var date = new Date(competency.dateCreated);

    if(this.start !== null && this.end !== null){
      return date >= this.start && date <= this.end ? true : false;
    }

    return true;
  }
}
