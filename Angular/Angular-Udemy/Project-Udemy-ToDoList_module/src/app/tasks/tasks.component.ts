import { Component, Input } from '@angular/core';
import { TaskServices } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: false
})
export class TasksComponent {
  @Input() name!: string;
  @Input() userId!: string;
  isAddingTask: boolean = false;

  constructor(private taskService: TaskServices) { }

  getTasksOfSelectedUser() {
    return this.taskService.getUserTasks(this.userId)
  }

  addTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
