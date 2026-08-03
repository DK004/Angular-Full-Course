import { Component, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');
  name = signal("");
  email = signal("");

  submitForm(){
    console.log(`Name : ${this.name} , Email : ${this.email}`);
  }

  formToggle = true;
  toogleForm(){
    this.formToggle = !this.formToggle;
  }

}
