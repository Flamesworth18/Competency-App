import { InstructionCompetency } from './../models/competency/instruction-competency.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryOptions } from '../models/competency/category-options.model';
import { CategoryResult } from '../models/competency/category-results.model';
import { SubResult } from '../models/competency/subresult.model';

@Injectable({
  providedIn: 'root'
})
export class InstructionCompetencyService {

  readonly instructionCompetencyURL = "https://hrdmocompetencyapp.azurewebsites.net/api/instructioncompetency/";

  constructor(private http: HttpClient) { }

  
//#region GET
  
  //GET user instruction competency one options
  getCategoryOneOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.instructionCompetencyURL + 'instruction-one-options' + '/' + id);
  }
  //GET user instruction competency one results
  getCategoryOneResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.instructionCompetencyURL + 'instruction-one-results' + '/' + id);
  }

  //GET user instruction competency two options
  getCategoryTwoOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.instructionCompetencyURL + 'instruction-two-options' + '/' + id);
  }
  //GET user instruction competency two results
  getCategoryTwoResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.instructionCompetencyURL + 'instruction-two-results' + '/' + id);
  }

  //GET user instruction competency three options
  getCategoryThreeOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.instructionCompetencyURL + 'instruction-three-options' + '/' + id);
  }
  //GET user instruction competency three results
  getCategoryThreeResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.instructionCompetencyURL + 'instruction-three-results' + '/' + id);
  }

  //GET user instruction competency four options
  getCategoryFourOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.instructionCompetencyURL + 'instruction-four-options' + '/' + id);
  }
  //GET user instruction competency four results
  getCategoryFourResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.instructionCompetencyURL + 'instruction-four-results' + '/' + id);
  }

  //GET user instruction competency five options
  getCategoryFiveOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.instructionCompetencyURL + 'instruction-five-options' + '/' + id);
  }
  //GET user instruction competency five results
  getCategoryFiveResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.instructionCompetencyURL + 'instruction-five-results' + '/' + id);
  }
 
  //GET user instruction competency six options
  getCategorySixOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.instructionCompetencyURL + 'instruction-six-options' + '/' + id);
  }
  //GET user instruction competency six results
  getCategorySixResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.instructionCompetencyURL + 'instruction-six-results' + '/' + id);
  }
  
  //GET user instruction competency seven options
  getCategorySevenOptions(id: string): Observable<CategoryOptions>{
    return this.http.get<CategoryOptions>(this.instructionCompetencyURL + 'instruction-seven-options' + '/' + id);
  }
  //GET user instruction competency seven results
  getCategorySevenResults(id: string): Observable<CategoryResult>{
    return this.http.get<CategoryResult>(this.instructionCompetencyURL + 'instruction-seven-results' + '/' + id);
  }

//#endregion

//#region PUT

  //PUT instruction comepetency 1
  updateCompetencyOne(id: string, instructionCompetency: InstructionCompetency): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-one", instructionCompetency);
  }

  //PUT instruction comepetency 2
  updateCompetencyTwo(id: string, instructionCompetency: InstructionCompetency): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-two", instructionCompetency);
  }

  //PUT instruction comepetency 3
  updateCompetencyThree(id: string, instructionCompetency: InstructionCompetency): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-three", instructionCompetency);
  }

  //PUT instruction comepetency 4
  updateCompetencyFour(id: string, instructionCompetency: InstructionCompetency): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-four", instructionCompetency);
  }
  
  //PUT instruction comepetency 5
  updateCompetencyFive(id: string, instructionCompetency: InstructionCompetency): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-five", instructionCompetency);
  }
    
  //PUT instruction comepetency 6
  updateCompetencySix(id: string, instructionCompetency: InstructionCompetency): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-six", instructionCompetency);
  }
    
  //PUT instruction comepetency 7
  updateCompetencySeven(id: string, instructionCompetency: InstructionCompetency): Observable<InstructionCompetency>{
    return this.http.put<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-seven", instructionCompetency);
  }
  
//#endregion

//#region DELETE

  //DELETE whole instruction competency
  deleteWholeCompetency(id: string): Observable<InstructionCompetency>{
    return this.http.delete<InstructionCompetency>(this.instructionCompetencyURL + id);
  }

  //DELETE instruction competency 1
  deleteCompetencyOne(id: string): Observable<InstructionCompetency>{
    return this.http.delete<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-one");
  }

  //DELETE instruction competency 2
  deleteCompetencyTwo(id: string): Observable<InstructionCompetency>{
    return this.http.delete<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-two");
  }

  //DELETE instruction competency 3
  deleteCompetencyThree(id: string): Observable<InstructionCompetency>{
    return this.http.delete<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-three");
  }

  //DELETE instruction competency 4
  deleteCompetencyFour(id: string): Observable<InstructionCompetency>{
    return this.http.delete<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-four");
  }

  //DELETE instruction competency 5
  deleteCompetencyFive(id: string): Observable<InstructionCompetency>{
    return this.http.delete<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-five");
  }
  
  //DELETE instruction competency 6
  deleteCompetencySix(id: string): Observable<InstructionCompetency>{
    return this.http.delete<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-six");
  }
    
  //DELETE instruction competency 7
  deleteCompetencySeven(id: string): Observable<InstructionCompetency>{
    return this.http.delete<InstructionCompetency>(this.instructionCompetencyURL + id + "/instruction-competency-seven");
  }
  
//#endregion

//#region RESULT

  //GET instruction competency 1 results
  getCompetencyOneResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.instructionCompetencyURL + 'results-one' + '/' + id);
  }

  //GET instruction competency 2 results
  getCompetencyTwoResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.instructionCompetencyURL + 'results-two' + '/' + id);
  }

  //GET instruction competency 3 results
  getCompetencyThreeResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.instructionCompetencyURL + 'results-three' + '/' + id);
  }

  //GET instruction competency 4 results
  getCompetencyFourResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.instructionCompetencyURL + 'results-four' + '/' + id);
  }
  
  //GET instruction competency 5 results
  getCompetencyFiveResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.instructionCompetencyURL + 'results-five' + '/' + id);
  }
    
  //GET instruction competency 6 results
  getCompetencySixResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.instructionCompetencyURL + 'results-six' + '/' + id);
  }
    
  //GET instruction competency 7 results
  getCompetencySevenResults(id: string): Observable<SubResult>{
    return this.http.get<SubResult>(this.instructionCompetencyURL + 'results-seven' + '/' + id);
  }
  
//#endregion

}
