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
        <button (click)="getObj(message)" class="edit">Edit</button>
      </li>
    </ul>
    <app-simple-form 
    [message]="this.passObj"
    (update)="onUpdate($event.id, $event.text)"
  ></app-simple-form>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  passObj:object = {};

  onUpdate(id, text){
    this.mail.update(id, text);
  }

  isOnEditStyle() {
    if ('id' in this.passObj) {
      if (this.passObj) {
        return 'show edit'
      }
      return 'hide';
    }
    return 'show';
  }

  getObj(obj) {
    console.log(this.passObj, '2nd')
    this.passObj = obj;
  }

  constructor(
    @Inject('mail') private mail
  ){

  }

  ngOnInit() {
    console.log(this.passObj, 'mhelvin reyes')
  }

}
