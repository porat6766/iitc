import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITask } from '../../../models/TaskMmodel';
import { DatePipe } from '@angular/common';
import { TaskServices } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
private taskService = inject(TaskServices)

  onCompleteTask() {
    this.taskService.onCompleteTask(this.task.id);
  }
}
