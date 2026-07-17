import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Events } from './events/events';
import { ClickEvent } from './click-event/click-event';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Events, ClickEvent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');
}
