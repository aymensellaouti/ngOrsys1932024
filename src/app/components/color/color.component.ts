import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  /**
   * La couleur de la backgournd de la DIV
   */
  defaultColor = 'red';
  /**
   * La couleur de la backgournd de la DIV
   */
  color = this.defaultColor;

  changeColor(newColor: string) {
    this.color = newColor;
  }
}
