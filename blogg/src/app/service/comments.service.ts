import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  _likes : number = 20; 
  _disLikes : number = 0;

//får inte dess functioner att fungera ?? 
  likes(): number{
  
      return this._likes += 1;
    

   
    
  }

  disLikes( ) : number {
   return this._disLikes -= 1;
  }

}
