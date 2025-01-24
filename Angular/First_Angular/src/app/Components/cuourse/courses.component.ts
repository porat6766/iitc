import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../Services/courses.service';

@Component({
  selector: 'courses',
  standalone: true,
  imports: [CommonModule],
  providers: [CoursesService],
  template: `
    <h2>{{ title }}</h2>
    <h1>courses:</h1>
    <ul>
      <li *ngFor="let course of courses_1" class="bg-green-800 m-10"> 
        {{ course }}
      </li>
    </ul>
    <button (click)="addCourse('New Course')">Add Course</button>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses_1: string[] = []; // Initialize courses_1 as an empty array

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses_1 = this.coursesService.getCourses_1(); 
  }

  addCourse(course: string) {
    this.coursesService.addCourse(course);
    this.courses_1 = this.coursesService.getCourses_1(); 
  }
}