import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerReport } from '../../models';
import { API_BASE_URL } from '../../app.tokens';

@Injectable({providedIn: 'root'})
export class ReportService {

  constructor(private http: HttpClient, @Inject(API_BASE_URL) private readonly baseUrl: string) { }

  getRaining() {
    return this.http.get<CustomerReport[]>(`${this.baseUrl}/report/raining`);
  }

  getTop4() {
    return this.http.get<CustomerReport[]>(`${this.baseUrl}/report/top4`);
  }
}
