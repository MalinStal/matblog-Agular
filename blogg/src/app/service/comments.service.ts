import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  _likes : number = 20; 
  _disLikes : number = 0;


  likes(): void{
    this._likes ++
  }

  disLikes() : number {
   return this._disLikes - 1
  }

}
