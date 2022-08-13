import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';
import { SubResult } from '../models/competency/subresult.model';
import { ProductionCompetency } from './../models/competency/production-competency.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductionCompetencyService {

  readonly productionCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/productioncompetency/";

  constructor(private http: HttpClient) { }

  
  //#region GET
  
  //GET user production competency one options
  getCategoryOneOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.productionCompetencyURL + 'production-one-options' + '/' + id);
  }
  //GET user production competency one results
  getCategoryOneResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.productionCompetencyURL + 'production-one-results' + '/' + id);
  }

  //GET user production competency two options
  getCategoryTwoOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.productionCompetencyURL + 'production-two-options' + '/' + id);
  }
  //GET user production competency two results
  getCategoryTwoResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.productionCompetencyURL + 'production-two-results' + '/' + id);
  }

  //GET user production competency three options
  getCategoryThreeOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.productionCompetencyURL + 'production-three-options' + '/' + id);
  }
  //GET user production competency three results
  getCategoryThreeResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.productionCompetencyURL + 'production-three-results' + '/' + id);
  }

  //GET user production competency four options
  getCategoryFourOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.productionCompetencyURL + 'production-four-options' + '/' + id);
  }
  //GET user production competency four results
  getCategoryFourResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.productionCompetencyURL + 'production-four-results' + '/' + id);
  }

  //#endregion
  
  //#region PUT

  //PUT production comepetency 1
  updateCompetencyOne(id: string, productionCompetency: ProductionCompetency): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.productionCompetencyURL + id + "/production-competency-one", productionCompetency);
  }

  //PUT production comepetency 2
  updateCompetencyTwo(id: string, productionCompetency: ProductionCompetency): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.productionCompetencyURL + id + "/production-competency-two", productionCompetency);
  }

  //PUT production comepetency 3
  updateCompetencyThree(id: string, productionCompetency: ProductionCompetency): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.productionCompetencyURL + id + "/production-competency-three", productionCompetency);
  }

  //PUT production comepetency 4
  updateCompetencyFour(id: string, productionCompetency: ProductionCompetency): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.productionCompetencyURL + id + "/production-competency-four", productionCompetency);
  }
  
//#endregion

  //#region DELETE

  //DELETE whole production competency
  deleteWholeCompetency(id: string): Observable<ProductionCompetency>{
    return this.http.delete<ProductionCompetency>(this.productionCompetencyURL + id);
  }

  //DELETE production competency 1
  deleteCompetencyOne(id: string): Observable<ProductionCompetency>{
    return this.http.delete<ProductionCompetency>(this.productionCompetencyURL + id + "/production-competency-one");
  }

  //DELETE production competency 2
  deleteCompetencyTwo(id: string): Observable<ProductionCompetency>{
    return this.http.delete<ProductionCompetency>(this.productionCompetencyURL + id + "/production-competency-two");
  }

  //DELETE production competency 3
  deleteCompetencyThree(id: string): Observable<ProductionCompetency>{
    return this.http.delete<ProductionCompetency>(this.productionCompetencyURL + id + "/production-competency-three");
  }

  //DELETE production competency 4
  deleteCompetencyFour(id: string): Observable<ProductionCompetency>{
    return this.http.delete<ProductionCompetency>(this.productionCompetencyURL + id + "/production-competency-four");
  }
  
//#endregion

  //#region RESULT

  //GET production competency 1 results
  getCompetencyOneResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.productionCompetencyURL + 'results-one' + '/' + id);
  }

  //GET production competency 2 results
  getCompetencyTwoResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.productionCompetencyURL + 'results-two' + '/' + id);
  }

  //GET production competency 3 results
  getCompetencyThreeResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.productionCompetencyURL + 'results-three' + '/' + id);
  }

  //GET production competency 4 results
  getCompetencyFourResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.productionCompetencyURL + 'results-four' + '/' + id);
  }
  
//#endregion

}
