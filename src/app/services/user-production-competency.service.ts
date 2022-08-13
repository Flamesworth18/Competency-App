import { HttpClient } from '@angular/common/http';
import { ProductionCompetency } from './../models/competency/production-competency.model';
import { Injectable } from '@angular/core';
import { CategoryOptions } from '../models/competency/category-options.model';
import { Observable } from 'rxjs';
import { CategoryResult } from '../models/competency/category-results.model';
import { Category } from '../models/competency/category.model';
import { SubCategory } from '../models/competency/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class UserProductionCompetencyService {

  readonly userProductionCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/userproductioncompetency/";

  constructor(private http: HttpClient) { }
    
    //GET user production competency one options
    getCategoryOneOptions(id: string, productionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userProductionCompetencyURL + id + '/' + 'user-production-one-options' + '/' + productionId);
    }
    //GET user production competency one results
    getCategoryOneResults(id: string, productionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userProductionCompetencyURL + id + '/' + 'user-production-one-results' + '/' + productionId);
    }
  
    //GET user production competency two options
    getCategoryTwoOptions(id: string, productionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userProductionCompetencyURL + id + '/' + 'user-production-two-options' + '/' + productionId);
    }
    //GET user production competency two results
    getCategoryTwoResults(id: string, productionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userProductionCompetencyURL + id + '/' + 'user-production-two-results' + '/' + productionId);
    }
  
    //GET user production competency three options
    getCategoryThreeOptions(id: string, productionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userProductionCompetencyURL + id + '/' + 'user-production-three-options' + '/' + productionId);
    }
    //GET user production competency three results
    getCategoryThreeResults(id: string, productionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userProductionCompetencyURL + id + '/' + 'user-production-three-results' + '/' + productionId);
    }
  
    //GET user production competency four options
    getCategoryFourOptions(id: string, productionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userProductionCompetencyURL + id + '/' + 'user-production-four-options' + '/' + productionId);
    }
    //GET user production competency four results
    getCategoryFourResults(id: string, productionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userProductionCompetencyURL + id + '/' + 'user-production-four-results' + '/' + productionId);
    }
  
  //POST user production competency
  createProductionCompetency(userId: string, category: Category): Observable<ProductionCompetency>{
    return this.http.post<ProductionCompetency>(this.userProductionCompetencyURL + userId + '/' + 'user-production-competency', category);
  }

  //#region PUT user production competency 1

  //BASIC
  createCompetencyOneBasic(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-one-basic', category);
  }

  //INTERMEDIATE
  createCompetencyOneIntermediate(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-one-intermediate', category);
  }

  //ADVANCED
  createCompetencyOneAdvanced(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-one-advanced', category);
  }

  //SUPERIOR
  createCompetencyOneSuperior(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-one-superior', category);
  }

  //#endregion

  //#region PUT user production competency 2

  //BASIC
  createCompetencyTwoBasic(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-two-basic', category);
  }

  //INTERMEDIATE
  createCompetencyTwoIntermediate(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-two-intermediate', category);
  }

  //ADVANCED
  createCompetencyTwoAdvanced(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-two-advanced', category);
  }

  //SUPERIOR
  createCompetencyTwoSuperior(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-two-superior', category);
  }

  //#endregion

  //#region PUT user production competency 3

  //BASIC
  createCompetencyThreeBasic(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-three-basic', category);
  }

  //INTERMEDIATE
  createCompetencyThreeIntermediate(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-three-intermediate', category);
  }

  //ADVANCED
  createCompetencyThreeAdvanced(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-three-advanced', category);
  }

  //SUPERIOR
  createCompetencyThreeSuperior(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-three-superior', category);
  }

  //#endregion

  //#region PUT user production competency 4

  //BASIC
  createCompetencyFourBasic(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-four-basic', category);
  }

  //INTERMEDIATE
  createCompetencyFourIntermediate(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-four-intermediate', category);
  }

  //ADVANCED
  createCompetencyFourAdvanced(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-four-advanced', category);
  }

  //SUPERIOR
  createCompetencyFourSuperior(competencyId: string, category: SubCategory): Observable<ProductionCompetency>{
    return this.http.put<ProductionCompetency>(this.userProductionCompetencyURL + competencyId + '/' + 'user-production-competency-four-superior', category);
  }

  //#endregion

}
