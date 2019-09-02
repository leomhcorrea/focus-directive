import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent {

  @Input()
  id: string;

  display = true;

  clicked = false;

  @Output()
  event = new EventEmitter<boolean>();

  onClick() {
    this.display = false;
    this.clicked = true;
    this.event.emit(this.clicked);

  }

}


