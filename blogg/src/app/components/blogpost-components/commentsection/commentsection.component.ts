import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commentsection',
  templateUrl: './commentsection.component.html',
  styleUrls: ['./commentsection.component.css']
})
export class CommentsectionComponent {
@Input() likes : number = 0;
@Input() disLikes : number = 0;

// @Output() comments : new EventEmitter<any>()


}
