import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

constructor(
  private dateService : DateService
){}

//render time and date in the end of the home page
ngOnInit(){
  
  setInterval(() => {
   this.time
  }, 1000)
}
get time(){
  return this.dateService.getTime()
}
get date() {
  return this.dateService.getDate()
}
}
