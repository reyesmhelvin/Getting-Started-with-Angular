import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #comment type="text" [(ngModel)]="message.text">
      <button (click)="updateItem({id:message.id, text:message.text, isOnEdit:isOnEditStyle()}, comment)">{{(isOnEdit()) ? 'Update' : 'Add'}}</button> 
      <button [ngClass]="isOnEditStyle()">Cancel</button>
    </div>
  `,
  styleUrls: ['../app.component.css']
})
export class SimpleFormComponent implements OnInit {
  
  @Input() message;
  @Output() update = new EventEmitter()
  @Output() create = new EventEmitter()

  constructor(@Inject('mail') private mail) { }

  isOnEditStyle() {
    if ('id' in this.message) {
      if (this.message.id) {
        return 'show'
      }
      return 'hide';
    }
    return 'hide';
  }
   isOnEdit() {
    return (this.message.id) ? true : false; 
  }

  updateItem(input, inputBox){
    if (input.id) {
      console.log('update...')
      this.update.emit(input);
      return
    } 
    console.log('create...')
    this.createItem(input);
    this.nullifyInput(inputBox);
  }

  createItem(input) {
   let inputText = input.text;
   this.create.emit({text: inputText})
  }

  nullifyInput(inputBox) {
    inputBox.value = null;
  }

  ngOnInit() {
  }

}
