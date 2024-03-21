import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoHttp } from '../Model/todo-http.model';

@Injectable({
  providedIn: 'root',
})
export class SayHelloService {

  constructor(
    //
    private loggerService: LoggerService,
    private http: HttpClient
  ) { }

  sayHello() {
    this.loggerService.logger('HELLO :D');
  }

  getHttpTodos(): Observable<TodoHttp[]> {
    return this.http.get<TodoHttp[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
