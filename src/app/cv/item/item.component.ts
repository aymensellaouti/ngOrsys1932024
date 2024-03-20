import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input({ required: true })
  cv!: Cv;
  @Output() selectCv = new EventEmitter<Cv>();

  /**
   * emmetre un evenement informant sur le Cv qui a été sélectionné
   */
  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
