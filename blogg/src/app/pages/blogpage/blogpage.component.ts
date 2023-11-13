import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css'],
})
export class BlogpageComponent implements OnInit {
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
