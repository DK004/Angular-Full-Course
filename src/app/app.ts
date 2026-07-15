import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('AngularFullCourse');
  name = "Arpit Alakri";
  isAdmin = true;
  count=5;
  price=199.99;
  isLogin=true;

  title = signal("I am the best Always");
  getUser(){
    return "Arpit Alkari using method";
  }

}
