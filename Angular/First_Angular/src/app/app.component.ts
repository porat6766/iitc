import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './Components/cuourse/courses.component';

@Component({
  selector: 'app-root',
  standalone: true, // If you are using standalone components
  imports: [RouterOutlet, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'First_Angular';
}
