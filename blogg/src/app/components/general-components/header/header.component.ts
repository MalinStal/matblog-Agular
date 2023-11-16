import { Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isFixedNavbar : boolean = true;

 logo : string = "assets/images/logo.png" 
 title : string = "MatBloggen"
 hide  :boolean = false;

 //hostbinding för att koppla classen.navbaropened till boolean värdet 
  @HostBinding('class.navbar-opened') navbarOpened : boolean = false; 
constructor(private route : Router){}

 changeToAdmin() : void {
  this.hide = !this.hide
  if(!this.hide) {
    this.route.navigate(["/"])}
 }

 toggleNavbar(){
  this.navbarOpened = !this.navbarOpened
 }

 navigateHome() {
this.route.navigate(["/"])
 }

 @HostListener('window:scroll', [])
 onWindowScroll(){
  const offset = /*window.pageYOffset ||*/ document.documentElement.scrollTop || document.body.scrollTop || 0;
  if(offset > 15) {
    this.isFixedNavbar = true;
  } else{
    this.isFixedNavbar = false; 
  }
 }
}
