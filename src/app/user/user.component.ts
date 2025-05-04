import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { User } from './user.model';
import { NgClass } from '@angular/common';
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) user! : User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  //?Using output function: Note: Not a signal
  // select = output<string>();

  //? Using Signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // ImagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  get ImagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
