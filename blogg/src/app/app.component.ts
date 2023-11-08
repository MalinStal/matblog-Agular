import { Component } from '@angular/core';
import { BlogpostsService } from './service/blogposts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogg';
  constructor(private blogService : BlogpostsService) {}
  hideimg = this.blogService.hideimg
}
