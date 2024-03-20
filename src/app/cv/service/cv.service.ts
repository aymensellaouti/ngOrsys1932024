import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
    new Cv(1, 'aymen', 'sellaouti', 'trainer', '12345', '', 41),
    new Cv(2, 'skander', 'sellaouti', 'enfant', '12345', '         ', 5),
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
  }

  getCvs(): Cv[] {
    return this.cvs;
  }
}
