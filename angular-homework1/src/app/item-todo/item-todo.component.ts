import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.scss']
})
export class ItemTodoComponent implements OnInit {
  @Input()
  descripcion: string; 
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {
    this.descripcion = "defecto"
   }

  ngOnInit(): void {
  }

}
