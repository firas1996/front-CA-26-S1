import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // constructor( private http : HttpClient){}
  // Modern Way
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:1234/users';

  isLoggedIn = signal<boolean>(false);

  signin(email: string, password: string) {
    return this.httpClient.post(`${this.apiUrl}/auth`, { email, password }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      }),
    );
  }
}
