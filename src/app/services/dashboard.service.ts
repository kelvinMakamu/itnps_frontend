import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService{

  constructor(private httpClient: HttpClient) { }

  getDashboardStats(userId: any, startDate: any, endDate:any ): Observable<any>{
    return this.httpClient.post<any>(`${environment.API_URL}responses/dashboard`,{userId,startDate,endDate});
  };
}
