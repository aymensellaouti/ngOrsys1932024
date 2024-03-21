import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../dto/login-response.dto';
import { APP_API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  constructor() {}

  login(credentials: CredentialsDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(APP_API.login, credentials).pipe(
      // lorsqu'on a besoin d'un effet de bord
      tap(
        (response) => {
          localStorage.setItem('token', response.id);
        }
      )
    );
  }
}
