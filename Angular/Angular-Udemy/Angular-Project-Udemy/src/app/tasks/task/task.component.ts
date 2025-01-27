import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../models/TaskMmodel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
