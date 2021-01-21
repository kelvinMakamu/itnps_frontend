import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})

export class AuthService{

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${environment.API_URL}auth/login`,
    { username: credentials.username, password: credentials.password });
  }

}