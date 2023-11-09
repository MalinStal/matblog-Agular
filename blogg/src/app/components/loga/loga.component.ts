import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loga',
  templateUrl: './loga.component.html',
  styleUrls: ['./loga.component.css']
})
export class LogaComponent {
@Input() size  :string = "s";
}
