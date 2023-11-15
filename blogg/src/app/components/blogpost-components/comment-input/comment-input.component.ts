import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {
  @Output() message = new EventEmitter();
  defaultValue = " from child";

  msgToParent() {this.message.emit(this.defaultValue);}
  
}
