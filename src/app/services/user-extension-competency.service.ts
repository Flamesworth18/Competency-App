import { HttpClient } from '@angular/common/http';
import { ExtensionCompetency } from './../models/competency/extension-competency.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';
import { Category } from '../models/competency/category.model';
import { SubCategory } from '../models/competency/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class UserExtensionCompetencyService {

  readonly userExtensionCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/userextensioncompetency/";

  constructor(private http: HttpClient) { }
  
    //GET user extension competency one options
    getCategoryOneOptions(id: string, extensionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-one-options' + '/' + extensionId);
    }
    //GET user extension competency one results
    getCategoryOneResults(id: string, extensionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-one-results' + '/' + extensionId);
    }
  
    //GET user extension competency two options
    getCategoryTwoOptions(id: string, extensionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-two-options' + '/' + extensionId);
    }
    //GET user extension competency two results
    getCategoryTwoResults(id: string, extensionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-two-results' + '/' + extensionId);
    }
  
    //GET user extension competency three options
    getCategoryThreeOptions(id: string, extensionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-three-options' + '/' + extensionId);
    }
    //GET user extension competency three results
    getCategoryThreeResults(id: string, extensionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-three-results' + '/' + extensionId);
    }
  
    //GET user extension competency four options
    getCategoryFourOptions(id: string, extensionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-four-options' + '/' + extensionId);
    }
    //GET user extension competency four results
    getCategoryFourResults(id: string, extensionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-four-results' + '/' + extensionId);
    }
  
    //GET user extension competency five options
    getCategoryFiveOptions(id: string, extensionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-five-options' + '/' + extensionId);
    }
    //GET user extension competency five results
    getCategoryFiveResults(id: string, extensionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-five-results' + '/' + extensionId);
    }
    
    //GET user extension competency six options
    getCategorySixOptions(id: string, extensionId: string): Observable<CategoryOptions>{
      return this.http.get<CategoryOptions>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-six-options' + '/' + extensionId);
    }
    //GET user extension competency six results
    getCategorySixResults(id: string, extensionId: string): Observable<CategoryResult>{
      return this.http.get<CategoryResult>(this.userExtensionCompetencyURL + id + '/' + 'user-extension-six-results' + '/' + extensionId);
    }
  
  //POST user extension competency
  createExtensionCompetency(userId: string, category: Category): Observable<ExtensionCompetency>{
    return this.http.post<ExtensionCompetency>(this.userExtensionCompetencyURL + userId + '/' + 'user-extension-competency', category);
  }

  //#region PUT user extension competency 1

  //BASIC
  createCompetencyOneBasic(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-one-basic', category);
  }

  //INTERMEDIATE
  createCompetencyOneIntermediate(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-one-intermediate', category);
  }

  //ADVANCED
  createCompetencyOneAdvanced(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-one-advanced', category);
  }

  //SUPERIOR
  createCompetencyOneSuperior(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-one-superior', category);
  }

  //#endregion

  //#region PUT user extension competency 2

  //BASIC
  createCompetencyTwoBasic(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-two-basic', category);
  }

  //INTERMEDIATE
  createCompetencyTwoIntermediate(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-two-intermediate', category);
  }

  //ADVANCED
  createCompetencyTwoAdvanced(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-two-advanced', category);
  }

  //SUPERIOR
  createCompetencyTwoSuperior(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-two-superior', category);
  }

  //#endregion

  //#region PUT user extension competency 3

  //BASIC
  createCompetencyThreeBasic(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-three-basic', category);
  }

  //INTERMEDIATE
  createCompetencyThreeIntermediate(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-three-intermediate', category);
  }

  //ADVANCED
  createCompetencyThreeAdvanced(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-three-advanced', category);
  }

  //SUPERIOR
  createCompetencyThreeSuperior(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-three-superior', category);
  }

  //#endregion

  //#region PUT user extension competency 4

  //BASIC
  createCompetencyFourBasic(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-four-basic', category);
  }

  //INTERMEDIATE
  createCompetencyFourIntermediate(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-four-intermediate', category);
  }

  //ADVANCED
  createCompetencyFourAdvanced(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-four-advanced', category);
  }

  //SUPERIOR
  createCompetencyFourSuperior(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-four-superior', category);
  }

  //#endregion

  //#region PUT user extension competency 5

  //BASIC
  createCompetencyFiveBasic(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-five-basic', category);
  }  

  //INTERMEDIATE
  createCompetencyFiveIntermediate(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-five-intermediate', category);
  }  

  //ADVANCED
  createCompetencyFiveAdvanced(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-five-advanced', category);
  }  

  //SUPERIOR
  createCompetencyFiveSuperior(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-five-superior', category);
  }  

  //#endregion

  //#region PUT user extension competency 6

  //BASIC
  createCompetencySixBasic(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-six-basic', category);
  }

  //INTERMEDIATE
  createCompetencySixIntermediate(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-six-intermediate', category);
  }

  //ADVANCED
  createCompetencySixAdvanced(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-six-advanced', category);
  }

  //SUPERIOR
  createCompetencySixSuperior(competencyId: string, category: SubCategory): Observable<ExtensionCompetency>{
    return this.http.put<ExtensionCompetency>(this.userExtensionCompetencyURL + competencyId + '/' + 'user-extension-competency-six-superior', category);
  }

  //#endregion

}
