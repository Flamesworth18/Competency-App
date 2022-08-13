import { ExtensionCompetency } from './../models/competency/extension-competency.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';
import { SubResult } from '../models/competency/subresult.model';

@Injectable({
  providedIn: 'root'
})
export class ExtensionCompetencyService {

  readonly extensionCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/extensioncompetency/";

  constructor(private http: HttpClient) { }
    
//#region GET
  
  //GET user extension competency one options
  getCategoryOneOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.extensionCompetencyURL + 'extension-one-options' + '/' + id);
  }
  //GET user extension competency one results
  getCategoryOneResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.extensionCompetencyURL + 'extension-one-results' + '/' + id);
  }

  //GET user extension competency two options
  getCategoryTwoOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.extensionCompetencyURL + 'extension-two-options' + '/' + id);
  }
  //GET user extension competency two results
  getCategoryTwoResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.extensionCompetencyURL + 'extension-two-results' + '/' + id);
  }

  //GET user extension competency three options
  getCategoryThreeOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.extensionCompetencyURL + 'extension-three-options' + '/' + id);
  }
  //GET user extension competency three results
  getCategoryThreeResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.extensionCompetencyURL + 'extension-three-results' + '/' + id);
  }

  //GET user extension competency four options
  getCategoryFourOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.extensionCompetencyURL + 'extension-four-options' + '/' + id);
  }
  //GET user extension competency four results
  getCategoryFourResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.extensionCompetencyURL + 'extension-four-results' + '/' + id);
  }

  //GET user extension competency five options
  getCategoryFiveOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.extensionCompetencyURL + 'extension-five-options' + '/' + id);
  }
  //GET user extension competency five results
  getCategoryFiveResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.extensionCompetencyURL + 'extension-five-results' + '/' + id);
  }
 
  //GET user extension competency six options
  getCategorySixOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.extensionCompetencyURL + 'extension-six-options' + '/' + id);
  }
  //GET user extension competency six results
  getCategorySixResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.extensionCompetencyURL + 'extension-six-results' + '/' + id);
  }

//#endregion

//#region PUT

  //PUT extension comepetency 1
  updateCompetencyOne(id: string, extensionCompetency: ExtensionCompetency): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-one", extensionCompetency);
  }

  //PUT extension comepetency 2
  updateCompetencyTwo(id: string, extensionCompetency: ExtensionCompetency): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-two", extensionCompetency);
  }

  //PUT extension comepetency 3
  updateCompetencyThree(id: string, extensionCompetency: ExtensionCompetency): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-three", extensionCompetency);
  }

  //PUT extension comepetency 4
  updateCompetencyFour(id: string, extensionCompetency: ExtensionCompetency): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-four", extensionCompetency);
  }
  
  //PUT extension comepetency 5
  updateCompetencyFive(id: string, extensionCompetency: ExtensionCompetency): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-five", extensionCompetency);
  }
    
  //PUT extension comepetency 6
  updateCompetencySix(id: string, extensionCompetency: ExtensionCompetency): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-six", extensionCompetency);
  }
    
  
//#endregion

//#region DELETE

  //DELETE whole extension competency
  deleteWholeCompetency(id: string): Observable<ExtensionCompetency>{
    return this.http.delete<ExtensionCompetency>(this.extensionCompetencyURL + id);
  }

  //DELETE extension competency 1
  deleteCompetencyOne(id: string): Observable<ExtensionCompetency>{
    return this.http.delete<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-one");
  }

  //DELETE extension competency 2
  deleteCompetencyTwo(id: string): Observable<ExtensionCompetency>{
    return this.http.delete<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-two");
  }

  //DELETE extension competency 3
  deleteCompetencyThree(id: string): Observable<ExtensionCompetency>{
    return this.http.delete<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-three");
  }

  //DELETE extension competency 4
  deleteCompetencyFour(id: string): Observable<ExtensionCompetency>{
    return this.http.delete<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-four");
  }

  //DELETE extension competency 5
  deleteCompetencyFive(id: string): Observable<ExtensionCompetency>{
    return this.http.delete<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-five");
  }
  
  //DELETE extension competency 6
  deleteCompetencySix(id: string): Observable<ExtensionCompetency>{
    return this.http.delete<ExtensionCompetency>(this.extensionCompetencyURL + id + "/extension-competency-six");
  }
  
//#endregion

//#region RESULT

  //GET extension competency 1 results
  getCompetencyOneResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.extensionCompetencyURL + 'results-one' + '/' + id);
  }

  //GET extension competency 2 results
  getCompetencyTwoResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.extensionCompetencyURL + 'results-two' + '/' + id);
  }

  //GET extension competency 3 results
  getCompetencyThreeResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.extensionCompetencyURL + 'results-three' + '/' + id);
  }

  //GET extension competency 4 results
  getCompetencyFourResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.extensionCompetencyURL + 'results-four' + '/' + id);
  }
  
  //GET extension competency 5 results
  getCompetencyFiveResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.extensionCompetencyURL + 'results-five' + '/' + id);
  }
    
  //GET extension competency 6 results
  getCompetencySixResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.extensionCompetencyURL + 'results-six' + '/' + id);
  }
  
//#endregion

}
