import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigninComponent } from './signin/signin';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SigninComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');
}
