import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortNamePipePipe } from './pipes/short-name-pipe-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ShortNamePipePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFullCourse');

  // for pipes need to import CommonModule

  today = new Date();
  FullName = "Arpit ALkari"; 
}

