import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponsesService {

  constructor(private http: HttpClient) { }

  getRawResponses(userId: any): Observable<any>{
    return this.http.post(`${environment.API_URL}responses/users`,{ userId });
  };
  
  getRawResponsesBetweenDuration(userId: any, startDate: any, endDate:any ): Observable<any>{
    return this.http.post<any>(`${environment.API_URL}responses/users/period`,{userId,startDate,endDate});
  };

}
