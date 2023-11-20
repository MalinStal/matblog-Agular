import { Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BlogpostsService } from 'src/app/service/blogposts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isFixedNavbar: boolean = true;
  hide = this.blogpostservice.adminPage;

  //hostbinding för att koppla classen.navbaropened till boolean värdet
  @HostBinding('class.navbar-opened') navbarOpened: boolean = false;
  constructor(
    private route: Router,
    private blogpostservice: BlogpostsService
  ) {}

  //to change betwwen the admin veu
  changeToAdmin(): void {
    this.hide = !this.hide;
    console.log(this.hide);
    if (!this.hide) {
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
