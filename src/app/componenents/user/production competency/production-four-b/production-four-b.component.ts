import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Competencies } from 'src/app/competencies/competencies';
import { Category } from 'src/app/models/competency/category.model';
import { ProductionCompetency } from 'src/app/models/competency/production-competency.model';
import { SubCategory } from 'src/app/models/competency/subcategory.model';
import { ProductionCompetencyRoute } from 'src/app/routes/production-competency-routes';
import { AuthService } from 'src/app/services/auth.service';
import { UserProductionCompetencyService } from 'src/app/services/user-production-competency.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producion-four-b',
  templateUrl: './production-four-b.component.html',
  styleUrls: ['./production-four-b.component.scss']
})
export class ProductionFourBComponent implements OnInit {

  productionCompetencyRoutes = ProductionCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core';

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
  productionId:string = '';
  disable:boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private userProductionCompetencyService: UserProductionCompetencyService
  ) { }

  ngOnInit(): void {
    this.productionId = sessionStorage.getItem("productionId") || '';
    
    this.userProductionCompetency = JSON.parse(sessionStorage.getItem('userProductionCompetency') || '') as ProductionCompetency;

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
          sessionStorage.removeItem("userProductionCompetency");
          this.selectedCompetency(name);
        }
      })      

    }

  }
   
  navigateToPagination(route: string){
    sessionStorage.setItem('userProductionCompetency', JSON.stringify(this.userProductionCompetency));
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
        sessionStorage.removeItem("userProductionCompetency");
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
    this.category.competencyName = this.userProductionCompetency.competencyName;
    this.category.employeeName = this.userProductionCompetency.employeeName;
    this.category.department = this.userProductionCompetency.department;
    this.category.college = this.userProductionCompetency.college;

    this.userProductionCompetencyService.createProductionCompetency(this.authService.user.id, this.category)
    .subscribe(
      res => {
        this.productionId = res.id;
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
    this.subcategory.options = this.userProductionCompetency.oneBasicOptions;
    this.subcategory.result = this.userProductionCompetency.oneBasicResult;

    this.subcategory.essay = this.userProductionCompetency.oneEssay;

    this.userProductionCompetencyService.createCompetencyOneBasic(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.oneIntermediateOptions;
    this.subcategory.result = this.userProductionCompetency.oneIntermediateResult;

    this.subcategory.essay = this.userProductionCompetency.oneEssay;

    this.userProductionCompetencyService.createCompetencyOneIntermediate(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.oneAdvancedOptions;
    this.subcategory.result = this.userProductionCompetency.oneAdvancedResult;

    this.subcategory.essay = this.userProductionCompetency.oneEssay;

    this.userProductionCompetencyService.createCompetencyOneAdvanced(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.oneSuperiorOptions;
    this.subcategory.result = this.userProductionCompetency.oneSuperiorResult;

    this.subcategory.essay = this.userProductionCompetency.oneEssay;

    this.userProductionCompetencyService.createCompetencyOneSuperior(this.productionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Production Competency 1");
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
    this.subcategory.options = this.userProductionCompetency.twoBasicOptions;
    this.subcategory.result = this.userProductionCompetency.twoBasicResult;

    this.subcategory.essay = this.userProductionCompetency.twoEssay;

    this.userProductionCompetencyService.createCompetencyTwoBasic(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.twoIntermediateOptions;
    this.subcategory.result = this.userProductionCompetency.twoIntermediateResult;

    this.subcategory.essay = this.userProductionCompetency.twoEssay;

    this.userProductionCompetencyService.createCompetencyTwoIntermediate(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.twoAdvancedOptions;
    this.subcategory.result = this.userProductionCompetency.twoAdvancedResult;

    this.subcategory.essay = this.userProductionCompetency.twoEssay;

    this.userProductionCompetencyService.createCompetencyTwoAdvanced(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.twoSuperiorOptions;
    this.subcategory.result = this.userProductionCompetency.twoSuperiorResult;

    this.subcategory.essay = this.userProductionCompetency.twoEssay;

    this.userProductionCompetencyService.createCompetencyTwoSuperior(this.productionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Production Competency 2");
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
    this.subcategory.options = this.userProductionCompetency.threeBasicOptions;
    this.subcategory.result = this.userProductionCompetency.threeBasicResult;

    this.subcategory.essay = this.userProductionCompetency.threeEssay; 
    this.userProductionCompetencyService.createCompetencyThreeBasic(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.threeIntermediateOptions;
    this.subcategory.result = this.userProductionCompetency.threeIntermediateResult;

    this.subcategory.essay = this.userProductionCompetency.threeEssay; 
    this.userProductionCompetencyService.createCompetencyThreeIntermediate(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.threeAdvancedOptions;
    this.subcategory.result = this.userProductionCompetency.threeAdvancedResult;

    this.subcategory.essay = this.userProductionCompetency.threeEssay; 
    this.userProductionCompetencyService.createCompetencyThreeAdvanced(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.threeSuperiorOptions;
    this.subcategory.result = this.userProductionCompetency.threeSuperiorResult;

    this.subcategory.essay = this.userProductionCompetency.threeEssay; 
    this.userProductionCompetencyService.createCompetencyThreeSuperior(this.productionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Production Competency 3");
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
    this.subcategory.options = this.userProductionCompetency.fourBasicOptions;
    this.subcategory.result = this.userProductionCompetency.fourBasicResult;

    this.subcategory.essay = this.userProductionCompetency.fourEssay;

    this.userProductionCompetencyService.createCompetencyFourBasic(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.fourIntermediateOptions;
    this.subcategory.result = this.userProductionCompetency.fourIntermediateResult;

    this.subcategory.essay = this.userProductionCompetency.fourEssay;

    this.userProductionCompetencyService.createCompetencyFourIntermediate(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.fourAdvancedOptions;
    this.subcategory.result = this.userProductionCompetency.fourAdvancedResult;

    this.subcategory.essay = this.userProductionCompetency.fourEssay;

    this.userProductionCompetencyService.createCompetencyFourAdvanced(this.productionId, this.subcategory)
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
    this.subcategory.options = this.userProductionCompetency.fourSuperiorOptions;
    this.subcategory.result = this.userProductionCompetency.fourSuperiorResult;

    this.subcategory.essay = this.userProductionCompetency.fourEssay;

    this.userProductionCompetencyService.createCompetencyFourSuperior(this.productionId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Production Competency 4");
        this.toastr.success("Assessment has been submitted!", "Congratulations");

        sessionStorage.removeItem("userProductionCompetency");

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
