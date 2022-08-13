import { ResearchCompetency } from './../models/competency/research-competency.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';
import { SubResult } from '../models/competency/subresult.model';

@Injectable({
  providedIn: 'root'
})
export class ResearchCompetencyService {

  readonly researchCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/researchcompetency/";

  constructor(private http: HttpClient) { }
  
//#region GET
  
  //GET user research competency one options
  getCategoryOneOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.researchCompetencyURL + 'research-one-options' + '/' + id);
  }
  //GET user research competency one results
  getCategoryOneResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.researchCompetencyURL + 'research-one-results' + '/' + id);
  }

  //GET user research competency two options
  getCategoryTwoOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.researchCompetencyURL + 'research-two-options' + '/' + id);
  }
  //GET user research competency two results
  getCategoryTwoResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.researchCompetencyURL + 'research-two-results' + '/' + id);
  }

  //GET user research competency three options
  getCategoryThreeOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.researchCompetencyURL + 'research-three-options' + '/' + id);
  }
  //GET user research competency three results
  getCategoryThreeResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.researchCompetencyURL + 'research-three-results' + '/' + id);
  }

  //GET user research competency four options
  getCategoryFourOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.researchCompetencyURL + 'research-four-options' + '/' + id);
  }
  //GET user research competency four results
  getCategoryFourResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.researchCompetencyURL + 'research-four-results' + '/' + id);
  }

  //GET user research competency five options
  getCategoryFiveOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.researchCompetencyURL + 'research-five-options' + '/' + id);
  }
  //GET user research competency five results
  getCategoryFiveResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.researchCompetencyURL + 'research-five-results' + '/' + id);
  }
 
  //GET user research competency six options
  getCategorySixOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.researchCompetencyURL + 'research-six-options' + '/' + id);
  }
  //GET user research competency six results
  getCategorySixResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.researchCompetencyURL + 'research-six-results' + '/' + id);
  }

//#endregion

//#region PUT

  //PUT instruction comepetency 1
  updateCompetencyOne(id: string, researchCompetency: ResearchCompetency): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-one", researchCompetency);
  }

  //PUT instruction comepetency 2
  updateCompetencyTwo(id: string, researchCompetency: ResearchCompetency): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-two", researchCompetency);
  }

  //PUT instruction comepetency 3
  updateCompetencyThree(id: string, researchCompetency: ResearchCompetency): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-three", researchCompetency);
  }

  //PUT instruction comepetency 4
  updateCompetencyFour(id: string, researchCompetency: ResearchCompetency): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-four", researchCompetency);
  }
  
  //PUT instruction comepetency 5
  updateCompetencyFive(id: string, researchCompetency: ResearchCompetency): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-five", researchCompetency);
  }
    
  //PUT instruction comepetency 6
  updateCompetencySix(id: string, researchCompetency: ResearchCompetency): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-six", researchCompetency);
  }
    
  
//#endregion

//#region DELETE

  //DELETE whole research competency
  deleteWholeCompetency(id: string): Observable<ResearchCompetency>{
    return this.http.delete<ResearchCompetency>(this.researchCompetencyURL + id);
  }

  //DELETE research competency 1
  deleteCompetencyOne(id: string): Observable<ResearchCompetency>{
    return this.http.delete<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-one");
  }

  //DELETE research competency 2
  deleteCompetencyTwo(id: string): Observable<ResearchCompetency>{
    return this.http.delete<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-two");
  }

  //DELETE research competency 3
  deleteCompetencyThree(id: string): Observable<ResearchCompetency>{
    return this.http.delete<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-three");
  }

  //DELETE research competency 4
  deleteCompetencyFour(id: string): Observable<ResearchCompetency>{
    return this.http.delete<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-four");
  }

  //DELETE research competency 5
  deleteCompetencyFive(id: string): Observable<ResearchCompetency>{
    return this.http.delete<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-five");
  }
  
  //DELETE research competency 6
  deleteCompetencySix(id: string): Observable<ResearchCompetency>{
    return this.http.delete<ResearchCompetency>(this.researchCompetencyURL + id + "/research-competency-six");
  }
  
//#endregion

//#region RESULT

  //GET research competency 1 results
  getCompetencyOneResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.researchCompetencyURL + 'results-one' + '/' + id);
  }

  //GET research competency 2 results
  getCompetencyTwoResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.researchCompetencyURL + 'results-two' + '/' + id);
  }

  //GET research competency 3 results
  getCompetencyThreeResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.researchCompetencyURL + 'results-three' + '/' + id);
  }

  //GET research competency 4 results
  getCompetencyFourResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.researchCompetencyURL + 'results-four' + '/' + id);
  }
  
  //GET research competency 5 results
  getCompetencyFiveResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.researchCompetencyURL + 'results-five' + '/' + id);
  }
    
  //GET research competency 6 results
  getCompetencySixResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.researchCompetencyURL + 'results-six' + '/' + id);
  }
  
//#endregion

}
