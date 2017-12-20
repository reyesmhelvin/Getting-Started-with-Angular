import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:'you are now friends with her'},
    {id: 1, text:'she liked your post'},
    {id: 2, text:'she commented on your post'}
  ]

  update(id, text){
    this.messages = this.messages.map( m => 
      m.id === id
      ? {id, text}
      : m
    )
  }

  constructor() { }

}
