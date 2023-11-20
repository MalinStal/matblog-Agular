import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { OnepostComponent } from './pages/onepost/onepost.component';
import { CreatepostComponent } from './pages/createpost/createpost.component';
import { FormComponent } from './components/general-components/form/form.component';
import { HeaderComponent } from './components/general-components/header/header.component';
import { FooterComponent } from './components/general-components/footer/footer.component';
import { LogaComponent } from './components/general-components/loga/loga.component';
import { LikeBtnsComponent } from './components/blogpost-components/like-btns/like-btns.component';
import { RenderCommentsComponent } from './components/blogpost-components/render-comments/render-comments.component';
import { ButtonComponent } from './components/general-components/button/button.component';

import { CommentInputComponent } from './components/blogpost-components/comment-input/comment-input.component';
import { RenderBlogsComponent } from './components/blogpost-components/render-blogs/render-blogs.component';
import { BloggitemComponent } from './components/blogpost-components/bloggitem/bloggitem.component';
import { ShowImagesComponent } from './components/general-components/show-images/show-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogpageComponent,
    AboutmeComponent,
    OnepostComponent,
    CreatepostComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    
    LogaComponent,
    LikeBtnsComponent,
    RenderCommentsComponent,
    ButtonComponent,
    CommentInputComponent,
    RenderBlogsComponent,
    BloggitemComponent,
    ShowImagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
