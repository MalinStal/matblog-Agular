import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { Blogs } from 'src/app/service/class/blogs';
import { LocalstorageService } from 'src/app/service/localstorage.service';


@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent {
  //connected to the params
  id : string ="";
  nav : any = ""; // används denna till nåt??? 

  //for the ngmodel
  newComment : string = ""; 


constructor(private blogService : BlogpostsService, private postId : ActivatedRoute, private route : Router , private localStorageService : LocalstorageService){
  postId.params.subscribe((params) => (this.id = params['id']))
}

navigateHome() {
this.route.navigate(["/"])
}
// to get one blog posts. find metod to search for the post whit a special id 
 get post() : Blogs | undefined{
  return this.blogService.blogPostList.find(all => all.id === parseInt(this.id))
 }

// function för comments and like btns
 like() : number| undefined{
  
  if(this.post == undefined){
    return
  } else{
    return this.post.likes += 1;
  
}

 
 }
 disLike(){
  if(this.post == undefined){
    return
  } 
return this.post.dislikes -= 1;
 }
 addComment(value : string) {
  this.post?.comments.unshift(value)
  this.newComment = "";
 }

}
