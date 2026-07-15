import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  imageUrl:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rw5tgZj1Vvypc1wZpVxx3hbOazS7hyhKphOxs-MeQWKFEqVnXuL3d2ie&s=10";
  buttonDisable = true;
  userName = "dk004";
  isActive = true;
  height = "200px";
  bgColor = "Red";

  count = signal(0);
}
