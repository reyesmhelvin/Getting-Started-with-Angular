import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: 
  `<div>
    <ul>
      <li *ngFor="let message of mail.messages">
        {{message.text}}
        <button (click)="getObj(message)">Update</button>
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
    this.mail.update(id, text)
  }

  getObj(obj) {
    console.log(obj)
    this.passObj = obj;
  }

  constructor(
    @Inject('mail') private mail
  ){

  }
}
