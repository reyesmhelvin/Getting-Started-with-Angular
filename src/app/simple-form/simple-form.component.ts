import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #comment type="text" [(ngModel)]="message">
      <button (click)="update.emit({text:message})">Post</button> 
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

  onClick(value) {
    console.log(value.value)
  }

}
