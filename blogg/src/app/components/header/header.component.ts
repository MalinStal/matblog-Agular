import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 logo : string = "assets/images/logo.png" 
 title : string = "MatBloggen"
hide  :boolean = false;


 changeToAdmin() : void {
  this.hide = !this.hide
  console.log(this.hide)
 }
}
