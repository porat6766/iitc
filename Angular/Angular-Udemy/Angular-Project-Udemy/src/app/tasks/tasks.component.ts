import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskServices } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name!: string;
  @Input() userId!: string;
  isAddingTask: boolean = false;

  constructor(private taskService:TaskServices){}

  getTasksOfSelectedUser() {
    return this.taskService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string) {
    return this.taskService.onCompleteTask(id)
  }

  addTask() {
    this.isAddingTask = true;
  }

  onCancleAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(newTask: any) {
    this.taskService.addTask(this.userId,{
      ...newTask,
    });
  }
}
