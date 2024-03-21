import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  cv!: Cv;
}
