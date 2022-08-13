import { SubResult } from '../models/competency/subresult.model';
import { HttpClient } from '@angular/common/http';
import { CoreCompetency } from '../models/competency/core-competency.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';

@Injectable({
  providedIn: 'root'
})
export class CoreCompetencyService {

  readonly coreCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/corecompetency/";

  constructor(private http: HttpClient) { }

//#region GET
  
  //GET user core competency one options
  getCategoryOneOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.coreCompetencyURL + 'core-one-options' + '/' + id);
  }
  //GET user core competency one results
  getCategoryOneResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.coreCompetencyURL + 'core-one-results' + '/' + id);
  }

  //GET user core competency two options
  getCategoryTwoOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.coreCompetencyURL + 'core-two-options' + '/' + id);
  }
  //GET user core competency two results
  getCategoryTwoResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.coreCompetencyURL + 'core-two-results' + '/' + id);
  }

  //GET user core competency three options
  getCategoryThreeOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.coreCompetencyURL + 'core-three-options' + '/' + id);
  }
  //GET user core competency three results
  getCategoryThreeResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.coreCompetencyURL + 'core-three-results' + '/' + id);
  }
//#endregion

//#region PUT

  //PUT core comepetency 1
  updateCompetencyOne(id: string, coreCompetency: CoreCompetency): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.coreCompetencyURL + id + "/core-competency-one", coreCompetency);
  }

  //PUT core comepetency 2
  updateCompetencyTwo(id: string, coreCompetency: CoreCompetency): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.coreCompetencyURL + id + "/core-competency-two", coreCompetency);
  }

  //PUT core comepetency 3
  updateCompetencyThree(id: string, coreCompetency: CoreCompetency): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.coreCompetencyURL + id + "/core-competency-three", coreCompetency);
  }

//#endregion

//#region DELETE

  //DELETE whole core competency
  deleteWholeCompetency(id: string): Observable<CoreCompetency>{
    return this.http.delete<CoreCompetency>(this.coreCompetencyURL + id);
  }

  //DELETE core competency 1
  deleteCompetencyOne(id: string): Observable<CoreCompetency>{
    return this.http.delete<CoreCompetency>(this.coreCompetencyURL + id + "/core-competency-one");
  }

  //DELETE core competency 2
  deleteCompetencyTwo(id: string): Observable<CoreCompetency>{
    return this.http.delete<CoreCompetency>(this.coreCompetencyURL + id + "/core-competency-two");
  }

  //DELETE core competency 3
  deleteCompetencyThree(id: string): Observable<CoreCompetency>{
    return this.http.delete<CoreCompetency>(this.coreCompetencyURL + id + "/core-competency-three");
  }

//#endregion

//#region RESULT

  //GET core competency 1 results
  getCompetencyOneResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.coreCompetencyURL + 'results-one' + '/' + id);
  }

  //GET core competency 2 results
  getCompetencyTwoResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.coreCompetencyURL + 'results-two' + '/' + id);
  }

  //GET core competency 3 results
  getCompetencyThreeResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.coreCompetencyURL + 'results-three' + '/' + id);
  }

//#endregion

}
