import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Competencies } from 'src/app/competencies/competencies';
import { Category } from 'src/app/models/competency/category.model';
import { ExtensionCompetency } from 'src/app/models/competency/extension-competency.model';
import { SubCategory } from 'src/app/models/competency/subcategory.model';
import { ExtensionCompetencyRoute } from 'src/app/routes/extension-competency-routes';
import { UserExtensionCompetencyService } from 'src/app/services/user-extension-competency.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-extension-six-b',
  templateUrl: './extension-six-b.component.html',
  styleUrls: ['./extension-six-b.component.scss']
})
export class ExtensionSixBComponent implements OnInit {

  extensionCompetencyRoutes = ExtensionCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core';

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
  extensionId:string = '';
  disable:boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userExtensionCompetencyService: UserExtensionCompetencyService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.extensionId = sessionStorage.getItem("extensionId") || '';
    
    this.userExtensionCompetency = JSON.parse(sessionStorage.getItem('userExtensionCompetency') || '') as ExtensionCompetency;

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
          sessionStorage.removeItem("userExtensionCompetency");
          this.selectedCompetency(name);
        }
      })      

    }

  }

  navigateToPagination(route: string){
    sessionStorage.setItem('userExtensionCompetency', JSON.stringify(this.userExtensionCompetency));
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
        sessionStorage.removeItem("userExtensionCompetency");
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
    this.category.competencyName = this.userExtensionCompetency.competencyName;
    this.category.employeeName = this.userExtensionCompetency.employeeName;
    this.category.department = this.userExtensionCompetency.department;
    this.category.college = this.userExtensionCompetency.college;

    this.userExtensionCompetencyService.createExtensionCompetency(this.authService.user.id, this.category)
    .subscribe(
      res => {
        this.extensionId = res.id;
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
    this.subcategory.options = this.userExtensionCompetency.oneBasicOptions;
    this.subcategory.result = this.userExtensionCompetency.oneBasicResult;

    this.subcategory.essay = this.userExtensionCompetency.oneEssay;

    this.userExtensionCompetencyService.createCompetencyOneBasic(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.oneIntermediateOptions;
    this.subcategory.result = this.userExtensionCompetency.oneIntermediateResult;

    this.subcategory.essay = this.userExtensionCompetency.oneEssay;

    this.userExtensionCompetencyService.createCompetencyOneIntermediate(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.oneAdvancedOptions;
    this.subcategory.result = this.userExtensionCompetency.oneAdvancedResult;

    this.subcategory.essay = this.userExtensionCompetency.oneEssay;

    this.userExtensionCompetencyService.createCompetencyOneAdvanced(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.oneSuperiorOptions;
    this.subcategory.result = this.userExtensionCompetency.oneSuperiorResult;

    this.subcategory.essay = this.userExtensionCompetency.oneEssay;

    this.userExtensionCompetencyService.createCompetencyOneSuperior(this.extensionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Extension Competency 1");
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
    this.subcategory.options = this.userExtensionCompetency.twoBasicOptions;
    this.subcategory.result = this.userExtensionCompetency.twoBasicResult;

    this.subcategory.essay = this.userExtensionCompetency.twoEssay;

    this.userExtensionCompetencyService.createCompetencyTwoBasic(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.twoIntermediateOptions;
    this.subcategory.result = this.userExtensionCompetency.twoIntermediateResult;

    this.subcategory.essay = this.userExtensionCompetency.twoEssay;

    this.userExtensionCompetencyService.createCompetencyTwoIntermediate(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.twoAdvancedOptions;
    this.subcategory.result = this.userExtensionCompetency.twoAdvancedResult;

    this.subcategory.essay = this.userExtensionCompetency.twoEssay;

    this.userExtensionCompetencyService.createCompetencyTwoAdvanced(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.twoSuperiorOptions;
    this.subcategory.result = this.userExtensionCompetency.twoSuperiorResult;

    this.subcategory.essay = this.userExtensionCompetency.twoEssay;

    this.userExtensionCompetencyService.createCompetencyTwoSuperior(this.extensionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Extension Competency 2");
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
    this.subcategory.options = this.userExtensionCompetency.threeBasicOptions;
    this.subcategory.result = this.userExtensionCompetency.threeBasicResult;

    this.subcategory.essay = this.userExtensionCompetency.threeEssay; 
    this.userExtensionCompetencyService.createCompetencyThreeBasic(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.threeIntermediateOptions;
    this.subcategory.result = this.userExtensionCompetency.threeIntermediateResult;

    this.subcategory.essay = this.userExtensionCompetency.threeEssay; 
    this.userExtensionCompetencyService.createCompetencyThreeIntermediate(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.threeAdvancedOptions;
    this.subcategory.result = this.userExtensionCompetency.threeAdvancedResult;

    this.subcategory.essay = this.userExtensionCompetency.threeEssay; 
    this.userExtensionCompetencyService.createCompetencyThreeAdvanced(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.threeSuperiorOptions;
    this.subcategory.result = this.userExtensionCompetency.threeSuperiorResult;

    this.subcategory.essay = this.userExtensionCompetency.threeEssay; 
    this.userExtensionCompetencyService.createCompetencyThreeSuperior(this.extensionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Extension Competency 3");
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
    this.subcategory.options = this.userExtensionCompetency.fourBasicOptions;
    this.subcategory.result = this.userExtensionCompetency.fourBasicResult;

    this.subcategory.essay = this.userExtensionCompetency.fourEssay;

    this.userExtensionCompetencyService.createCompetencyFourBasic(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.fourIntermediateOptions;
    this.subcategory.result = this.userExtensionCompetency.fourIntermediateResult;

    this.subcategory.essay = this.userExtensionCompetency.fourEssay;

    this.userExtensionCompetencyService.createCompetencyFourIntermediate(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.fourAdvancedOptions;
    this.subcategory.result = this.userExtensionCompetency.fourAdvancedResult;

    this.subcategory.essay = this.userExtensionCompetency.fourEssay;

    this.userExtensionCompetencyService.createCompetencyFourAdvanced(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.fourSuperiorOptions;
    this.subcategory.result = this.userExtensionCompetency.fourSuperiorResult;

    this.subcategory.essay = this.userExtensionCompetency.fourEssay;

    this.userExtensionCompetencyService.createCompetencyFourSuperior(this.extensionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Extension Competency 4");
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
    this.subcategory.options = this.userExtensionCompetency.fiveBasicOptions;
    this.subcategory.result = this.userExtensionCompetency.fiveBasicResult;

    this.subcategory.essay = this.userExtensionCompetency.fiveEssay;

    this.userExtensionCompetencyService.createCompetencyFiveBasic(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.fiveIntermediateOptions;
    this.subcategory.result = this.userExtensionCompetency.fiveIntermediateResult;

    this.subcategory.essay = this.userExtensionCompetency.fiveEssay;

    this.userExtensionCompetencyService.createCompetencyFiveIntermediate(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.fiveAdvancedOptions;
    this.subcategory.result = this.userExtensionCompetency.fiveAdvancedResult;

    this.subcategory.essay = this.userExtensionCompetency.fiveEssay;

    this.userExtensionCompetencyService.createCompetencyFiveAdvanced(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.fiveSuperiorOptions;
    this.subcategory.result = this.userExtensionCompetency.fiveSuperiorResult;

    this.subcategory.essay = this.userExtensionCompetency.fiveEssay;

    this.userExtensionCompetencyService.createCompetencyFiveSuperior(this.extensionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Extension Competency 5");
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
    this.subcategory.options = this.userExtensionCompetency.sixBasicOptions;
    this.subcategory.result = this.userExtensionCompetency.sixBasicResult;

    this.subcategory.essay = this.userExtensionCompetency.sixEssay;

    this.userExtensionCompetencyService.createCompetencySixBasic(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.sixIntermediateOptions;
    this.subcategory.result = this.userExtensionCompetency.sixIntermediateResult;

    this.subcategory.essay = this.userExtensionCompetency.sixEssay;

    this.userExtensionCompetencyService.createCompetencySixIntermediate(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.sixAdvancedOptions;
    this.subcategory.result = this.userExtensionCompetency.sixAdvancedResult;

    this.subcategory.essay = this.userExtensionCompetency.sixEssay;

    this.userExtensionCompetencyService.createCompetencySixAdvanced(this.extensionId, this.subcategory)
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
    this.subcategory.options = this.userExtensionCompetency.sixSuperiorOptions;
    this.subcategory.result = this.userExtensionCompetency.sixSuperiorResult;

    this.subcategory.essay = this.userExtensionCompetency.sixEssay;

    this.userExtensionCompetencyService.createCompetencySixSuperior(this.extensionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Extension Competency 6");
        this.toastr.success("Assessment has been submitted!", "Congratulations");

        sessionStorage.removeItem("userExtensionCompetency");

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
