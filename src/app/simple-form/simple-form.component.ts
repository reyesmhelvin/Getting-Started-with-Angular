import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #comment type="text" [(ngModel)]="message.text">
      <button (click)="addOrUpdate({id:message.id, text:message.text}, comment)">{{(isOnEdit()) ? 'Update' : 'Add'}}</button> 
      <button [ngClass]="isOnEditStyle()">Cancel</button>
    </div>
  `,
  styleUrls: ['../app.component.css']
})
export class SimpleFormComponent implements OnInit {
  
  @Input() message;
  @Output() update = new EventEmitter()

  constructor() { }

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

  addOrUpdate(obj, element){
    this.update.emit(obj);
    element.value = '';
    this.message.id = null; 
  }

  ngOnInit() {
  }

}
