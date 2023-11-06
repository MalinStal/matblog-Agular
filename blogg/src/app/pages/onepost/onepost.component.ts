import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { Blogs } from 'src/app/service/class/blogs';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent {
  id : string ="";
   nav : any = "";
constructor(private blogService : BlogpostsService, private postId : ActivatedRoute, private route : Router, private commentsService : CommentsService ){
  postId.params.subscribe((params) => (this.id = params['id']))
}
navigateHome() {
this.route.navigate(["/"])
}
 get post() : Blogs | undefined{
  return this.blogService.blogPostList.find(all => all.id === parseInt(this.id))
 }


}
