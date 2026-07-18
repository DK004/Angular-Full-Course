import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.html',
  styleUrl: './loops.css',
})
export class Loops {


  items = ['HTML', 'CSS','Java','Angular', 'JS', 'TS','c++','c#','swift','dot-net','Docker'];
  listCount : number = 11;
  Delete(i :number, c:number){
    this.items.splice(i,1);
    this.listCount = --c;
  }

  users = [
    {name : 'Arpit', age: 26},
    {name : 'Dhaval', age: 25},
    {name : 'Niraj', age: 28}
  ]

  // interview question
  fruits = ['orange','','apple','guavava','','banana','']


}
