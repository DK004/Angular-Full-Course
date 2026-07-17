import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');

  name : string = "";

  updateName(name: string){
    this.name = name;
  }

  city : string = "";

  email : string="";
  getMail(email: string){
    this.email = email;
  }
}
