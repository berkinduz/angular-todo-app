import { Component, OnInit } from '@angular/core'
import { Todos } from '../Todos'
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
    { id: 3, name: 'normal' },
  ]

  todos: Todos[] = [
    {
      task: 'My Todo',
      isDone: false,
      priority: '',
    },
    {
      task: 'My other Todo',
      isDone: false,
      priority: '',
    },
  ]

  constructor() {}

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
}
