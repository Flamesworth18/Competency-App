import { AuthService } from './../../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserCoreCompetencyService } from './../../../../services/user-core-competency.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competencies } from 'src/app/competencies/competencies';
import { CoreCompetencyRoute } from 'src/app/routes/core-competency-routes';
import Swal from 'sweetalert2';
import { CoreCompetency } from 'src/app/models/competency/core-competency.model';
import { SubCategory } from 'src/app/models/competency/subcategory.model';
import { Category } from 'src/app/models/competency/category.model';

@Component({
  selector: 'app-core-three-b',
  templateUrl: './core-three-b.component.html',
  styleUrls: ['./core-three-b.component.scss']
})
export class CoreThreeBComponent implements OnInit {

  coreCompetencyRoutes = CoreCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core';

  userCoreCompetency: CoreCompetency = {
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
  coreId:string = '';
  disable:boolean = false;

  constructor(
    private router: Router,
    private userCoreCompetencyService :UserCoreCompetencyService,
    private toastr: ToastrService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {

    this.coreId = sessionStorage.getItem("coreId") || '';

    this.userCoreCompetency = JSON.parse(sessionStorage.getItem('userCoreCompetency') || '') as CoreCompetency;
    this.coreId = sessionStorage.getItem("coreId") || '';

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
          sessionStorage.removeItem("userCoreCompetency");
          this.selectedCompetency(name);
        }
      })      

    }

  }

  submitAssessment(){
    this.toastr.warning("This may take a few minutes...", "Please Wait!");
    this.disable = true;
    this.saveCompetency();
  }
    
  saveCompetency(){
    this.category.competencyName = this.userCoreCompetency.competencyName;
    this.category.employeeName = this.userCoreCompetency.employeeName;
    this.category.department = this.userCoreCompetency.department;
    this.category.college = this.userCoreCompetency.college;

    this.userCoreCompetencyService.createCoreCompetency(this.authService.user.id, this.category)
    .subscribe(
      res => {
        this.coreId = res.id;
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
    this.subcategory.options = this.userCoreCompetency.oneBasicOptions;
    this.subcategory.result = this.userCoreCompetency.oneBasicResult;

    this.subcategory.essay = this.userCoreCompetency.oneEssay;

    this.userCoreCompetencyService.createCompetencyOneBasic(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.oneIntermediateOptions;
    this.subcategory.result = this.userCoreCompetency.oneIntermediateResult;

    this.subcategory.essay = this.userCoreCompetency.oneEssay;

    this.userCoreCompetencyService.createCompetencyOneIntermediate(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.oneAdvancedOptions;
    this.subcategory.result = this.userCoreCompetency.oneAdvancedResult;

    this.subcategory.essay = this.userCoreCompetency.oneEssay;

    this.userCoreCompetencyService.createCompetencyOneAdvanced(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.oneSuperiorOptions;
    this.subcategory.result = this.userCoreCompetency.oneSuperiorResult;

    this.subcategory.essay = this.userCoreCompetency.oneEssay;

    this.userCoreCompetencyService.createCompetencyOneSuperior(this.coreId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Core Competency 1");
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
    this.subcategory.options = this.userCoreCompetency.twoBasicOptions;
    this.subcategory.result = this.userCoreCompetency.twoBasicResult;

    this.subcategory.essay = this.userCoreCompetency.twoEssay;

    this.userCoreCompetencyService.createCompetencyTwoBasic(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.twoIntermediateOptions;
    this.subcategory.result = this.userCoreCompetency.twoIntermediateResult;

    this.subcategory.essay = this.userCoreCompetency.twoEssay;

    this.userCoreCompetencyService.createCompetencyTwoIntermediate(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.twoAdvancedOptions;
    this.subcategory.result = this.userCoreCompetency.twoAdvancedResult;

    this.subcategory.essay = this.userCoreCompetency.twoEssay;

    this.userCoreCompetencyService.createCompetencyTwoAdvanced(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.twoSuperiorOptions;
    this.subcategory.result = this.userCoreCompetency.twoSuperiorResult;

    this.subcategory.essay = this.userCoreCompetency.twoEssay;

    this.userCoreCompetencyService.createCompetencyTwoSuperior(this.coreId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Core Competency 2");
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
    this.subcategory.options = this.userCoreCompetency.threeBasicOptions;
    this.subcategory.result = this.userCoreCompetency.threeBasicResult;

    this.subcategory.essay = this.userCoreCompetency.threeEssay; 
    this.userCoreCompetencyService.createCompetencyThreeBasic(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.threeIntermediateOptions;
    this.subcategory.result = this.userCoreCompetency.threeIntermediateResult;

    this.subcategory.essay = this.userCoreCompetency.threeEssay; 
    this.userCoreCompetencyService.createCompetencyThreeIntermediate(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.threeAdvancedOptions;
    this.subcategory.result = this.userCoreCompetency.threeAdvancedResult;

    this.subcategory.essay = this.userCoreCompetency.threeEssay; 
    this.userCoreCompetencyService.createCompetencyThreeAdvanced(this.coreId, this.subcategory)
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
    this.subcategory.options = this.userCoreCompetency.threeSuperiorOptions;
    this.subcategory.result = this.userCoreCompetency.threeSuperiorResult;

    this.subcategory.essay = this.userCoreCompetency.threeEssay; 
    this.userCoreCompetencyService.createCompetencyThreeSuperior(this.coreId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Core Competency 3");
        this.toastr.success("Assessment has been submitted!", "Congratulations");

        sessionStorage.removeItem("userCoreCompetency");

        this.router.navigate(['/user-assessment-list']);
      },
      err => {
        console.log(err);
        this.toastr.error("An error occured! Be sure to fill out all of the fields!", "Invalid Request");
      }
    )
  }

  //#endregion
   
  navigateToPagination(route: string){
    sessionStorage.setItem('userCoreCompetency', JSON.stringify(this.userCoreCompetency));
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
        sessionStorage.removeItem("userCoreCompetency");
        this.router.navigate(['/user-assessment-list']);
      }
    }) 
  }

}
