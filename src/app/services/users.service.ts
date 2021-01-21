import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  fullname: string = '';

  constructor(private httpClient: HttpClient) { }
  
  getUser(userId: any): Observable<any>{
    return this.httpClient.get<any>(`${environment.API_URL}/users/${userId}`);
  }
  
  getUserFullName(userId: any): string{
    this.httpClient.get<any>(`${environment.API_URL}/users/${userId}`)
    .subscribe((data) => {
      this.fullname = `${data.body.first_name} ${data.body.last_name}`;
    });
    return this.fullname;
  }

  getUserAssignedAgents(userId: any): Observable<any>{
    return this.httpClient.get<any>(`${environment.API_URL}/users/${userId}/agents`);
  }
  
}
