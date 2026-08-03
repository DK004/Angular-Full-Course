import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';

interface cards{
  title : string,
  description :string 
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');

cards1 = signal<cards[]>([{
  title : "Card 1",
  description : "This is the desc for card 1"
},
{
  title : "Card 2",
  description : "This is the desc for card 2"
},
{
  title : "Card 3",
  description : "This is the desc for card 3"
}]);

}
