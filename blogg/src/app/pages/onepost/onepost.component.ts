import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { Blogs } from 'src/app/service/class/blogs';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css'],
})
export class OnepostComponent {
  //connected to the params
  id: string = '';
  nav: any = ''; // används denna till nåt???
 

  constructor(
    private blogService: BlogpostsService,
    private postId: ActivatedRoute,
    private route: Router,
    private localStorageService: LocalstorageService
  ) {
    postId.params.subscribe((params) => (this.id = params['id']));
  }

  navigateHome() {
    this.route.navigate(['/']);
    console.log(this.route)
  }
  // to get one blog posts. find metod to search for the post whit a special id
  get post(): Blogs | undefined {
    return this.blogService.blogPostList.find(
      (all) => all.id === parseInt(this.id)
    );
  }  
  //for the ngmodel
 newInputValue: any = "";
  list = this.blogService.blogPostList;

  addNewComment(event : Event) {
    this.newInputValue = event;
    this.post?.comments.unshift(this.newInputValue);
    this.newInputValue = '';
    this.localStorageService.SavePost(this.list);
    console.log(this.post?.comments)
  }
  addComment() {
    this.post?.comments.unshift(this.newInputValue);
    this.newInputValue = '';
    this.localStorageService.SavePost(this.list);
    console.log(this.post?.comments)
  }

 

  // function för comments and like btns
  like(): void | undefined {
    if (this.post == undefined) {
      return;
    } else {
      this.post.likes += 1;
      this.localStorageService.SavePost(this.list);
      
    }
  }
  disLike(): void | undefined {
    if (this.post == undefined) {
      return;
    }
    this.post.dislikes -= 1;
    this.localStorageService.SavePost(this.list);
  }



  indexet(i: number): number {
    let index = i + 1;
    return index;
  }
  
}
