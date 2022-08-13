import { Router } from '@angular/router';
import { Competencies } from '../../../../competencies/competencies';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment-instruction.component.html',
  styleUrls: ['./assessment-instruction.component.scss']
})
export class AssessmentInstructionComponent implements OnInit {

  competencies = Competencies

  currentCompetency = 'Core';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    var competency = sessionStorage.getItem('competency')
    if(competency !== null){
      this.currentCompetency = competency;
    }
  }

  selectedCompetency(name: string){
    Swal.fire({
      title: "Are you sure you want to go to " + name + " Competency page",
      text: "Your data will not be save!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, redirect me",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if(result.value){
        this.currentCompetency = name;
        sessionStorage.setItem('competency', name);
        sessionStorage.removeItem("userCoreCompetency");
        sessionStorage.removeItem("userLeadershipCompetency");
        sessionStorage.removeItem("userInstructionCompetency");
        sessionStorage.removeItem("userResearchCompetency");
        sessionStorage.removeItem("userExtensionCompetency");
        sessionStorage.removeItem("userProductionCompetency");
      }
    })
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
        sessionStorage.removeItem("userLeadershipCompetency");
        sessionStorage.removeItem("userInstructionCompetency");
        sessionStorage.removeItem("userResearchCompetency");
        sessionStorage.removeItem("userExtensionCompetency");
        sessionStorage.removeItem("userProductionCompetency");
        this.router.navigate(['/user-assessment-list']);
      }
    }) 
  }

}
