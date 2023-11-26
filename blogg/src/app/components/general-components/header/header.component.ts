import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AdminviewService } from 'src/app/service/adminview.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isFixedNavbar: boolean = true;
  public hide : boolean = false
  //hostbinding för att koppla classen.navbaropened till boolean värdet
  @HostBinding('class.navbar-opened') navbarOpened: boolean = false;

  constructor(
   
    private route: Router,
    private adminviewService :AdminviewService
  ) {}

ngOnInit(): void {
  this.adminviewService.getBooleanValue().subscribe((value) => {
    this.hide = value;
  });
}
  //to change betwwen the admin veu
  changeToAdmin(): void {
   if( this.hide == false) {
    this.adminviewService.changeBoolean(true)
    console.log(this.adminviewService.getBooleanValue())
    
   } else if(this.hide == true){
    this.adminviewService.changeBoolean(false)
   
    this.route.navigate(['/']);
    
   }
      

  }

  //toggle the hamburger menu
  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
  // change the route to home
  navigateHome() {
    this.route.navigate(['/']);
  }
  // hostListener to listen for the changes on window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (offset > 15) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }
}
