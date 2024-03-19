import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  // filsComponent(message)
  // Je veux que message soit une entrée du composant
  @Input()
  message = 'cc je suis seul et je parle à moi même :(';

  @Output()
  sendMessageToDad = new EventEmitter<string>();
  counter = 1;
  sendMessage() {
    this.sendMessageToDad.emit('cc papa'+this.counter++);
  }
}
