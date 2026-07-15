import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count = signal(0);

  incrementCount(){
    this.count.update((c) => c+1);
    console.log("Value of count : "+ this.count);
  }


  showEvent(e:any){
    console.log(e);
  }

  username='';

  updateUser(value: string){
    this.username = value;
  }

}
