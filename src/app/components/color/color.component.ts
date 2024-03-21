import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  /**
   * La couleur de la backgournd de la DIV
   */
  @Input() defaultColor = 'red';
  /**
   * La couleur de la backgournd de la DIV
   */
  color = this.defaultColor;
  // Le service qui permet de récupérer des paramètres de la route active
  acr = inject(ActivatedRoute);
  constructor() {
    console.log(this.acr.snapshot);

  }
  ngOnInit(): void {
    // this.defaultColor = this.acr.snapshot.params['defaultColor'];
    this.color = this.defaultColor;
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
}
