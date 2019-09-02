import { CustomFocusDirective } from './../directives/custom-focus/custom-focus.directive';
import { MessageCardComponent } from '../component/message-card/message-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageCardComponent,
    CustomFocusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
