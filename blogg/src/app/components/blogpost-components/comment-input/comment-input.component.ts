import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {
  @Output() message = new EventEmitter();
  defaultValue = "skriv här...";

  addNewComment() {
    this.message.emit(this.defaultValue);
  }
  
}
