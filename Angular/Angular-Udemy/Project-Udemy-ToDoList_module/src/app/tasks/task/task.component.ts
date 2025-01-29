import { Component, inject, Input } from '@angular/core';
import { ITask } from '../../../models/TaskMmodel';
import { TaskServices } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone:false
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
private taskService = inject(TaskServices)

  onCompleteTask() {
    this.taskService.onCompleteTask(this.task.id);
  }
}
