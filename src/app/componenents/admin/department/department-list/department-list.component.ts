import { DepartmentService } from './../../../../services/department.service';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Department } from 'src/app/models/add ons/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  departments:Department[] = [];

  department: Department = {
    id: '',
    name: '',
    colleges: [{
      id: '',
      name: ''
    }]
  }

  constructor(
    private departmentService:DepartmentService,
    public loader: LoaderService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  //GET departments
  getDepartments(){
    this.departmentService.getDepartments()
    .subscribe(
      res => {
        this.departments = res;
      }
    )
  }

  //POST department
  createDepartment(){
    this.router.navigate(['/create-department']);
  }

  //PUT department
  editDepartment(department: Department){
    this.departmentService.editDepartment(department);
    this.router.navigate(['/update-department'])
  }

  confirmDelete(id: string){
    Swal.fire({
      title: "Are you sure you want to remove?",
      text: "You will not be able to recover this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if(result.value){
        this.deleteDepartment(id);
      }
    })
  }

  //DELETE user
  deleteDepartment(id: string){
    this.departmentService.removeDepartment(id)
    .subscribe(
      res => {
        setTimeout(() => {
          this.toastr.success("has been successfully deleted.", "Department");
          this.getDepartments();
        }, 3000);
      },
      err => {
        setTimeout(() => {
          this.toastr.error("An error occured");
        }, 3000);
      }
    )

  }

}
