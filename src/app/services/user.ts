import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:1234/users';

  getAll() {
    return this.httpClient.get(this.apiUrl);
  }
}
