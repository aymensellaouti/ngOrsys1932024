import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  // On demande à l'injecteur de nous fournir une instance de LoggerService
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService
  ) {
    this.sayHelloService.sayHello();
    this.loggerService.logger('cc c est le CvComponent');
    this.toastr.info('Bonjorur :D');
  }
  today = new Date();
  // tableau de cvs
  cvs: Cv[] = [
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

  /**
   * Le cv Sélectionné
   */
  selectedCv: Cv | null = null;
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
