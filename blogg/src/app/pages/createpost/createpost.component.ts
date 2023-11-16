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
    
      title: new FormControl('', Validators.required),
    thumbnailUrl:new FormControl('', Validators.required),
    aboutRecipe: new FormControl('', Validators.required),
    ingredientsList: this.fb.array([], Validators.required) ,
    cooking: this.fb.array([], Validators.required) ,
    category: new FormControl('',Validators.required),
    subCategory: new FormControl('',Validators.required),
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
    get listOfComments() : FormArray {
      return this.addRecipe.get("cooking") as FormArray
    }
    newComment(): FormGroup {
      return this.fb.group({
       comment: "",
      })
    }

    addItem(list : any, item :any) {
      list.push(item)

    }
    removeItem( list : any, i : number) {
      list.removeAt(i)
    }
    onSubmit() {
      let formValue = this.addRecipe.value
      console.log(formValue);
      this.list.unshift({...formValue, id: Math.floor(Math.random() * 100), 
        currentDate : this.dateService.getDate(), 
        likes : 0, 
        dislikes : 0 , comments : [] }as Blogs)
      this.addRecipe.reset()
      this.localstorageService.SavePost(this.list)
    }
    indexet(i: number): number {
      let index = i + 1;
      return index;

    }
    imgPreview : string |ArrayBuffer|null | undefined = undefined;

    selectedFile : File |null = null;

    onFileSelected(event : any) {
      const file : File = event?.target.files[0];
      this.selectedFile = file;
      this.previewTheImage()

    }
    previewTheImage(){
      if(this.selectedFile){
        const reader = new FileReader();

        reader.onload = (e) => {
          this.imgPreview  =e.target?.result;
        }
        reader.readAsDataURL(this.selectedFile);
      }
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
