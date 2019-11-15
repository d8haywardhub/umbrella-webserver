import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../../models';

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

  index() {
    return this.http.get<Customer[]>("/customer/customers");
  }

  create(customer: Customer) {
    return this.http.post<Customer>("/customers", JSON.stringify(customer), this.httpOptions);
  }

  update(customer: Customer) {
    return this.http.put<Customer>(`/customers/${customer._id}`, JSON.stringify(customer), this.httpOptions);
  }

  remove(id: number) {
    return this.http.delete(`/customers/${id}`)
  }

  /*
  index() {
    return this.http.get<Customer[]>("/customers");
  }

  create(customer: Customer) {
    return this.http.post<Customer>("/customers", JSON.stringify(customer), this.httpOptions);
  }

  update(customer: Customer) {
    return this.http.put<Customer>(`/customers/${customer._id}`, JSON.stringify(customer), this.httpOptions);
  }

  remove(id: number) {
    return this.http.delete(`/customers/${id}`)
  }
  */

}