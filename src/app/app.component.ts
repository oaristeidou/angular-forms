import { Component } from '@angular/core';
import {Lesson} from "./lesson.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form App';
  public lesson = new Lesson();
}
