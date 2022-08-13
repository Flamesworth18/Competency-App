import { AuthService } from './../../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserInstructionCompetencyService } from './../../../../services/user-instruction-competency.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competencies } from 'src/app/competencies/competencies';
import { InstructionCompetency } from 'src/app/models/competency/instruction-competency.model';
import { InstructionCompetencyRoute } from 'src/app/routes/instruction-competency-routes';
import Swal from 'sweetalert2';
import { SubCategory } from 'src/app/models/competency/subcategory.model';
import { Category } from 'src/app/models/competency/category.model';

@Component({
  selector: 'app-instruction-seven-b',
  templateUrl: './instruction-seven-b.component.html',
  styleUrls: ['./instruction-seven-b.component.scss']
})
export class InstructionSevenBComponent implements OnInit {

  instructionCompetencyRoutes = InstructionCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core';

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
   
  category: Category = {
    competencyName: '',
    employeeName: '',
    department: '',
    college: ''
  }
  subcategory: SubCategory = {
    options: [
      {
        id: '',
        label: '',
        isChecked: false
      }
    ],
    result: {
      id: '',
      notYet: false,
      partially: false,
      competent: false
    },
    essay: ''
  }

  instructionId:string = '';
  disable:boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userInstructionCompetencyService: UserInstructionCompetencyService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    
    this.userInstructionCompetency = JSON.parse(sessionStorage.getItem('userInstructionCompetency') || '') as InstructionCompetency;
    
