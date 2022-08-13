import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCompetency } from '../models/competency/subcompetency.model';
import { UserCompetencyCount } from '../models/user-competency-count.model';

@Injectable({
  providedIn: 'root'
})
export class UserCompetencyService {

  readonly userCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/usercompetency/";

  constructor(private http: HttpClient) { }

  //GET user competencies
  getCompetencies(id: string): Observable<SubCompetency[]>{
    return this.http.get<SubCompetency[]>(this.userCompetencyURL + id + '/' + 'user-competencies');
  }

  //GET user competencies count
  getCompetenciesCount(id: string): Observable<UserCompetencyCount>{
    return this.http.get<UserCompetencyCount>(this.userCompetencyURL + id + "/user-competencies/count");
  }
}
