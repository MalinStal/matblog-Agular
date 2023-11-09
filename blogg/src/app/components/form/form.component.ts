import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
textMessage : string = "skriv ditt meddelande här..."
formSet = new FormGroup({
  name: new FormControl("", Validators.required),
  email: new FormControl(""),
  message :new  FormControl("")
})
saveMessage() {
  console.log(this.formSet.value)
  this.formSet.reset()
}
}
