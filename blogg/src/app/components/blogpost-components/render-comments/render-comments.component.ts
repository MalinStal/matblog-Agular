import { Component, Input } from '@angular/core';
import { Blogs } from 'src/app/service/class/blogs';

@Component({
  selector: 'app-render-comments',
  templateUrl: './render-comments.component.html',
  styleUrls: ['./render-comments.component.css']
})
export class RenderCommentsComponent {
@Input() post : Blogs | undefined = {} as Blogs
}
