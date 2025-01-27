import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})

export class TaskServices{
    private dummy_Tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];
      
getUserTasks(userId:string){
    return this.dummy_Tasks.filter(task=>task.userId===userId)
}

addTask(userId:string,taskData:any){
    this.dummy_Tasks.unshift({
        id:new Date().getTime().toString(),
        userId:userId,
        title:taskData.title,
        summary:taskData.summary,
        dueDate:taskData.dueDate
    })
}

onCompleteTask(id: string) {
    this.dummy_Tasks = this.dummy_Tasks.filter((task) => task.id !== id);
  }


}