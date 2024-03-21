import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Subject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  // Flux de données qui va notifier à chaque fois qu'on clique sur un cv
  // aymen atmane skander aymen ....
  private selectCvSubject$ = new Subject<Cv>();
  selectCv$ = this.selectCvSubject$.asObservable().pipe(distinctUntilChanged());
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

  /**
   * Retourne la liste des cvs
   * @returns Cv array
   *
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  /**
   * Retourne le cv par son id
   * @param id
   * @returns Cv
   */
  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * @param Cv
   * @returns boolean true if cv is delete false else
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv) {
    // On notifie tous nos subscriber sur le cv qui vient d'etre selectionnés
    this.selectCvSubject$.next(cv);
  }
}
