import { Component } from '@angular/core';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cheesecake : string = "assets/images/cheesecake.jpg"
constructor(
  private dateService : DateService
){}
get time(){
  return this.dateService.getTime()
}
get date() {
  return this.dateService.getDate()
}
}
