import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { Blogs } from 'src/app/service/class/blogs';
import { DateService } from 'src/app/service/date.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {
// for rendering and using the category list from blogpost service 
  category = this.blogpostService.categorys;
  bakCategory = this.blogpostService.BakCategorys;
  matCategory = this.blogpostService.MatCategorys;

  
  //list to push al the new blogpost to the blogpsot array to render in blogpage
  list = this.blogpostService.blogPostList;

 // connect  FormGrop to a variabel cal addRecipe sp we can use the variable to add formbuilder.group in to it. 
 //this have ti be done inside the constructor block. 

  addRecipe : FormGroup;
  constructor(private blogpostService : BlogpostsService, private fb : FormBuilder, private dateService: DateService, private localstorageService : LocalstorageService) {
    
    this.addRecipe = this.fb.group({
      id : Math.floor(Math.random() * 100),
      title: new FormControl('', Validators.required),
    thumbnailUrl:new FormControl('', ),
    aboutRecipe: new FormControl('', ),
    ingredientsList: this.fb.array([]) ,
    cooking: this.fb.array([]) ,
    category: new FormControl(''),
    subCategory: new FormControl(''),
    currentDate: this.dateService.getDate(),
    likes: 30,
    dislikes: 0,
    Comments : [],

      
    });
    
//håller på med att lösa så man kan läga till ingrediens listan och rendera den i varje blog post 
//något där som inte funkar men kan vara att vi gjort om den til len lista som vi också 
//måste göra i själva klassen. kolla vidare på detta! 

  }
  get listOfIngredients() : FormArray {
      return this.addRecipe.get("ingredientsList") as FormArray
    }
    newIngredient(): FormGroup {
      return this.fb.group({
        measure: '',
        ingredient: '',
      })
    }
    // localStorage(key : string, items : any){
    //   this.localstorageService.addToLocalStorage(key, items)
    // }
    get listOfCooking() : FormArray {
      return this.addRecipe.get("cooking") as FormArray
    }
    newCooking(): FormGroup {
      return this.fb.group({
       steps: "",
      })
    }
    addItem(list : any, item :any) {
      list.push(item)
      console.log(this.addRecipe.value);
    }
    removeItem( list : any, i : number) {
      list.removeAt(i)
    }
    onSubmit() {
      console.log(this.addRecipe.value);
      this.list.unshift(this.addRecipe.value as Blogs)
     // this.localStorage("recipe", this.addRecipe.value)
      

    }

  

}
