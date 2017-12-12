import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form-model-driven',
  templateUrl: './form-model-driven.component.html',
  styleUrls: ['./form-model-driven.component.css']
})
export class FormModelDrivenComponent {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      title: new FormControl("This is a title"),
      duration: new FormControl(0),
      description: new FormControl("Here write a description")
    });
  }

}
