import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostsService } from 'src/app/service/blogposts.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent {
  
constructor(private blogService : BlogpostsService){

}

get blogpost() {
  return this.blogService.blogPostList
}
}
