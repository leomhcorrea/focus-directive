import { element } from 'protractor';
// tslint:disable
import { Directive, HostListener, Input, Component, EventEmitter, NgModule } from '@angular/core';

@Directive({
  selector: '[customFocus]',
})
export class CustomFocusDirective {

  @Input()
  next_id: string;

  @HostListener('event', ['$event.target'])
  changeFocus(el: HTMLElement) {

    el = document.getElementById(this.next_id);

    if (el === null) {
      console.log(event.target);
    } else
    if (el !== null) {
      el.focus();
    } else {
    return console.log('error');
    }
  }

}


