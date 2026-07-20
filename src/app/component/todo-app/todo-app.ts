import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  imports: [],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})
export class TodoApp {

  tasks :string[] = [];
  addTask(task:string){
    this.tasks.push(task) ; 
    task="";
   }

   deleteTask(index : number){
      this.tasks.splice(index,1);
   }


}
