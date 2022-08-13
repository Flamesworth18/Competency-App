import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Competencies } from 'src/app/competencies/competencies';
import { Category } from 'src/app/models/competency/category.model';
import { ResearchCompetency } from 'src/app/models/competency/research-competency.model';
import { SubCategory } from 'src/app/models/competency/subcategory.model';
import { ResearchCompetencyRoute } from 'src/app/routes/research-competency-routes';
import { UserResearchCompetencyService } from 'src/app/services/user-research-competency.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-research-six-b',
  templateUrl: './research-six-b.component.html',
  styleUrls: ['./research-six-b.component.scss']
})
export class ResearchSixBComponent implements OnInit {

  researchCompetencyRoutes = ResearchCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core';

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
  researchId:string = '';
  disable:boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userResearchCompetencyService: UserResearchCompetencyService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.researchId = sessionStorage.getItem("researchId") || '';
    
    this.userResearchCompetency = JSON.parse(sessionStorage.getItem('userResearchCompetency') || '') as ResearchCompetency;

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
          sessionStorage.removeItem("userResearchCompetency");
          this.selectedCompetency(name);
        }
      })      

    }

  }
   
  navigateToPagination(route: string){
    sessionStorage.setItem('userResearchCompetency', JSON.stringify(this.userResearchCompetency));
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
        sessionStorage.removeItem("userResearchCompetency");
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
    this.category.competencyName = this.userResearchCompetency.competencyName;
    this.category.employeeName = this.userResearchCompetency.employeeName;
    this.category.department = this.userResearchCompetency.department;
    this.category.college = this.userResearchCompetency.college;

    this.userResearchCompetencyService.createResearchCompetency(this.authService.user.id, this.category)
    .subscribe(
      res => {
        this.researchId = res.id;
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
    this.subcategory.options = this.userResearchCompetency.oneBasicOptions;
    this.subcategory.result = this.userResearchCompetency.oneBasicResult;

    this.subcategory.essay = this.userResearchCompetency.oneEssay;

    this.userResearchCompetencyService.createCompetencyOneBasic(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.oneIntermediateOptions;
    this.subcategory.result = this.userResearchCompetency.oneIntermediateResult;

    this.subcategory.essay = this.userResearchCompetency.oneEssay;

    this.userResearchCompetencyService.createCompetencyOneIntermediate(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.oneAdvancedOptions;
    this.subcategory.result = this.userResearchCompetency.oneAdvancedResult;

    this.subcategory.essay = this.userResearchCompetency.oneEssay;

    this.userResearchCompetencyService.createCompetencyOneAdvanced(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.oneSuperiorOptions;
    this.subcategory.result = this.userResearchCompetency.oneSuperiorResult;

    this.subcategory.essay = this.userResearchCompetency.oneEssay;

    this.userResearchCompetencyService.createCompetencyOneSuperior(this.researchId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Research Competency 1");
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
    this.subcategory.options = this.userResearchCompetency.twoBasicOptions;
    this.subcategory.result = this.userResearchCompetency.twoBasicResult;

    this.subcategory.essay = this.userResearchCompetency.twoEssay;

    this.userResearchCompetencyService.createCompetencyTwoBasic(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.twoIntermediateOptions;
    this.subcategory.result = this.userResearchCompetency.twoIntermediateResult;

    this.subcategory.essay = this.userResearchCompetency.twoEssay;

    this.userResearchCompetencyService.createCompetencyTwoIntermediate(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.twoAdvancedOptions;
    this.subcategory.result = this.userResearchCompetency.twoAdvancedResult;

    this.subcategory.essay = this.userResearchCompetency.twoEssay;

    this.userResearchCompetencyService.createCompetencyTwoAdvanced(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.twoSuperiorOptions;
    this.subcategory.result = this.userResearchCompetency.twoSuperiorResult;

    this.subcategory.essay = this.userResearchCompetency.twoEssay;

    this.userResearchCompetencyService.createCompetencyTwoSuperior(this.researchId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Research Competency 2");
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
    this.subcategory.options = this.userResearchCompetency.threeBasicOptions;
    this.subcategory.result = this.userResearchCompetency.threeBasicResult;

    this.subcategory.essay = this.userResearchCompetency.threeEssay; 
    this.userResearchCompetencyService.createCompetencyThreeBasic(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.threeIntermediateOptions;
    this.subcategory.result = this.userResearchCompetency.threeIntermediateResult;

    this.subcategory.essay = this.userResearchCompetency.threeEssay; 
    this.userResearchCompetencyService.createCompetencyThreeIntermediate(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.threeAdvancedOptions;
    this.subcategory.result = this.userResearchCompetency.threeAdvancedResult;

    this.subcategory.essay = this.userResearchCompetency.threeEssay; 
    this.userResearchCompetencyService.createCompetencyThreeAdvanced(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.threeSuperiorOptions;
    this.subcategory.result = this.userResearchCompetency.threeSuperiorResult;

    this.subcategory.essay = this.userResearchCompetency.threeEssay; 
    this.userResearchCompetencyService.createCompetencyThreeSuperior(this.researchId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Research Competency 3");
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
    this.subcategory.options = this.userResearchCompetency.fourBasicOptions;
    this.subcategory.result = this.userResearchCompetency.fourBasicResult;

    this.subcategory.essay = this.userResearchCompetency.fourEssay;

    this.userResearchCompetencyService.createCompetencyFourBasic(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.fourIntermediateOptions;
    this.subcategory.result = this.userResearchCompetency.fourIntermediateResult;

    this.subcategory.essay = this.userResearchCompetency.fourEssay;

    this.userResearchCompetencyService.createCompetencyFourIntermediate(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.fourAdvancedOptions;
    this.subcategory.result = this.userResearchCompetency.fourAdvancedResult;

    this.subcategory.essay = this.userResearchCompetency.fourEssay;

    this.userResearchCompetencyService.createCompetencyFourAdvanced(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.fourSuperiorOptions;
    this.subcategory.result = this.userResearchCompetency.fourSuperiorResult;

    this.subcategory.essay = this.userResearchCompetency.fourEssay;

    this.userResearchCompetencyService.createCompetencyFourSuperior(this.researchId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Research Competency 4");
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
    this.subcategory.options = this.userResearchCompetency.fiveBasicOptions;
    this.subcategory.result = this.userResearchCompetency.fiveBasicResult;

    this.subcategory.essay = this.userResearchCompetency.fiveEssay;

    this.userResearchCompetencyService.createCompetencyFiveBasic(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.fiveIntermediateOptions;
    this.subcategory.result = this.userResearchCompetency.fiveIntermediateResult;

    this.subcategory.essay = this.userResearchCompetency.fiveEssay;

    this.userResearchCompetencyService.createCompetencyFiveIntermediate(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.fiveAdvancedOptions;
    this.subcategory.result = this.userResearchCompetency.fiveAdvancedResult;

    this.subcategory.essay = this.userResearchCompetency.fiveEssay;

    this.userResearchCompetencyService.createCompetencyFiveAdvanced(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.fiveSuperiorOptions;
    this.subcategory.result = this.userResearchCompetency.fiveSuperiorResult;

    this.subcategory.essay = this.userResearchCompetency.fiveEssay;

    this.userResearchCompetencyService.createCompetencyFiveSuperior(this.researchId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Research Competency 5");
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
    this.subcategory.options = this.userResearchCompetency.sixBasicOptions;
    this.subcategory.result = this.userResearchCompetency.sixBasicResult;

    this.subcategory.essay = this.userResearchCompetency.sixEssay;

    this.userResearchCompetencyService.createCompetencySixBasic(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.sixIntermediateOptions;
    this.subcategory.result = this.userResearchCompetency.sixIntermediateResult;

    this.subcategory.essay = this.userResearchCompetency.sixEssay;

    this.userResearchCompetencyService.createCompetencySixIntermediate(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.sixAdvancedOptions;
    this.subcategory.result = this.userResearchCompetency.sixAdvancedResult;

    this.subcategory.essay = this.userResearchCompetency.sixEssay;

    this.userResearchCompetencyService.createCompetencySixAdvanced(this.researchId, this.subcategory)
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
    this.subcategory.options = this.userResearchCompetency.sixSuperiorOptions;
    this.subcategory.result = this.userResearchCompetency.sixSuperiorResult;

    this.subcategory.essay = this.userResearchCompetency.sixEssay;

    this.userResearchCompetencyService.createCompetencySixSuperior(this.researchId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Research Competency 6");
        this.toastr.success("Assessment has been submitted!", "Congratulations");

        sessionStorage.removeItem("userResearchCompetency");

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
