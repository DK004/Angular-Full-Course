import { Component, computed, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

interface User{
  name : string,
  age : number
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');

  signalValue = signal(10);
  normalValue = 20;

  increment(){
    this.signalValue.update(c => c+1);
  }

  decrement(){
    this.signalValue.update(c => c-1);
  }

  // Signal means - Reactive variable
  // reason to use signal
  // fast rendering
  // simple state managememt
  // predictable
  // signal is replacement of zones(used previously)

  // Sihgnals with data-types
  // e.g
  count = signal<number>(20);

  // arrays using signal
  arr = signal<number[]>([10,20,30,40,50]);
  addElement(){
    // using update method for signal
    this.arr.update(nums => [...nums,60,70,80,90,100]);
  }

  // object using signal
  obj = signal<User>({
    name : "Rahul",
    age : 29
  });


  // computed values for signals
  items = signal<number[]>([10,20]);
  addItem(itemPrice:string){
    // using update method for signal
    this.items.update(nums => [...nums,Number(itemPrice)]);
  }

  cartValue = computed<number>(()=>{
    return this.items().reduce((a,c)=>a+c,0);
  });



}
