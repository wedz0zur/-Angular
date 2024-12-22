import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { DataService } from './services/data.service';

export interface TodoItem {
  id:number;
  task:string;
  completed:boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgFor,NgClass , RouterLink,RouterLinkActive],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  
  todoList : TodoItem [] = [];
  newTask: string = ''


  private _dataService: DataService;

  constructor(dataService: DataService)
  {
    this._dataService = dataService;

    console.log(this._dataService);

   
    
  }

  // constructor(private dataService: DataService){
  //   console.log(this.dataService.getData());
    
  // }


  addTask():void{
    if(this.newTask.trim() !== ''){
      const newTodoItem : TodoItem = {
        id : Date.now(),
        task : this.newTask,
        completed:false
      }
      this.todoList.push(newTodoItem)
      this.newTask = ''
      }
   }
   toggleCompleted(index : number):void {
    console.log(index);
    this.todoList[index].completed = !this.todoList[index].completed
    }
    deleteTask(id:number):void{
       this.todoList = this.todoList.filter(item => item.id !== id)
       console.log(this.todoList);
       
    }
}