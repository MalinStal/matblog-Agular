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
    likes: 0,
    dislikes: 0,
    Comments : this.fb.array([""]),

      
    });
  
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
      let formValue = this.addRecipe.value
      console.log(formValue);
      this.list.unshift(formValue as Blogs)
      this.addRecipe.reset()
      this.localstorageService.SavePost(this.list)
    }

    // koden nedanför va till en evenutell filhantering av bilder med input type file men funkade inte 
    // url : any = ""
    // file(event : any) {
    //   if(!event.target.file[0] || event.target.file[0].length == 0){
    //     return;
    //   }
    //   let mimetype = event.target.file[0].type;
    //   if(mimetype.match(/assets/) == null){
    //     return
    //   }
    //   let reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0])
    //   reader.onload = (_event) => {
    //     this.url = reader.result;
    //   }
    // }
}
