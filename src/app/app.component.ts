import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: 
  `<div>
    <ul>
      <li *ngFor="let message of mail.messages">
        {{message.text}}
        <button (click)="getId(message.text)">Update</button>
      </li>
    </ul>
    <app-simple-form 
    *ngFor="let message of mail.messages"
    [message]="message.text"
    (update)="onUpdate(message.id, $event.text)"
  ></app-simple-form>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onUpdate(id, text){
    this.mail.update(id, text)
  }

  getId(text) {
    console.log(text)
  }

  constructor(
    @Inject('mail') private mail
  ){

  }
}
