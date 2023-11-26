import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminviewService } from 'src/app/service/adminview.service';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { Blogs } from 'src/app/service/class/blogs';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css'],
})
export class OnepostComponent implements OnInit {
  //connected to the params
  id: string = '';

 //for the ngmodel
 newInputValue: any = "";
  list =this.blogService.blogPostList;
 ngOnInit(): void {
  this.adminviewService.getBooleanValue().subscribe((value) => {
    this.hide = value;
  });
 }

  constructor(
    private blogService: BlogpostsService,
    private postId: ActivatedRoute,
    private route: Router,
    private localStorageService: LocalstorageService,
    private adminviewService : AdminviewService
  ) {
    postId.params.subscribe((params) => (this.id = params['id']));
   
  }
  //handeling admin view
  hide : boolean = false 
  changeToAdmin(): void {
    let bool = this.adminviewService.getBooleanValue()
  
     this.hide = true;
    if(this.hide == true){
     this.adminviewService.changeBoolean(false)
     this.hide = false;
     this.route.navigate(['/']);
     
    }
       
   }
 
  // to get one blog posts. find metod to search for the post whit a special id
  get post(): Blogs | undefined {
    return this.blogService.blogPostList.find(
      (all) => all.id === parseInt(this.id)
    );
  }  
 // sending the event to the value and push it to the start of the list of comments and clear the inputfield
  addNewComment(event : Event) {
    this.newInputValue = event;
    this.post?.comments.unshift(this.newInputValue);
    this.newInputValue = '';
    this.localStorageService.SavePost(this.list);
    
  }

  //REMOVE post from locla sotrage but it dusent work as expected at this time
  removePost(){
    this.localStorageService.removePost(this.list, parseInt(this.id) )
    this.navigateHome()
  }
//  

  //if we can find the post like increase whit 1 and save the change to local storage 
  like(): void | undefined {
    if (this.post == undefined) {
      return;
    } else {
      this.post.likes += 1;
      this.localStorageService.SavePost(this.list);
      
    }
  }
  //if we can find the post dislike decrease whit 1 and save the chanfe to local storage 
  disLike(): void | undefined {
    if (this.post == undefined) {
      return;
    }
    this.post.dislikes -= 1;
    this.localStorageService.SavePost(this.list);
  }


  // to write out listitem in order of the index whit 1 insted of 0 
  indexet(i: number): number {
    let index = i + 1;
    return index;
  }
  //Going back to home page
   navigateHome() {
    this.route.navigate(['/']);
    
  }
}
