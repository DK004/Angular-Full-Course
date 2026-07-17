import { Component } from '@angular/core';

@Component({
  selector: 'app-click-event',
  imports: [],
  templateUrl: './click-event.html',
  styleUrl: './click-event.css',
})
export class ClickEvent {

  handleClick(){
    console.log("Button Clicked");
  }

  onTyping(event: any){
    console.log("Typed : ",event.target.value);
  }

  onKeyUp(event:any){
    console.log(event.key);
  }

  onHover(){
    console.log("Mouse entered the box");
  }

  onLeave(){
    console.log("Mouse left...");
  }

}
