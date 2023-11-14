import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blogs } from 'src/app/service/class/blogs';

@Component({
  selector: 'commentsection',
  templateUrl: './commentsection.component.html',
  styleUrls: ['./commentsection.component.css']
})
export class CommentsectionComponent {
  @Input() post :Blogs | undefined ={} as Blogs;
@Input() addNewComment :string | undefined ="";
@Output() Comment  = new EventEmitter<string>();
@Output() like = new EventEmitter<Event>();
@Output() disLike  = new EventEmitter<Event>();
addComment(value : string | undefined) {
  this.Comment.emit(value)
}

}
