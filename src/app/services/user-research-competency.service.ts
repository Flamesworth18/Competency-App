import { ResearchCompetency } from './../models/competency/research-competency.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';
import { Category } from '../models/competency/category.model';
import { SubCategory } from '../models/competency/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class UserResearchCompetencyService {

  readonly userResearchCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/userresearchcompetency/";

  constructor(private http: HttpClient) { }

    //GET user research competency one options
    getCategoryOneOptions(id: string, researchId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userResearchCompetencyURL + id + '/' + 'user-research-one-options' + '/' + researchId);
    }
    //GET user research competency one results
    getCategoryOneResults(id: string, researchId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userResearchCompetencyURL + id + '/' + 'user-research-one-results' + '/' + researchId);
    }
  
    //GET user research competency two options
    getCategoryTwoOptions(id: string, researchId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userResearchCompetencyURL + id + '/' + 'user-research-two-options' + '/' + researchId);
    }
    //GET user research competency two results
    getCategoryTwoResults(id: string, researchId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userResearchCompetencyURL + id + '/' + 'user-research-two-results' + '/' + researchId);
    }
  
    //GET user research competency three options
    getCategoryThreeOptions(id: string, researchId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userResearchCompetencyURL + id + '/' + 'user-research-three-options' + '/' + researchId);
    }
    //GET user research competency three results
    getCategoryThreeResults(id: string, researchId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userResearchCompetencyURL + id + '/' + 'user-research-three-results' + '/' + researchId);
    }
  
    //GET user research competency four options
    getCategoryFourOptions(id: string, researchId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userResearchCompetencyURL + id + '/' + 'user-research-four-options' + '/' + researchId);
    }
    //GET user research competency four results
    getCategoryFourResults(id: string, researchId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userResearchCompetencyURL + id + '/' + 'user-research-four-results' + '/' + researchId);
    }
  
    //GET user research competency five options
    getCategoryFiveOptions(id: string, researchId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userResearchCompetencyURL + id + '/' + 'user-research-five-options' + '/' + researchId);
    }
    //GET user research competency five results
    getCategoryFiveResults(id: string, researchId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userResearchCompetencyURL + id + '/' + 'user-research-five-results' + '/' + researchId);
    }
    
    //GET user research competency six options
    getCategorySixOptions(id: string, researchId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userResearchCompetencyURL + id + '/' + 'user-research-six-options' + '/' + researchId);
    }
    //GET user research competency six results
    getCategorySixResults(id: string, researchId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userResearchCompetencyURL + id + '/' + 'user-research-six-results' + '/' + researchId);
    }
    
  //POST user research competency
  createResearchCompetency(userId: string, category: Category): Observable<ResearchCompetency>{
    return this.http.post<ResearchCompetency>(this.userResearchCompetencyURL + userId + '/' + 'user-research-competency', category);
  }

  //#region PUT user research competency 1

  //BASIC
  createCompetencyOneBasic(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-one-basic', category);
  }

  //INTERMEDIATE
  createCompetencyOneIntermediate(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-one-intermediate', category);
  }

  //ADVANCED
  createCompetencyOneAdvanced(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-one-advanced', category);
  }

  //SUPERIOR
  createCompetencyOneSuperior(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-one-superior', category);
  }

  //#endregion

  //#region PUT user research competency 2

  //BASIC
  createCompetencyTwoBasic(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-two-basic', category);
  }

  //INTERMEDIATE
  createCompetencyTwoIntermediate(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-two-intermediate', category);
  }

  //ADVANCED
  createCompetencyTwoAdvanced(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-two-advanced', category);
  }

  //SUPERIOR
  createCompetencyTwoSuperior(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-two-superior', category);
  }

  //#endregion

  //#region PUT user research competency 3

  //BASIC
  createCompetencyThreeBasic(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-three-basic', category);
  }

  //INTERMEDIATE
  createCompetencyThreeIntermediate(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-three-intermediate', category);
  }

  //ADVANCED
  createCompetencyThreeAdvanced(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-three-advanced', category);
  }

  //SUPERIOR
  createCompetencyThreeSuperior(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-three-superior', category);
  }

  //#endregion

  //#region PUT user research competency 4

  //BASIC
  createCompetencyFourBasic(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-four-basic', category);
  }

  //INTERMEDIATE
  createCompetencyFourIntermediate(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-four-intermediate', category);
  }

  //ADVANCED
  createCompetencyFourAdvanced(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-four-advanced', category);
  }

  //SUPERIOR
  createCompetencyFourSuperior(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-four-superior', category);
  }

  //#endregion

  //#region PUT user research competency 5

  //BASIC
  createCompetencyFiveBasic(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-five-basic', category);
  }  

  //INTERMEDIATE
  createCompetencyFiveIntermediate(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-five-intermediate', category);
  }  

  //ADVANCED
  createCompetencyFiveAdvanced(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-five-advanced', category);
  }  

  //SUPERIOR
  createCompetencyFiveSuperior(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-five-superior', category);
  }  

  //#endregion

  //#region PUT user research competency 6

  //BASIC
  createCompetencySixBasic(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-six-basic', category);
  }

  //INTERMEDIATE
  createCompetencySixIntermediate(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-six-intermediate', category);
  }

  //ADVANCED
  createCompetencySixAdvanced(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-six-advanced', category);
  }

  //SUPERIOR
  createCompetencySixSuperior(competencyId: string, category: SubCategory): Observable<ResearchCompetency>{
    return this.http.put<ResearchCompetency>(this.userResearchCompetencyURL + competencyId + '/' + 'user-research-competency-six-superior', category);
  }

  //#endregion

}
