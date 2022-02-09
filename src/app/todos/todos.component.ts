import { Component, OnInit, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { Todos } from '../Todos'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  newTask: string = ''
  priority: string = 'Priority'
  priorities = [
    {
      id: 1,
      name: 'high',
    },
    {
      id: 2,
      name: 'low',
    },
    { id: 3, name: 'default' },
  ]

  todos: Todos[] = [
    {
      task: 'My Todo',
      isDone: false,
      priority: 'Default',
    },
    {
      task: 'My other Todo',
      isDone: false,
      priority: 'Default',
    },
  ]

  @Output() messageEvent = new EventEmitter<string>()

  constructor(private message: MessageService) {}

  ngOnInit(): void {}

  addTask() {
    this.todos.push({
      task: this.newTask,
      isDone: false,
      priority: this.priority,
    })

    this.newTask = ''
    this.priority = 'Priority'
  }

  doneTask(index: number) {
    this.todos[index].isDone = true
  }

  deleteTask(task: string) {
    this.todos = this.todos.filter((todo) => todo.task !== task)
  }

  detail(pri: string) {
    let messageTodo: Todos[] = this.todos.filter(
      (todo) => todo.priority === pri,
    )
    console.log(messageTodo)
    this.message.sendMessage(messageTodo)
  }
}
