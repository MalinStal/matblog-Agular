import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DateService {

  newDate: any = '';
  day: number = 0;
  month: number = 0;
  year: number = 0;
  time: number = 0;
 //shows the localtime
  getTime() :number {
    this.newDate = new Date();
    this.time = this.newDate.toLocaleTimeString('sv-SE')
    return this.time;
  }
  //function show todays date
  getDate() :string {
    this.newDate = new Date();
    this.day = this.newDate.getDate().toString().padStart(2, 0);
    this.month = (this.newDate.getMonth() + 1).toString().padStart(2, 0);
    this.year = this.newDate.getFullYear();
    return `${this.year}-${this.month}-${this.day}`;
  }
//function show a random date between different dates
   generateRandomDate(from : any, to : any)  :any {
    return new Date(
      from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
  }

}
