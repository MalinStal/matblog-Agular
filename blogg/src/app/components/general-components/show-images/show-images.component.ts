import { Component, Input } from '@angular/core';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { Blogs } from 'src/app/service/class/blogs';

@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.component.html',
  styleUrls: ['./show-images.component.css']
})
export class ShowImagesComponent {

  constructor(private blogpostService : BlogpostsService){}
get post() {
   return this.blogpostService.blogPostList
}
 
}
