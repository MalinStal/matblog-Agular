import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { CreatepostComponent } from './pages/createpost/createpost.component';
import { OnepostComponent } from './pages/onepost/onepost.component';

const routes: Routes = [
  {path: "", component : HomeComponent},
  {path: "blogs", component : BlogpageComponent},
  {path: "about", component : AboutmeComponent},
  {path: "post/:id", component : OnepostComponent},
  {path: "addpost", component : CreatepostComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration: "top"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
