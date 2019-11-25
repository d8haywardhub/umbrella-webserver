import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { tap } from 'rxjs/operators';
import { Customer } from '../../models';
import { API_BASE_URL } from '../../app.tokens';

@Injectable({providedIn: 'root'})
export class CustomerService {

  constructor(private http: HttpClient, @Inject(API_BASE_URL) private readonly baseUrl: string) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAll() {
    //return this.http.get<Customer[]>("/customers");
    //return this.http.get<Customer[]>("http://localhost:3001/customers");
    return this.http.get<Customer[]>(`${this.baseUrl}/customers`);
  }

  create(customer: Customer) {
    //return this.http.post<Customer>("/customers", JSON.stringify(customer), this.httpOptions);
    return this.http.post<Customer>(`${this.baseUrl}/customers`, JSON.stringify(customer), this.httpOptions);

    /* For debugging. TBD: remove this......
    return this.http
      .post("/customer/customer", JSON.stringify(customer))
      .pipe(
        tap(
           (resp: any) => {
            console.log("NEXT /customer/customer  :", resp);
          },
          (err) => { console.log("ERROR /customer/customer  error:", err); },
          () => { console.log("DONE /customer/customer") }
        ),
        catchError(this.handleError)
      )
    ;
    */

  }

  update(customer: Customer, id: number) {
    return this.http.patch<Customer>(`${this.baseUrl}/customers/${id}`, JSON.stringify(customer), this.httpOptions);
  }

  remove(id: number) {
    return this.http.delete(`${this.baseUrl}/customers/${id}`);
  }

}