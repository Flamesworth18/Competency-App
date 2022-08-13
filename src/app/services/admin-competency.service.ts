import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { SubCompetency } from '../models/competency/subcompetency.model';

@Injectable({
  providedIn: 'root'
})
export class AdminCompetencyService {

  readonly adminCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/admincompetency/";

  constructor(private http: HttpClient) { }

  //GET all competencies
  getCompetencies(): Observable<SubCompetency[]>{
    return this.http.get<SubCompetency[]>(this.adminCompetencyURL);
  }

  //GET all competencies count
  getCount(): Observable<number>{
    return this.http.get<number>(this.adminCompetencyURL + 'count');
  }
}
