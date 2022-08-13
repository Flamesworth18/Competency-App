import { LeadershipCompetency } from 'src/app/models/competency/leadership-competency.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';
import { SubResult } from '../models/competency/subresult.model';

@Injectable({
  providedIn: 'root'
})
export class LeadershipCompetencyService {

  readonly leadershipCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/leadershipcompetency/";

  constructor(private http: HttpClient) { }

//#region GET
  
  //GET user leadership competency one options
  getCategoryOneOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.leadershipCompetencyURL + 'leadership-one-options' + '/' + id);
  }
  //GET user leadership competency one results
  getCategoryOneResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.leadershipCompetencyURL + 'leadership-one-results' + '/' + id);
  }

  //GET user leadership competency two options
  getCategoryTwoOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.leadershipCompetencyURL + 'leadership-two-options' + '/' + id);
  }
  //GET user leadership competency two results
  getCategoryTwoResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.leadershipCompetencyURL + 'leadership-two-results' + '/' + id);
  }

  //GET user leadership competency three options
  getCategoryThreeOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.leadershipCompetencyURL + 'leadership-three-options' + '/' + id);
  }
  //GET user leadership competency three results
  getCategoryThreeResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.leadershipCompetencyURL + 'leadership-three-results' + '/' + id);
  }

  //GET user leadership competency four options
  getCategoryFourOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.leadershipCompetencyURL + 'leadership-four-options' + '/' + id);
  }
  //GET user leadership competency four results
  getCategoryFourResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.leadershipCompetencyURL + 'leadership-four-results' + '/' + id);
  }

  //GET user leadership competency five options
  getCategoryFiveOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.leadershipCompetencyURL + 'leadership-five-options' + '/' + id);
  }
  //GET user leadership competency five results
  getCategoryFiveResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.leadershipCompetencyURL + 'leadership-five-results' + '/' + id);
  }
  
//#endregion

//#region PUT

  //PUT leadership comepetency 1
  updateCompetencyOne(id: string, leadershipCompetency: LeadershipCompetency): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-one", leadershipCompetency);
  }

  //PUT leadership comepetency 2
  updateCompetencyTwo(id: string, leadershipCompetency: LeadershipCompetency): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-two", leadershipCompetency);
  }

  //PUT leadership comepetency 3
  updateCompetencyThree(id: string, leadershipCompetency: LeadershipCompetency): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-three", leadershipCompetency);
  }

  //PUT leadership comepetency 4
  updateCompetencyFour(id: string, leadershipCompetency: LeadershipCompetency): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-four", leadershipCompetency);
  }
  
  //PUT leadership comepetency 5
  updateCompetencyFive(id: string, leadershipCompetency: LeadershipCompetency): Observable<LeadershipCompetency>{
    return this.http.put<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-five", leadershipCompetency);
  }
//#endregion

//#region DELETE

  //DELETE whole leadership competency
  deleteWholeCompetency(id: string): Observable<LeadershipCompetency>{
    return this.http.delete<LeadershipCompetency>(this.leadershipCompetencyURL + id);
  }

  //DELETE leadership competency 1
  deleteCompetencyOne(id: string): Observable<LeadershipCompetency>{
    return this.http.delete<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-one");
  }

  //DELETE leadership competency 2
  deleteCompetencyTwo(id: string): Observable<LeadershipCompetency>{
    return this.http.delete<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-two");
  }

  //DELETE leadership competency 3
  deleteCompetencyThree(id: string): Observable<LeadershipCompetency>{
    return this.http.delete<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-three");
  }

  //DELETE leadership competency 4
  deleteCompetencyFour(id: string): Observable<LeadershipCompetency>{
    return this.http.delete<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-four");
  }

  //DELETE leadership competency 5
  deleteCompetencyFive(id: string): Observable<LeadershipCompetency>{
    return this.http.delete<LeadershipCompetency>(this.leadershipCompetencyURL + id + "/leadership-competency-five");
  }
//#endregion

//#region RESULT

  //GET leadership competency 1 results
  getCompetencyOneResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.leadershipCompetencyURL + 'results-one' + '/' + id);
  }

  //GET leadership competency 2 results
  getCompetencyTwoResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.leadershipCompetencyURL + 'results-two' + '/' + id);
  }

  //GET leadership competency 3 results
  getCompetencyThreeResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.leadershipCompetencyURL + 'results-three' + '/' + id);
  }

  //GET leadership competency 4 results
  getCompetencyFourResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.leadershipCompetencyURL + 'results-four' + '/' + id);
  }
  
  //GET leadership competency 5 results
  getCompetencyFiveResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.leadershipCompetencyURL + 'results-five' + '/' + id);
  }
//#endregion

}
