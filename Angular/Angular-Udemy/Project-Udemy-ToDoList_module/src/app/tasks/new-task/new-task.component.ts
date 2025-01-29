import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskServices } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone:false
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummery = '';
  enteredDueDate = '';

private taskService= inject(TaskServices)

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
this.taskService.addTask(this.userId,{
  title:this.enteredTitle,
  summary:this.enteredSummery,
  date:this.enteredDueDate
})
    this.close.emit();

  }
}
