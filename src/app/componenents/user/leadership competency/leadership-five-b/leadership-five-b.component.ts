import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Competencies } from 'src/app/competencies/competencies';
import { Category } from 'src/app/models/competency/category.model';
import { LeadershipCompetency } from 'src/app/models/competency/leadership-competency.model';
import { SubCategory } from 'src/app/models/competency/subcategory.model';
import { LeadershipCompetencyRoute } from 'src/app/routes/leadership-competency-routes';
import { AuthService } from 'src/app/services/auth.service';
import { UserLeadershipCompetencyService } from 'src/app/services/user-leadership-competency.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leadership-five-b',
  templateUrl: './leadership-five-b.component.html',
  styleUrls: ['./leadership-five-b.component.scss']
})
export class LeadershipFiveBComponent implements OnInit {

  leadershipCompetencyRoutes = LeadershipCompetencyRoute;

  competencies = Competencies
  currentCompetency = 'Core'; 

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
  leadershipId:string = '';
  disable:boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userLeadershipCompetencyService :UserLeadershipCompetencyService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    
    this.leadershipId = sessionStorage.getItem("leadershipId") || '';

    this.userLeadershipCompetency = JSON.parse(sessionStorage.getItem('userLeadershipCompetency') || '') as LeadershipCompetency;

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
          sessionStorage.removeItem("userLeadershipCompetency");
          this.selectedCompetency(name);
        }
      })      

    }

  }
  
  navigateToPagination(route: string){
    sessionStorage.setItem('userLeadershipCompetency', JSON.stringify(this.userLeadershipCompetency));
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
        sessionStorage.removeItem("userLeadershipCompetency");
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
    this.category.competencyName = this.userLeadershipCompetency.competencyName;
    this.category.employeeName = this.userLeadershipCompetency.employeeName;
    this.category.department = this.userLeadershipCompetency.department;
    this.category.college = this.userLeadershipCompetency.college;

    this.userLeadershipCompetencyService.createLeadershipCompetency(this.authService.user.id, this.category)
    .subscribe(
      res => {
        this.leadershipId = res.id;
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
    this.subcategory.options = this.userLeadershipCompetency.oneBasicOptions;
    this.subcategory.result = this.userLeadershipCompetency.oneBasicResult;

    this.subcategory.essay = this.userLeadershipCompetency.oneEssay;

    this.userLeadershipCompetencyService.createCompetencyOneBasic(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.oneIntermediateOptions;
    this.subcategory.result = this.userLeadershipCompetency.oneIntermediateResult;

    this.subcategory.essay = this.userLeadershipCompetency.oneEssay;

    this.userLeadershipCompetencyService.createCompetencyOneIntermediate(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.oneAdvancedOptions;
    this.subcategory.result = this.userLeadershipCompetency.oneAdvancedResult;

    this.subcategory.essay = this.userLeadershipCompetency.oneEssay;

    this.userLeadershipCompetencyService.createCompetencyOneAdvanced(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.oneSuperiorOptions;
    this.subcategory.result = this.userLeadershipCompetency.oneSuperiorResult;

    this.subcategory.essay = this.userLeadershipCompetency.oneEssay;

    this.userLeadershipCompetencyService.createCompetencyOneSuperior(this.leadershipId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Leadership Competency 1");
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
    this.subcategory.options = this.userLeadershipCompetency.twoBasicOptions;
    this.subcategory.result = this.userLeadershipCompetency.twoBasicResult;

    this.subcategory.essay = this.userLeadershipCompetency.twoEssay;

    this.userLeadershipCompetencyService.createCompetencyTwoBasic(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.twoIntermediateOptions;
    this.subcategory.result = this.userLeadershipCompetency.twoIntermediateResult;

    this.subcategory.essay = this.userLeadershipCompetency.twoEssay;

    this.userLeadershipCompetencyService.createCompetencyTwoIntermediate(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.twoAdvancedOptions;
    this.subcategory.result = this.userLeadershipCompetency.twoAdvancedResult;

    this.subcategory.essay = this.userLeadershipCompetency.twoEssay;

    this.userLeadershipCompetencyService.createCompetencyTwoAdvanced(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.twoSuperiorOptions;
    this.subcategory.result = this.userLeadershipCompetency.twoSuperiorResult;

    this.subcategory.essay = this.userLeadershipCompetency.twoEssay;

    this.userLeadershipCompetencyService.createCompetencyTwoSuperior(this.leadershipId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Leadership Competency 2");
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
    this.subcategory.options = this.userLeadershipCompetency.threeBasicOptions;
    this.subcategory.result = this.userLeadershipCompetency.threeBasicResult;

    this.subcategory.essay = this.userLeadershipCompetency.threeEssay; 
    this.userLeadershipCompetencyService.createCompetencyThreeBasic(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.threeIntermediateOptions;
    this.subcategory.result = this.userLeadershipCompetency.threeIntermediateResult;

    this.subcategory.essay = this.userLeadershipCompetency.threeEssay; 
    this.userLeadershipCompetencyService.createCompetencyThreeIntermediate(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.threeAdvancedOptions;
    this.subcategory.result = this.userLeadershipCompetency.threeAdvancedResult;

    this.subcategory.essay = this.userLeadershipCompetency.threeEssay; 
    this.userLeadershipCompetencyService.createCompetencyThreeAdvanced(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.threeSuperiorOptions;
    this.subcategory.result = this.userLeadershipCompetency.threeSuperiorResult;

    this.subcategory.essay = this.userLeadershipCompetency.threeEssay; 
    this.userLeadershipCompetencyService.createCompetencyThreeSuperior(this.leadershipId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Leadership Competency 3");
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
    this.subcategory.options = this.userLeadershipCompetency.fourBasicOptions;
    this.subcategory.result = this.userLeadershipCompetency.fourBasicResult;

    this.subcategory.essay = this.userLeadershipCompetency.fourEssay;

    this.userLeadershipCompetencyService.createCompetencyFourBasic(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.fourIntermediateOptions;
    this.subcategory.result = this.userLeadershipCompetency.fourIntermediateResult;

    this.subcategory.essay = this.userLeadershipCompetency.fourEssay;

    this.userLeadershipCompetencyService.createCompetencyFourIntermediate(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.fourAdvancedOptions;
    this.subcategory.result = this.userLeadershipCompetency.fourAdvancedResult;

    this.subcategory.essay = this.userLeadershipCompetency.fourEssay;

    this.userLeadershipCompetencyService.createCompetencyFourAdvanced(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.fourSuperiorOptions;
    this.subcategory.result = this.userLeadershipCompetency.fourSuperiorResult;

    this.subcategory.essay = this.userLeadershipCompetency.fourEssay;

    this.userLeadershipCompetencyService.createCompetencyFourSuperior(this.leadershipId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Leadership Competency 4");
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
    this.subcategory.options = this.userLeadershipCompetency.fiveBasicOptions;
    this.subcategory.result = this.userLeadershipCompetency.fiveBasicResult;

    this.subcategory.essay = this.userLeadershipCompetency.fiveEssay;

    this.userLeadershipCompetencyService.createCompetencyFiveBasic(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.fiveIntermediateOptions;
    this.subcategory.result = this.userLeadershipCompetency.fiveIntermediateResult;

    this.subcategory.essay = this.userLeadershipCompetency.fiveEssay;

    this.userLeadershipCompetencyService.createCompetencyFiveIntermediate(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.fiveAdvancedOptions;
    this.subcategory.result = this.userLeadershipCompetency.fiveAdvancedResult;

    this.subcategory.essay = this.userLeadershipCompetency.fiveEssay;

    this.userLeadershipCompetencyService.createCompetencyFiveAdvanced(this.leadershipId, this.subcategory)
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
    this.subcategory.options = this.userLeadershipCompetency.fiveSuperiorOptions;
    this.subcategory.result = this.userLeadershipCompetency.fiveSuperiorResult;

    this.subcategory.essay = this.userLeadershipCompetency.fiveEssay;

    this.userLeadershipCompetencyService.createCompetencyFiveSuperior(this.leadershipId, this.subcategory)
    .subscribe(
      res => {
        this.toastr.success("has been completed!","Leadership Competency 5");
        this.toastr.success("Assessment has been submitted!", "Congratulations");

        sessionStorage.removeItem("userLeadershipCompetency");

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
