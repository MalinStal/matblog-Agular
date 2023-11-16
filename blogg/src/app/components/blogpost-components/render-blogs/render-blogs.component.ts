import { Component , Input } from '@angular/core';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { Blogs } from 'src/app/service/class/blogs';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-render-blogs',
  templateUrl: './render-blogs.component.html',
  styleUrls: ['./render-blogs.component.css']
})
export class RenderBlogsComponent {
  constructor(
    private blogService: BlogpostsService,
    private localStorageService: LocalstorageService
  ) {}
  ngOnInit(): void {
  
  }

  get blogpost() {
    let localStorageArray = this.localStorageService.getAllPost();
    let blogArray = this.blogService.blogPostList;
    if (localStorageArray === null) {
      return blogArray;
    }
    return this.localStorageService.getAllPost();
  }
}
