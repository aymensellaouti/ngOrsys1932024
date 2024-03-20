import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css'],
})
export class NgstyleComponent {
  @Input() color = 'red';
  bgc = 'green';
  font = 'verdana';
  // @Input() settings = {
  //   color: this.color,
  //   backgroundColor: this.bgc,
  //   fontFamily: this.font,
  // };
}
