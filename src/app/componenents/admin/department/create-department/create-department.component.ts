import { DepartmentService } from 'src/app/services/department.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/models/add ons/department.model';
import { College } from 'src/app/models/add ons/college.model';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

  department: Department = {
    id: '',
    name: '',
    colleges: [{
      id: '',
      name: ''
    }]
  }

  college: any;
  collegeId: any;
  colleges:College[] = [];

  constructor(
    private router: Router,
    private departmentService: DepartmentService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addCollege(){
    this.colleges.push({
      id: '00000000-0000-0000-0000-000000000000',
      name: this.createDepartmentForm.get('college')?.value || ''
    })

    this.college = '';
  }

  selectedCollege(collegeName: any){
    console.log(collegeName)
    this.colleges.forEach(c => {
      if(c.id === this.collegeId){
        c.name = collegeName;
      }
    })
  }

  getCollegeId(id:string){
    this.collegeId = id;
  }

  removeCollegeFromList(college:College){
    var index: number = this.colleges.indexOf(college);
    if (index !== -1) {
      this.colleges.splice(index, 1);
    }  
  }

  navigateToDepartmentList(){
    this.router.navigate(['/department-list']);
  }

  createDepartmentForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    college: new FormControl(null, [Validators.required])
  });

  createDepartment(){
    this.department.name = this.createDepartmentForm.get('name')?.value || '';
    this.department.colleges = this.colleges;

    this.requestCreateDepartment(this.department);
  }

  requestCreateDepartment(department: Department){
    this.departmentService.addDepartment(department)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been successfully created.", department.name);
          this.router.navigate(['/department-list']);
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
    return this.createDepartmentForm.get('name') as FormControl;
  }

  get College(): FormControl{
    return this.createDepartmentForm.get('college') as FormControl;
  }

}
