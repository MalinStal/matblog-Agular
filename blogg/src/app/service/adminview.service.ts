import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminviewService {
  
 private adminPage:BehaviorSubject<boolean>;

  constructor() {
    this.adminPage= new BehaviorSubject<boolean>(false);
   }

   changeBoolean(value : boolean) : void {
    this.adminPage.next(value)
   }
   getBooleanValue(): Observable<boolean> {
    return this.adminPage.asObservable();
  }


}
