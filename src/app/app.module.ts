import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PgComponent } from './feature/pg/pg.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    PgComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'api', useValue: 'http://localhost:300'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
