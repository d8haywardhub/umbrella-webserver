import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../../models';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CustomerService {
  //private readonly apiBaseUrl = "/customers";

  constructor(private http: HttpClient) { }

  // Http Options

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAll() {
    return this.http.get<Customer[]>("/customer/customers");
  }

  create(customer: Customer) {
    return this.http.post<Customer>("/customer/customer", JSON.stringify(customer), this.httpOptions);

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

  update(customer: Customer) {
    return this.http.put<Customer>(`/customers/${customer._id}`, JSON.stringify(customer), this.httpOptions);
  }

  remove(id: number) {
    return this.http.delete(`/customers/${id}`);
  }

}