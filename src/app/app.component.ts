import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: 
  `<div>
    <h1>Todo</h1>
    <ul>
      <li class="item" *ngFor="let message of mail.messages">
        {{message.text}}
        <button (click)="getObj(message)" [ngClass]="isOnEditStyle()">Edit</button>
      </li>
    </ul>
    <app-simple-form 
    [message]="this.passObj"
    (update)="onUpdate($event.id, $event.text, $event.isOnEdit)"
    (create)="onCreate($event.text)"
  ></app-simple-form>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  passObj:object = {};
  isOnEdit:string = null;

  onUpdate(id, text, isOnEdit){
    this.isOnEdit = isOnEdit
    this.mail.update(id, text);
  }

  onCreate(text){
    this.mail.create(text);
  }

  isOnEditStyle() {
    if ('id' in this.passObj) {
      if (this.passObj) {
        return 'hide'
      }
      return 'show edit';
    }
    return 'show edit';
  }

  getObj(obj) {
    this.passObj = obj;
  }

  constructor(
    @Inject('mail') private mail
  ){

  }

  ngOnInit() {
  }

}
