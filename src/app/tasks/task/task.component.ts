import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Tasks } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Tasks;
  private tasksService = inject(TasksService);

  public onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
