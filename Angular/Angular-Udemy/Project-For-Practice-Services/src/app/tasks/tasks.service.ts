import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  constructor() { }

  allTasks = this.tasks.asReadonly();

  onGetTasks() {
    return this.allTasks;
  }

  AddTask(task: { title: string, description: string }) {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(),
      status: "OPEN"
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  changeStatus(id: string, newStatus: TaskStatus) {

    this.tasks.update((oldTasks) =>
      oldTasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  }
}
