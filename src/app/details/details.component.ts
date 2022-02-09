import { Component, OnInit } from '@angular/core'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  name: any
  constructor(private message: MessageService) {}

  ngOnInit(): void {
    this.message.getMessage().subscribe((message) => {
      if (message) {
        this.name = message
      }
    })
  }
}
