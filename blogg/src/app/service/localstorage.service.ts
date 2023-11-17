import { Injectable } from '@angular/core';
import { Blogs } from './class/blogs';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}
//localStorage - if item in storage get post from storage else return null
  getAllPost() {
   let allPost = localStorage.getItem("post");
   return allPost ? JSON.parse(allPost) : null;
  }

  SavePost( item: Blogs[]) : void{
    localStorage.setItem("post", JSON.stringify(item));
  }
  removePost(list : Blogs[], id : number)   {
    
    let newList = list.filter((all)=> all.id !== id)
    console.log(newList)
    return newList
   
  }

}
