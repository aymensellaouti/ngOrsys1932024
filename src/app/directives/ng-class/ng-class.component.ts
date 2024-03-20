import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  /**
   * L'état de la lampe
   */
  open = false;
  interrupteur() {
    this.open = !this.open;
  }
}
