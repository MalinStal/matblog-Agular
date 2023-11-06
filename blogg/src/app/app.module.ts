import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { OnepostComponent } from './pages/onepost/onepost.component';
import { CreatepostComponent } from './pages/createpost/createpost.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { AddminhomepageComponent } from './addminhomepage/addminhomepage.component';

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
    AddminhomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
