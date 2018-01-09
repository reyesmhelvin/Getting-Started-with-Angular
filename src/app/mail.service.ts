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

  create(text){
    console.log(text)
    this.validateItem(text);
    this.sanitizeItem(text)
    let id = this.getLastId();
    let item = {id: id, text: text};
    this.pushToList(item);
  }

  validateItem(item){
    if (item === undefined || item === null) {
      //throw new Error('Input needs to be provided.');
    }
  }

  sanitizeItem(item) {
    console.log(item.trim(), item.length,'trim')
  }

  pushToList(item) {
    this.messages.push(item);
    console.log(this.messages);
  }

  getLastId() {
    let length = this.messages.length;
    return length;
  }

  constructor() { }

}
