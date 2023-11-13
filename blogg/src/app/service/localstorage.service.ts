import { Injectable } from '@angular/core';
import { Blogs } from './class/blogs';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  getAllPost() {
   let allPost = localStorage.getItem("post");
   return allPost ? JSON.parse(allPost) : null;
  }

  SavePost( item: Blogs[]) : void{
    localStorage.setItem("post", JSON.stringify(item));
  }
  removePost(id: string) {
    localStorage.removeItem(id);
  }
  updatePost() {

  }
}
