import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) Name?: string;
  constructor(private tasksService: TasksService) {}

  public addNewTask: boolean = false;

  get selectUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  public onCompleteTask(id: string) {}
  onAddTask() {
    this.addNewTask = true;
  }
  onCloseAddTask() {
    this.addNewTask = false;
  }
}
