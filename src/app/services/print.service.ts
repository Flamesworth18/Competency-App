import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  print:boolean = false;

  constructor() { }

  private _isPrinting = new BehaviorSubject<boolean>(this.print);
  isPrinting = this._isPrinting.asObservable();

  setPrint(value: boolean){
    this._isPrinting.next(value);
  }
}
