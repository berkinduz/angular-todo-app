import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  private subject = new Subject<any>()

  sendMessage(message: any) {
    this.subject.next(message)
  }

  clearMessages() {
    this.subject.next(null)
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable()
  }
}
