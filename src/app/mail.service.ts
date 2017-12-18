import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    'you are now friends with her',
    'she liked your post',
    'she commented on your post'
  ]

  constructor() { }

}
