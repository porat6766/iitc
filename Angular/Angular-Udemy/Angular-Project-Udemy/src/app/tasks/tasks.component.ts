import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummy_Tasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
  @Input() userId?: string;

  tasks = dummy_Tasks;

  getTasksOfSelectedUser() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
