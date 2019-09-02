import { CustomFocusDirective } from './custom-focus.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    CustomFocusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CustomFocusDirective]
})
export class CustomFocusModule { }
