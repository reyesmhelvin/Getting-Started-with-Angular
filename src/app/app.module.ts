import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
