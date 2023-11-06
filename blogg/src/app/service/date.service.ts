import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
//får jätte konstiga värden på renderingen av detta trots att jag nu kopierat in en fungerade version från ett annat projekt?? 
@Injectable({
  providedIn: 'root'
})
export class DateService {

  newDate: any = '';
  day: number = 0;
  month: number = 0;
  year: number = 0;
  time: number = 0;
 
  getTime() :number {
    this.newDate = new Date();
    this.time = this.newDate.toLocaleTimeString('sv-SE')
    return this.time;
  }
  getDate() :string {
    this.newDate = new Date();
    this.day = this.newDate.getDate().toString().padStart(2, 0);
    this.month = (this.newDate.getMonth() + 1).toString().padStart(2, 0);
    this.year = this.newDate.getFullYear();
    return `${this.year}-${this.month}-${this.day}`;
  }

   generateRandomDate(from : any, to : any)  :any {
    return new Date(
      from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
  }

  //   newDate: any = '';
//   day: number = 0;
//   month: number = 0;
//   year: number = 0;
//   time: number = 0;
 
//  date() : string{
//   this.newDate = new Date();
//   this.day = this.newDate.getDay().toString().padStart(2,0);
//   this.month = (this.newDate.getMonth() + 1).toString().padStart(2,0);
//   this.year = this.newDate.getFullYear().toString().padStart(2,0);
//   return `${this.year}-${this.month}-${this.day}`
//  }
}
