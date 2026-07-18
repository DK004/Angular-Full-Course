import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loops } from "./loops/loops";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loops],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');

  showText = false;
  toggleText(){
    this.showText = !this.showText;
  }

  age:number = 0;
  updateAge(age : string){
    this.age = Number(age);
  }


  page :string ="";
  updatePage(event :Event){
    let value = event.target as HTMLSelectElement;
    this.page = value.value;
  }

  isShowFor = true;
  showFor(){
    this.isShowFor = !this.isShowFor;
  }

}

