import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 logo : string = "assets/images/logo.png" 
 title : string = "MatBloggen"
 hide  :boolean = false;

constructor(private route : Router){}

 changeToAdmin() : void {
  this.hide = !this.hide
  this.route.navigate(["/"])
 }

 navigateHome() {
this.route.navigate(["/"])
 }
}
