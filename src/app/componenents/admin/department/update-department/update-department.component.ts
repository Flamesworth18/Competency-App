import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/department.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/models/add ons/department.model';
import { College } from 'src/app/models/add ons/college.model';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {

  tempDep: Department = {
    id: '',
    name: '',
    colleges: [{
      id: '',
      name: ''
    }]
  }

  college: any;
  collegeId: any;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private departmentService: DepartmentService
  ) { 

    this.departmentService.getDepartment.subscribe(department => this.tempDep = department);

  }

  ngOnInit(): void {
  }

  addCollege(){
    this.tempDep.colleges.push({
      id: '00000000-0000-0000-0000-000000000000',
      name: this.updateDepartmentForm.get('college')?.value || ''
    })
    this.college = '';
  }

  selectedCollege(collegeName: any){
    console.log(collegeName)
    this.tempDep.colleges.forEach(c => {
      if(c.id === this.collegeId){
        c.name = collegeName;
      }
    })
  }

  getCollegeId(id:string){
    this.collegeId = id;
  }

  removeCollegeFromList(college:College){
    var index: number = this.tempDep.colleges.indexOf(college);
    if (index !== -1) {
      this.tempDep.colleges.splice(index, 1);
    }  
  }

  navigateToDepartmentList(){
    this.router.navigate(['/department-list']);
  }

  updateDepartmentForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    college: new FormControl(null, [Validators.required]),
  });

  updateDepartment(){
    this.tempDep.name = this.updateDepartmentForm.get('name')?.value || '';

    this.requestUpdateDepartment(this.tempDep);
  }

  requestUpdateDepartment(department: Department){
    this.departmentService.updateDepartment(this.tempDep.id ,department)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been successfully updated.", department.name);
          this.router.navigate(['/department-list'])
        }, 3000);
      },
      err => {
        setTimeout(() => {
          this.toastr.error("An error occured");
        }, 3000);
      }
    )
  }

  get Name(): FormControl{
    return this.updateDepartmentForm.get('name') as FormControl;
  }

  get College(): FormControl{
    return this.updateDepartmentForm.get('college') as FormControl;
  }

}
