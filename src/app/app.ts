import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');
  // create empty array
  users : any[] = [];

  // inject the service through Constructor
  constructor(private userService : User){}

  // use ngoninit life cycle hook to call service as soon as component is initialize
  ngOnInit(){

    // important to subscribe to service to get data
    this.userService.getUser().subscribe((user : any)=>{
      this.users = user;
    });
  }




  // using Signals -----------------------------------------------------------------------------------------------
  Service = inject(User);
  usersSignal:any = toSignal(this.Service.getUser()) ;

}
