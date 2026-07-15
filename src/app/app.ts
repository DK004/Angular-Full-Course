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

  // this will throw error at the complie time./runtime also it will show.
  // value=10;
  // value = "Arpit";

// defining with type
 name: string = 'Arpit';
 age :number =55;
 isValid:boolean = true;
 
 something:any = "Something"; //can store any datatype in any (not recommended)
 notSure : unknown= 18; //same as any but less danger than it


//  multiple values can be given to property (class variables)
StringOrNumber: string | number = 98; //union types


// error will not be tracked
handleClick(){
    let value;  //first needs to be declare
    value= 10;  //first initialization
    value ="Arpit Alkari";  //second initialization (this will be considered)
    console.log(value);
    return value;
  }
  display:string = this.handleClick();

}