    var competency = sessionStorage.getItem('competency')
    if(competency !== null){
      this.currentCompetency = competency;
    }
  }

  isPageActive(route: string): boolean{
    var currentRoute = this.router.url;
    return currentRoute === route? true : false;
  }

  selectedCompetency(name: string){
    this.currentCompetency = name;
    sessionStorage.setItem('competency', name);
    this.router.navigate(['/assessment-instruction']);
  }

  confirmNavigate(name: string){
    var competency = sessionStorage.getItem('competency') || '';

    if(competency !== name){
      
      Swal.fire({
        title: "Are you sure you want to go to " + name + " Competency page",
        text: "Your data will not be save!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, redirect me",
        cancelButtonText: "Cancel"
      }).then((result) => {
        if(result.value){
          sessionStorage.removeItem("userInstructionCompetency");
          this.selectedCompetency(name);
        }
      })      

    }

  }
  navigateToPagination(route: string){
    sessionStorage.setItem('userInstructionCompetency', JSON.stringify(this.userInstructionCompetency));
    this.router.navigate([route]);
  }
  
  navigateToTakenAssessments(){
    Swal.fire({
      title: "Are you sure you want to go to your taken assessments?",
      text: "Your data will not be save!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, redirect me",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if(result.value){
        sessionStorage.removeItem("userInstructionCompetency");
        this.router.navigate(['/user-assessment-list']);
      }
    }) 
  }

   
  submitAssessment(){
    this.toastr.warning("This may take a few minutes...", "Please Wait!");
    this.disable = true;
    this.saveCompetency();
  }

    
  saveCompetency(){
    this.category.competencyName = this.userInstructionCompetency.competencyName;
    this.category.employeeName = this.userInstructionCompetency.employeeName;
    this.category.department = this.userInstructionCompetency.department;
    this.category.college = this.userInstructionCompetency.college;

    this.userInstructionCompetencyService.createInstructionCompetency(this.authService.user.id, this.category)
    .subscribe(
      res => {
        this.instructionId = res.id;
        this.saveCompetencyOneBasic();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#region COMPETENCY 1

  //BASIC
  saveCompetencyOneBasic(){
    this.subcategory.options = this.userInstructionCompetency.oneBasicOptions;
    this.subcategory.result = this.userInstructionCompetency.oneBasicResult;

    this.subcategory.essay = this.userInstructionCompetency.oneEssay;

    this.userInstructionCompetencyService.createCompetencyOneBasic(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyOneIntermediate();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //INTERMEDIATE
  saveCompetencyOneIntermediate(){
    this.subcategory.options = this.userInstructionCompetency.oneIntermediateOptions;
    this.subcategory.result = this.userInstructionCompetency.oneIntermediateResult;

    this.subcategory.essay = this.userInstructionCompetency.oneEssay;

    this.userInstructionCompetencyService.createCompetencyOneIntermediate(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyOneAdvanced();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //ADVANCED
  saveCompetencyOneAdvanced(){
    this.subcategory.options = this.userInstructionCompetency.oneAdvancedOptions;
    this.subcategory.result = this.userInstructionCompetency.oneAdvancedResult;

    this.subcategory.essay = this.userInstructionCompetency.oneEssay;

    this.userInstructionCompetencyService.createCompetencyOneAdvanced(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyOneSuperior();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //SUPERIOR
  saveCompetencyOneSuperior(){
    this.subcategory.options = this.userInstructionCompetency.oneSuperiorOptions;
    this.subcategory.result = this.userInstructionCompetency.oneSuperiorResult;

    this.subcategory.essay = this.userInstructionCompetency.oneEssay;

    this.userInstructionCompetencyService.createCompetencyOneSuperior(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Instruction Competency 1");
        this.saveCompetencyTwoBasic();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#endregion

  
  //#region COMPETENCY 2

  //BASIC
  saveCompetencyTwoBasic(){
    this.subcategory.options = this.userInstructionCompetency.twoBasicOptions;
    this.subcategory.result = this.userInstructionCompetency.twoBasicResult;

    this.subcategory.essay = this.userInstructionCompetency.twoEssay;

    this.userInstructionCompetencyService.createCompetencyTwoBasic(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyTwoIntermediate();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //INTERMEDIATE
  saveCompetencyTwoIntermediate(){
    this.subcategory.options = this.userInstructionCompetency.twoIntermediateOptions;
    this.subcategory.result = this.userInstructionCompetency.twoIntermediateResult;

    this.subcategory.essay = this.userInstructionCompetency.twoEssay;

    this.userInstructionCompetencyService.createCompetencyTwoIntermediate(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyTwoAdvanced();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //ADVANCED
  saveCompetencyTwoAdvanced(){
    this.subcategory.options = this.userInstructionCompetency.twoAdvancedOptions;
    this.subcategory.result = this.userInstructionCompetency.twoAdvancedResult;

    this.subcategory.essay = this.userInstructionCompetency.twoEssay;

    this.userInstructionCompetencyService.createCompetencyTwoAdvanced(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyTwoSuperior();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //SUPERIOR
  saveCompetencyTwoSuperior(){
    this.subcategory.options = this.userInstructionCompetency.twoSuperiorOptions;
    this.subcategory.result = this.userInstructionCompetency.twoSuperiorResult;

    this.subcategory.essay = this.userInstructionCompetency.twoEssay;

    this.userInstructionCompetencyService.createCompetencyTwoSuperior(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Instruction Competency 2");
        this.saveCompetencyThreeBasic();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#endregion

  
  //#region COMPETENCY 3

  //BASIC 
  saveCompetencyThreeBasic(){
    this.subcategory.options = this.userInstructionCompetency.threeBasicOptions;
    this.subcategory.result = this.userInstructionCompetency.threeBasicResult;

    this.subcategory.essay = this.userInstructionCompetency.threeEssay; 
    this.userInstructionCompetencyService.createCompetencyThreeBasic(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyThreeIntermediate();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //INTERMEDIATE 
  saveCompetencyThreeIntermediate(){
    this.subcategory.options = this.userInstructionCompetency.threeIntermediateOptions;
    this.subcategory.result = this.userInstructionCompetency.threeIntermediateResult;

    this.subcategory.essay = this.userInstructionCompetency.threeEssay; 
    this.userInstructionCompetencyService.createCompetencyThreeIntermediate(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyThreeAdvanced();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //ADVANCED 
  saveCompetencyThreeAdvanced(){
    this.subcategory.options = this.userInstructionCompetency.threeAdvancedOptions;
    this.subcategory.result = this.userInstructionCompetency.threeAdvancedResult;

    this.subcategory.essay = this.userInstructionCompetency.threeEssay; 
    this.userInstructionCompetencyService.createCompetencyThreeAdvanced(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyThreeSuperior();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //SUPERIOR 
  saveCompetencyThreeSuperior(){
    this.subcategory.options = this.userInstructionCompetency.threeSuperiorOptions;
    this.subcategory.result = this.userInstructionCompetency.threeSuperiorResult;

    this.subcategory.essay = this.userInstructionCompetency.threeEssay; 
    this.userInstructionCompetencyService.createCompetencyThreeSuperior(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Instruction Competency 3");
        this.saveCompetencyFourBasic();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#endregion

  
  //#region COMPETENCY 4

  //BASIC
  saveCompetencyFourBasic(){
    this.subcategory.options = this.userInstructionCompetency.fourBasicOptions;
    this.subcategory.result = this.userInstructionCompetency.fourBasicResult;

    this.subcategory.essay = this.userInstructionCompetency.fourEssay;

    this.userInstructionCompetencyService.createCompetencyFourBasic(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyFourIntermediate();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //INTERMEDIATE
  saveCompetencyFourIntermediate(){
    this.subcategory.options = this.userInstructionCompetency.fourIntermediateOptions;
    this.subcategory.result = this.userInstructionCompetency.fourIntermediateResult;

    this.subcategory.essay = this.userInstructionCompetency.fourEssay;

    this.userInstructionCompetencyService.createCompetencyFourIntermediate(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyFourAdvanced();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //ADVANCED
  saveCompetencyFourAdvanced(){
    this.subcategory.options = this.userInstructionCompetency.fourAdvancedOptions;
    this.subcategory.result = this.userInstructionCompetency.fourAdvancedResult;

    this.subcategory.essay = this.userInstructionCompetency.fourEssay;

    this.userInstructionCompetencyService.createCompetencyFourAdvanced(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyFourSuperior();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //SUPERIOR
  saveCompetencyFourSuperior(){
    this.subcategory.options = this.userInstructionCompetency.fourSuperiorOptions;
    this.subcategory.result = this.userInstructionCompetency.fourSuperiorResult;

    this.subcategory.essay = this.userInstructionCompetency.fourEssay;

    this.userInstructionCompetencyService.createCompetencyFourSuperior(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Instruction Competency 4");
        this.saveCompetencyFiveBasic();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#endregion

  
  //#region COMPETENCY 5

  //BASIC
  saveCompetencyFiveBasic(){
    this.subcategory.options = this.userInstructionCompetency.fiveBasicOptions;
    this.subcategory.result = this.userInstructionCompetency.fiveBasicResult;

    this.subcategory.essay = this.userInstructionCompetency.fiveEssay;

    this.userInstructionCompetencyService.createCompetencyFiveBasic(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyFiveIntermediate();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //INTERMEDIATE
  saveCompetencyFiveIntermediate(){
    this.subcategory.options = this.userInstructionCompetency.fiveIntermediateOptions;
    this.subcategory.result = this.userInstructionCompetency.fiveIntermediateResult;

    this.subcategory.essay = this.userInstructionCompetency.fiveEssay;

    this.userInstructionCompetencyService.createCompetencyFiveIntermediate(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyFiveAdvanced();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //ADVANCED
  saveCompetencyFiveAdvanced(){
    this.subcategory.options = this.userInstructionCompetency.fiveAdvancedOptions;
    this.subcategory.result = this.userInstructionCompetency.fiveAdvancedResult;

    this.subcategory.essay = this.userInstructionCompetency.fiveEssay;

    this.userInstructionCompetencyService.createCompetencyFiveAdvanced(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencyFiveSuperior();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //SUPERIOR
  saveCompetencyFiveSuperior(){
    this.subcategory.options = this.userInstructionCompetency.fiveSuperiorOptions;
    this.subcategory.result = this.userInstructionCompetency.fiveSuperiorResult;

    this.subcategory.essay = this.userInstructionCompetency.fiveEssay;

    this.userInstructionCompetencyService.createCompetencyFiveSuperior(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Instruction Competency 5");
        this.saveCompetencySixBasic();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#endregion

    
  //#region COMPETENCY 6

  //BASIC
  saveCompetencySixBasic(){
    this.subcategory.options = this.userInstructionCompetency.sixBasicOptions;
    this.subcategory.result = this.userInstructionCompetency.sixBasicResult;

    this.subcategory.essay = this.userInstructionCompetency.sixEssay;

    this.userInstructionCompetencyService.createCompetencySixBasic(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencySixIntermediate();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //INTERMEDIATE
  saveCompetencySixIntermediate(){
    this.subcategory.options = this.userInstructionCompetency.sixIntermediateOptions;
    this.subcategory.result = this.userInstructionCompetency.sixIntermediateResult;

    this.subcategory.essay = this.userInstructionCompetency.sixEssay;

    this.userInstructionCompetencyService.createCompetencySixIntermediate(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencySixAdvanced();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //ADVANCED
  saveCompetencySixAdvanced(){
    this.subcategory.options = this.userInstructionCompetency.sixAdvancedOptions;
    this.subcategory.result = this.userInstructionCompetency.sixAdvancedResult;

    this.subcategory.essay = this.userInstructionCompetency.sixEssay;

    this.userInstructionCompetencyService.createCompetencySixAdvanced(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencySixSuperior();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //SUPERIOR
  saveCompetencySixSuperior(){
    this.subcategory.options = this.userInstructionCompetency.sixSuperiorOptions;
    this.subcategory.result = this.userInstructionCompetency.sixSuperiorResult;

    this.subcategory.essay = this.userInstructionCompetency.sixEssay;

    this.userInstructionCompetencyService.createCompetencySixSuperior(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Instruction Competency 6");
        this.saveCompetencySevenBasic();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#endregion


  //#region COMPETENCY 7

  //BASIC
  saveCompetencySevenBasic(){
    this.subcategory.options = this.userInstructionCompetency.sevenBasicOptions;
    this.subcategory.result = this.userInstructionCompetency.sevenBasicResult;

    this.subcategory.essay = this.userInstructionCompetency.sevenEssay;

    this.userInstructionCompetencyService.createCompetencySevenBasic(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencySevenIntermediate();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //INTERMEDIATE
  saveCompetencySevenIntermediate(){
    this.subcategory.options = this.userInstructionCompetency.sevenIntermediateOptions;
    this.subcategory.result = this.userInstructionCompetency.sevenIntermediateResult;

    this.subcategory.essay = this.userInstructionCompetency.sevenEssay;

    this.userInstructionCompetencyService.createCompetencySevenIntermediate(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencySevenAdvanced();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //ADVANCED
  saveCompetencySevenAdvanced(){
    this.subcategory.options = this.userInstructionCompetency.sevenAdvancedOptions;
    this.subcategory.result = this.userInstructionCompetency.sevenAdvancedResult;

    this.subcategory.essay = this.userInstructionCompetency.sevenEssay;

    this.userInstructionCompetencyService.createCompetencySevenAdvanced(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.saveCompetencySevenSuperior();
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //SUPERIOR
  saveCompetencySevenSuperior(){
    this.subcategory.options = this.userInstructionCompetency.sevenBasicOptions;
    this.subcategory.result = this.userInstructionCompetency.sevenBasicResult;

    this.subcategory.essay = this.userInstructionCompetency.sevenEssay;

    this.userInstructionCompetencyService.createCompetencySevenSuperior(this.instructionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Instruction Competency 7");
        this.toastr.success("Assessment has been submitted!", "Congratulations");

        sessionStorage.removeItem("userInstructionCompetency");

        this.router.navigate(['/user-assessment-list']);
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#endregion

}
