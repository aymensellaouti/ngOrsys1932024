import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../service/cv.service';
import { distinctUntilChanged } from 'rxjs';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
  // tableau de cvs
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  nbre = 0;
  // On demande à l'injecteur de nous fournir une instance de LoggerService
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.sayHelloService.sayHello();
    this.loggerService.logger('cc c est le CvComponent');
    this.toastr.info('Bonjorur :D');
    this.cvs = this.cvService.getCvs();
    this.cvService.selectCv$
    .subscribe((cv) => {
      console.log("j ai recu", cv);
      this.nbre++;
      this.selectedCv = cv;
    });
  }
  /**
   * Le cv Sélectionné
   */

  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
