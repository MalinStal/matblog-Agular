import { Component, Input } from '@angular/core';
import { Blogs } from 'src/app/service/class/blogs';

@Component({
  selector: 'app-bloggitem',
  templateUrl: './bloggitem.component.html',
  styleUrls: ['./bloggitem.component.css']
})
export class BloggitemComponent {
  @Input() post : Blogs = {} as Blogs;
}
