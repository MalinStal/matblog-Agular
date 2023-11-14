import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Blogs } from 'src/app/service/class/blogs';

@Component({
  selector: 'like-btns',
  templateUrl: './like-btns.component.html',
  styleUrls: ['./like-btns.component.css']
})
export class LikeBtnsComponent {
  @Input() post : Blogs | undefined = {} as Blogs
@Output() like = new EventEmitter<Event>();
@Output() disLike  = new EventEmitter<Event>();

}
