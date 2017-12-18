import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <input #comment type="text"/>
      <button (click)="onClick(comment)">Post</button> 
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  constructor() { }

  ngOnInit() {
  }

  onClick(value) {
    console.log(value.value)
  }

}
