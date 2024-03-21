import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
  myObservable: Observable<number>;
  constructor(private toastr: ToastrService) {
    this.myObservable = new Observable((observer) => {
      let i = 5;
      // L'observable génére la données à envoyer à ses observateurs
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });



    this.myObservable.subscribe((val) => {
      console.log(val);
    });
    setTimeout(() => {
      this.myObservable
        //5 4 3 2 1
        .pipe(
          map((val) => val * 3),
          //15 12 9 6 3
          filter((val) => !(val % 2))
          // 12 6
        )
        .subscribe({
          next: (value) => {
            this.toastr.info('' + value);
          },
          error: (err) => {
            this.toastr.error(err);
          },
          complete: () => {
            this.toastr.warning('End of the Game :D');
          },
        });
    }, 3000)

  }
}
