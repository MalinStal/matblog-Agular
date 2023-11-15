import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { DateService } from 'src/app/service/date.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CreatepostService {
//   category = this.blogpostService.categorys;
//   bakCategory = this.blogpostService.BakCategorys;
//   matCategory = this.blogpostService.MatCategorys;

  
//   //list to push al the new blogpost to the blogpsot array to render in blogpage
//   list = this.blogpostService.blogPostList;

//  // connect  FormGrop to a variabel cal addRecipe sp we can use the variable to add formbuilder.group in to it. 
//  //this have ti be done inside the constructor block. 

//   addRecipe : FormGroup;
//   constructor(private blogpostService : BlogpostsService, private fb : FormBuilder, private dateService: DateService, private localstorageService : LocalstorageService) {
    
//     this.addRecipe = this.fb.group({
//       id : Math.floor(Math.random() * 100),
//       title: new FormControl('', Validators.required),
//     thumbnailUrl:new FormControl('', ),
//     aboutRecipe: new FormControl('', ),
//     ingredientsList: this.fb.array([]) ,
//     cooking: this.fb.array([]) ,
//     category: new FormControl(''),
//     subCategory: new FormControl(''),
//     currentDate: this.dateService.getDate(),
//     likes: 0,
//     dislikes: 0,
//     Comments : this.fb.array([this.fb.control("")]),

      
//     });
  
//   listOfIngredients() : FormArray {
//     return this.addRecipe.get("ingredientsList") as FormArray
//   }
//   newIngredient(): FormGroup {
//     return this.fb.group({
//       measure: '',
//       ingredient: '',
//     })
//   }

//    listOfCooking() : FormArray {
//     return this.addRecipe.get("cooking") as FormArray
//   }
//   newCooking(): FormGroup {
//     return this.fb.group({
//      steps: "",
//     })
//   }
//    listOfComments() : FormArray {
//     return this.addRecipe.get("cooking") as FormArray
//   }
//   newComment(): FormGroup {
//     return this.fb.group({
//      comment: "",
//     })
//   }

//   addItem(list : any, item :any) {
//     this.list.push(item)
//     console.log(this.addRecipe.value);
//   }
//   removeItem( list : any, i : number) {
//     this.list.removeAt(i)
//   }
//   onSubmit() {
//     let formValue = this.addRecipe.value
//     console.log(formValue);
//     this.list.unshift(formValue as Blogs)
//     this.addRecipe.reset()
//     this.localstorageService.SavePost(this.list)
//   }
}
