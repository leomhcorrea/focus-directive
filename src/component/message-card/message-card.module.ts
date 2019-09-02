import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessageCardComponent } from './message-card.component';

@NgModule({
  declarations: [
    MessageCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MessageCardComponent]
})
export class MessageCardModule { }
