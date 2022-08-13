import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Department } from '../models/add ons/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly departmentURL = "https://hrdmocompetencyapp.azurewebsites.net/api/department/";

  department: Department = {
    id: '',
    name: '',
    colleges: [{
      id: '',
      name: ''
    }]
  }

  constructor(private http: HttpClient) { }

  //GET departments
  getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this.departmentURL);
  }

  //ADD department
  addDepartment(department: Department): Observable<Department>{
    department.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Department>(this.departmentURL, department);
  }

  //edit department
  updateDepartment(id: string, department: Department): Observable<Department>{
    department.id = '00000000-0000-0000-0000-000000000000';
    return this.http.put<Department>(this.departmentURL + id, department);
  }

  //remove department
  removeDepartment(id: string): Observable<Department>{
    return this.http.delete<Department>(this.departmentURL + id);
  }

  private _department = new BehaviorSubject<Department>(this.department);
  getDepartment = this._department.asObservable();

  editDepartment(department: any){
    this._department.next(department);
  }
}
