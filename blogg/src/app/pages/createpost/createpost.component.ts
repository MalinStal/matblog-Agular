import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { BlogpostsService } from 'src/app/service/blogposts.service';
import { Blogs } from 'src/app/service/class/blogs';
import { DateService } from 'src/app/service/date.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
})
export class CreatepostComponent implements OnInit {
  // for rendering and using the category list from blogpost service
  category = this.blogpostService.categorys;
  bakCategory = this.blogpostService.BakCategorys;
  matCategory = this.blogpostService.MatCategorys;

  //list to push al the new blogpost to the blogpsot array to render in blogpage
  list = this.blogpostService.blogPostList;

  // connect  FormGrop to a variabel cal addRecipe sp we can use the variable to add formbuilder.group in to it.
  //this have ti be done inside the constructor block.

  addRecipe: FormGroup;
  constructor(
    private blogpostService: BlogpostsService,
    private fb: FormBuilder,
    private dateService: DateService,
    private localstorageService: LocalstorageService
  ) {
    this.addRecipe = this.fb.group({
      title: new FormControl(null, Validators.required),
      thumbnailUrl: new FormControl(null, ),
      aboutRecipe: new FormControl(null, Validators.required),
      ingredientsList: this.fb.array([]),
      cooking: this.fb.array([], ),
      category: new FormControl(null, Validators.required),
      subCategory: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {}
  get listOfIngredients(): FormArray {
    return this.addRecipe.get('ingredientsList') as FormArray;
  }
  newIngredient(): FormGroup {
    return this.fb.group({
      measure: new FormControl(null, Validators.required),
      ingredient: new FormControl(null, Validators.required),
    });
  }

  get listOfCooking(): FormArray {
    return this.addRecipe.get('cooking') as FormArray;
  }
  newCooking(): FormGroup {
    return this.fb.group({
      steps: new FormControl(null, Validators.required),
    });
  }

  addItem(list: any, item: any) {
    list.push(item);
  }
  removeItem(list: any, i: number) {
    list.removeAt(i);
  }

  newId() {
    let id = 5
    let NewID = id + 1
    return NewID
  }
  onSubmit() {

    if(this.addRecipe.valid){ 
      let formValue = this.addRecipe.value;
   
    this.list.unshift({
      ...formValue,
      id: this.newId(),
      currentDate: this.dateService.getDate(),
      likes: 0,
      dislikes: 0,
      comments: [],
    } as Blogs); console.log(formValue);
    this.addRecipe.reset();
    this.localstorageService.SavePost(this.list);}
      else if (!this.listOfIngredients.valid) {
     null
    } else if (!this.listOfCooking.valid) {
      null
     }
    else{  
     
      alert("Du behöver fylla i alla fält för att kunna spara ett recept.")
      
    }
   
  }
  indexet(i: number): number {
    let index = i + 1;
    return index;
  }
  imgPreview: string | ArrayBuffer | null | undefined = undefined;

  selectedFile: File | null = null;

  // onFileSelected(event: any) {
  //   const file: File = event?.target.files[0];
  //   this.selectedFile = file;
  //   this.previewTheImage();
  // }
  previewTheImage() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imgPreview = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
