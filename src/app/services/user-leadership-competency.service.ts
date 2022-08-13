import { Category } from 'src/app/models/competency/category.model';
import { LeadershipCompetency } from './../models/competency/leadership-competency.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';
import { SubCategory } from '../models/competency/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class UserLeadershipCompetencyService {

  
  readonly userLeadershipCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/userleadershipcompetency/";

  constructor(private http: HttpClient) { }

  //GET user leadership competency one options
  getCategoryOneOptions(id: string, leadershipId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-one-options' + '/' + leadershipId);
  }
  //GET user leadership competency one results
  getCategoryOneResults(id: string, leadershipId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-one-results' + '/' + leadershipId);
  }

  //GET user leadership competency two options
  getCategoryTwoOptions(id: string, leadershipId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-two-options' + '/' + leadershipId);
  }
  //GET user leadership competency two results
  getCategoryTwoResults(id: string, leadershipId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-two-results' + '/' + leadershipId);
  }

  //GET user leadership competency three options
  getCategoryThreeOptions(id: string, leadershipId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-three-options' + '/' + leadershipId);
  }
  //GET user leadership competency three results
  getCategoryThreeResults(id: string, leadershipId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-three-results' + '/' + leadershipId);
  }

  //GET user leadership competency four options
  getCategoryFourOptions(id: string, leadershipId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-four-options' + '/' + leadershipId);
  }
  //GET user leadership competency four results
  getCategoryFourResults(id: string, leadershipId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-four-results' + '/' + leadershipId);
  }

  //GET user leadership competency five options
  getCategoryFiveOptions(id: string, leadershipId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-five-options' + '/' + leadershipId);
  }
  //GET user leadership competency five results
  getCategoryFiveResults(id: string, leadershipId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userLeadershipCompetencyURL + id + '/' + 'user-leadership-five-results' + '/' + leadershipId);
  }

  //POST user leadership
  createLeadershipCompetency(userId: string, category: Category): Observable<LeadershipCompetency>{
    return this.http.post<LeadershipCompetency>(this.userLeadershipCompetencyURL + userId + '/' + 'user-leadership-competency', category);
  }

  //#region PUT user leadership competency 1

  //BASIC
  createCompetencyOneBasic(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-one-basic', category);
  }

  //INTERMEDIATE
  createCompetencyOneIntermediate(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-one-intermediate', category);
  }

  //ADVANCED
  createCompetencyOneAdvanced(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-one-advanced', category);
  }

  //SUPERIOR
  createCompetencyOneSuperior(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-one-superior', category);
  }

  //#endregion

  //#region PUT user leadership competency 2

  //BASIC
  createCompetencyTwoBasic(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-two-basic', category);
  }

  //INTERMEDIATE
  createCompetencyTwoIntermediate(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-two-intermediate', category);
  }

  //ADVANCED
  createCompetencyTwoAdvanced(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-two-advanced', category);
  }

  //SUPERIOR
  createCompetencyTwoSuperior(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-two-superior', category);
  }

  //#endregion

  //#region PUT user leadership competency 3

  //BASIC
  createCompetencyThreeBasic(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-three-basic', category);
  }

  //INTERMEDIATE
  createCompetencyThreeIntermediate(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-three-intermediate', category);
  }

  //ADVANCED
  createCompetencyThreeAdvanced(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-three-advanced', category);
  }

  //SUPERIOR
  createCompetencyThreeSuperior(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-three-superior', category);
  }

  //#endregion

  //#region PUT user leadership competency 4

  //BASIC
  createCompetencyFourBasic(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-four-basic', category);
  }

  //INTERMEDIATE
  createCompetencyFourIntermediate(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-four-intermediate', category);
  }

  //ADVANCED
  createCompetencyFourAdvanced(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-four-advanced', category);
  }

  //SUPERIOR
  createCompetencyFourSuperior(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-four-superior', category);
  }

  //#endregion

  //#region PUT user leadership competency 5

  //BASIC
  createCompetencyFiveBasic(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-five-basic', category);
  }  

  //INTERMEDIATE
  createCompetencyFiveIntermediate(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-five-intermediate', category);
  }  

  //ADVANCED
  createCompetencyFiveAdvanced(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-five-advanced', category);
  }  

  //SUPERIOR
  createCompetencyFiveSuperior(competencyId: string, category: SubCategory): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.userLeadershipCompetencyURL + competencyId + '/' + 'user-leadership-competency-five-superior', category);
  }  

  //#endregion

}
