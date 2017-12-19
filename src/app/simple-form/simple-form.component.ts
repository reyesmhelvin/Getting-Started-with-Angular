import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #comment type="text" [(ngModel)]="message.text">
      <button (click)="update.emit({id:message.id, text:message.text})">Post</button> 
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  
  @Input() message;
  @Output() update = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
