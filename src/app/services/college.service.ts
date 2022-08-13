import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { College } from '../models/add ons/college.model';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  readonly collegeURL = "https://hrdmocompetencyapp.azurewebsites.net/api/college/";

  college: College = {
    id: '',
    name: ''
  }

  constructor(private http: HttpClient) { }

  //GET colleges
  getColleges(): Observable<College[]>{
    return this.http.get<College[]>(this.collegeURL);
  }

  //ADD college
  addCollege(college: College): Observable<College>{
    college.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<College>(this.collegeURL, college);
  }

  //edit college
  updateCollege(id: string, college: College): Observable<College>{
    college.id = '00000000-0000-0000-0000-000000000000';
    return this.http.put<College>(this.collegeURL + id, college);
  }

  //remove college
  removeCollege(id: string): Observable<College>{
    return this.http.delete<College>(this.collegeURL + id);
  }

  private _college = new BehaviorSubject<College>(this.college);
  getCollege = this._college.asObservable();

  editCollege(college: any){
    this._college.next(college);
  }

}
