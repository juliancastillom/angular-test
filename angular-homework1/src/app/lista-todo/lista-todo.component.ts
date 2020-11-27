import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.scss']
})
export class ListaTodoComponent implements OnInit {

  lista:string[];
  constructor() { 
    this.lista = ["item1","item2","item3","item4"];
  }

  ngOnInit(): void {

  }

  guardar(descripcion:string):boolean{
    this.lista.push(descripcion)
    console.log(this.lista);
    return false
  }

}
