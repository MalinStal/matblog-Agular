import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogpostsService } from 'src/app/service/blogposts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {
  constructor(private blogpostService : BlogpostsService){}
  category = this.blogpostService.categorys;
  bakCategory = this.blogpostService.BakCategorys;
  matCategory = this.blogpostService.MatCategorys;
  
  addReciepe = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    thumbnailUrl:new FormControl('', Validators.required),
    aboutRecipe: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
    cooking: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    subCategory: new FormControl(''),
  })
}
