import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerReport } from '../../models';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ReportService {

  constructor(private http: HttpClient) { }

  // Http Options

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getRaining() {
    return this.http.get<CustomerReport[]>("/report/raining");
  }

}
