import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<div>
    <app-simple-form></app-simple-form>
    {{mail.message}}
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api
  ){

  }
}
