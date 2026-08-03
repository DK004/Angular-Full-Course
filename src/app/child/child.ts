import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  name = input<string>();

  // send to parent from child new way
  message = signal<string>("");
  toParent(){
    this.message.set(" This message is received from Child component");
  }

}
