import { Category } from 'src/app/models/competency/category.model';
import { SubCategory } from './../models/competency/subcategory.model';
import { CategoryOptions } from '../models/competency/category-options.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoreCompetency } from '../models/competency/core-competency.model';
import { CategoryResult } from '../models/competency/category-results.model';

@Injectable({
  providedIn: 'root'
})
export class UserCoreCompetencyService {

  readonly userCoreCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/usercorecompetency/";

  constructor(private http: HttpClient) { }

  //GET user core competency one options
  getCategoryOneOptions(id: string, coreId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userCoreCompetencyURL + id + '/' + 'user-core-one-options' + '/' + coreId);
  }
  //GET user core competency one results
  getCategoryOneResults(id: string, coreId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userCoreCompetencyURL + id + '/' + 'user-core-one-results' + '/' + coreId);
  }

  //GET user core competency two options
  getCategoryTwoOptions(id: string, coreId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userCoreCompetencyURL + id + '/' + 'user-core-two-options' + '/' + coreId);
  }
  //GET user core competency two results
  getCategoryTwoResults(id: string, coreId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userCoreCompetencyURL + id + '/' + 'user-core-two-results' + '/' + coreId);
  }

  //GET user core competency three options
  getCategoryThreeOptions(id: string, coreId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userCoreCompetencyURL + id + '/' + 'user-core-three-options' + '/' + coreId);
  }
  //GET user core competency three results
  getCategoryThreeResults(id: string, coreId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userCoreCompetencyURL + id + '/' + 'user-core-three-results' + '/' + coreId);
  }

  //POST user core competency
  createCoreCompetency(userId: string, category: Category): Observable<CoreCompetency>{
    return this.http.post<CoreCompetency>(this.userCoreCompetencyURL + userId + '/' + 'user-core-competency', category);
  }

  //#region PUT user core competency 1

  //BASIC
  createCompetencyOneBasic(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-one-basic', category);
  }

  //INTERMEDIATE
  createCompetencyOneIntermediate(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-one-intermediate', category);
  }

  //ADVANCED
  createCompetencyOneAdvanced(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-one-advanced', category);
  }

  //SUPERIOR
  createCompetencyOneSuperior(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-one-superior', category);
  }

  //#endregion

  //#region PUT user core competency 2

  //BASIC
  createCompetencyTwoBasic(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-two-basic', category);
  }

  //INTERMEDIATE
  createCompetencyTwoIntermediate(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-two-intermediate', category);
  }

  //ADVANCED
  createCompetencyTwoAdvanced(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-two-advanced', category);
  }

  //SUPERIOR
  createCompetencyTwoSuperior(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-two-superior', category);
  }

  //#endregion

  //#region PUT user core competency 3

  //BASIC
  createCompetencyThreeBasic(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-three-basic', category);
  }

  //INTERMEDIATE
  createCompetencyThreeIntermediate(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-three-intermediate', category);
  }

  //ADVANCED
  createCompetencyThreeAdvanced(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-three-advanced', category);
  }

  //SUPERIOR
  createCompetencyThreeSuperior(competencyId: string, category: SubCategory): Observable<CoreCompetency>{
    return this.http.put<CoreCompetency>(this.userCoreCompetencyURL + competencyId + '/' + 'user-core-competency-three-superior', category);
  }

  //#endregion

}
