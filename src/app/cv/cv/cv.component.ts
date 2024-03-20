import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
  // tableau de cvs
  cvs: Cv[] = [
    new Cv(
      1,
      'aymen',
      'sellaouti',
      'trainer',
      '12345',
      '',
      41
    ),
    new Cv(
      2,
      'skander',
      'sellaouti',
      'enfant',
      '12345',
      '         ',
      5
    ),
    new Cv(
      3,
      'Atmane',
      'Farhi',
      'développeur',
      '12345',
      'rotating_card_profile3.png',
      25
    ),
  ];

  /**
   * Le cv Sélectionné
   */
  selectedCv: Cv | null = null;
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
