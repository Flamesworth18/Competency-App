import { HttpClient } from '@angular/common/http';
import { InstructionCompetency } from './../models/competency/instruction-competency.model';
import { Injectable } from '@angular/core';
import { CategoryOptions } from '../models/competency/category-options.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryResult } from '../models/competency/category-results.model';
import { Category } from '../models/competency/category.model';
import { SubCategory } from '../models/competency/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class UserInstructionCompetencyService {

  readonly userInstructionCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/userinstructioncompetency/";

  constructor(private http: HttpClient) { }
  //#region GET 
  //GET user instruction competency one options
  getCategoryOneOptions(id: string, instructionId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-one-options' + '/' + instructionId);
  }
  //GET user instruction competency one results
  getCategoryOneResults(id: string, instructionId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-one-results' + '/' + instructionId);
  }

  //GET user instruction competency two options
  getCategoryTwoOptions(id: string, instructionId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-two-options' + '/' + instructionId);
  }
  //GET user instruction competency two results
  getCategoryTwoResults(id: string, instructionId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-two-results' + '/' + instructionId);
  }

  //GET user instruction competency three options
  getCategoryThreeOptions(id: string, instructionId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-three-options' + '/' + instructionId);
  }
  //GET user instruction competency three results
  getCategoryThreeResults(id: string, instructionId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-three-results' + '/' + instructionId);
  }

  //GET user instruction competency four options
  getCategoryFourOptions(id: string, instructionId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-four-options' + '/' + instructionId);
  }
  //GET user instruction competency four results
  getCategoryFourResults(id: string, instructionId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-four-results' + '/' + instructionId);
  }

  //GET user instruction competency five options
  getCategoryFiveOptions(id: string, instructionId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-five-options' + '/' + instructionId);
  }
  //GET user instruction competency five results
  getCategoryFiveResults(id: string, instructionId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-five-results' + '/' + instructionId);
  }
  
  //GET user instruction competency six options
  getCategorySixOptions(id: string, instructionId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-six-options' + '/' + instructionId);
  }
  //GET user instruction competency six results
  getCategorySixResults(id: string, instructionId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-six-results' + '/' + instructionId);
  }
    
  //GET user instruction competency seven options
  getCategorySevenOptions(id: string, instructionId: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-seven-options' + '/' + instructionId);
  }
  //GET user instruction competency seven results
  getCategorySevenResults(id: string, instructionId: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.userInstructionCompetencyURL + id + '/' + 'user-instruction-seven-results' + '/' + instructionId);
  }
//#endregion

  //POST user instruction
  createInstructionCompetency(userId: string, category: Category): Observable<InstructionCompetency>{
    return this.http.post<InstructionCompetency>(this.userInstructionCompetencyURL + userId + '/' + 'user-instruction-competency', category);
  }

  //#region PUT user instruction competency 1

  //BASIC
  createCompetencyOneBasic(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-one-basic', category);
  }

  //INTERMEDIATE
  createCompetencyOneIntermediate(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-one-intermediate', category);
  }

  //ADVANCED
  createCompetencyOneAdvanced(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-one-advanced', category);
  }

  //SUPERIOR
  createCompetencyOneSuperior(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-one-superior', category);
  }

  //#endregion

  //#region PUT user instruction competency 2

  //BASIC
  createCompetencyTwoBasic(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-two-basic', category);
  }

  //INTERMEDIATE
  createCompetencyTwoIntermediate(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-two-intermediate', category);
  }

  //ADVANCED
  createCompetencyTwoAdvanced(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-two-advanced', category);
  }

  //SUPERIOR
  createCompetencyTwoSuperior(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-two-superior', category);
  }

  //#endregion

  //#region PUT user instruction competency 3

  //BASIC
  createCompetencyThreeBasic(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-three-basic', category);
  }

  //INTERMEDIATE
  createCompetencyThreeIntermediate(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-three-intermediate', category);
  }

  //ADVANCED
  createCompetencyThreeAdvanced(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-three-advanced', category);
  }

  //SUPERIOR
  createCompetencyThreeSuperior(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-three-superior', category);
  }

  //#endregion

  //#region PUT user instruction competency 4

  //BASIC
  createCompetencyFourBasic(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-four-basic', category);
  }

  //INTERMEDIATE
  createCompetencyFourIntermediate(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-four-intermediate', category);
  }

  //ADVANCED
  createCompetencyFourAdvanced(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-four-advanced', category);
  }

  //SUPERIOR
  createCompetencyFourSuperior(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-four-superior', category);
  }

  //#endregion

  //#region PUT user instruction competency 5

  //BASIC
  createCompetencyFiveBasic(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-five-basic', category);
  }  

  //INTERMEDIATE
  createCompetencyFiveIntermediate(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-five-intermediate', category);
  }  

  //ADVANCED
  createCompetencyFiveAdvanced(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-five-advanced', category);
  }  

  //SUPERIOR
  createCompetencyFiveSuperior(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-five-superior', category);
  }  

  //#endregion

  //#region PUT user instruction competency 6

  //BASIC
  createCompetencySixBasic(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-six-basic', category);
  }

  //INTERMEDIATE
  createCompetencySixIntermediate(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-six-intermediate', category);
  }

  //ADVANCED
  createCompetencySixAdvanced(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-six-advanced', category);
  }

  //SUPERIOR
  createCompetencySixSuperior(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-six-superior', category);
  }

  //#endregion

  //#region PUT user instruction competency 7

  //BASIC
  createCompetencySevenBasic(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-seven-basic', category);
  }  

  //INTERMEDIATE
  createCompetencySevenIntermediate(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-seven-intermediate', category);
  }  

  //ADVANCED
  createCompetencySevenAdvanced(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-seven-advanced', category);
  }  

  //SUPERIOR
  createCompetencySevenSuperior(competencyId: string, category: SubCategory): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.userInstructionCompetencyURL + competencyId + '/' + 'user-instruction-competency-seven-superior', category);
  }  

  //#endregion

}
