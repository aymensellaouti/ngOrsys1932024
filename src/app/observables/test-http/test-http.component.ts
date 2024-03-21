import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { SayHelloService } from 'src/app/services/say-hello.service';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent {
  sayHelloService = inject(SayHelloService);
  constructor() {
    this.sayHelloService.getHttpTodos().subscribe({
      next: (todos) => console.log(todos),
      error: (err) => console.log(err),
    })
  }
}
