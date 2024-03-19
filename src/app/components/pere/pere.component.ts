import { Component } from '@angular/core';

@Component({
  selector: 'app-pere',
  template: `
    <p [style.color]="'red'">Du texte</p>
    <app-fils
      (sendMessageToDad)="processSonMessage($event)"
      [message]="'cc cest ton papa :)'"
    />
  `,
  styleUrls: ['./pere.component.css'],
})
export class PereComponent {
  processSonMessage(message: string) {
    alert(message);
  }
}
