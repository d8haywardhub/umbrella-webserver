import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators'

import { Customer } from '../../models';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerStoreService {

  private _customers$ = new BehaviorSubject<Customer[]>([]);
  private _currentCustomer$ = new BehaviorSubject<Customer>(null)
  
  get customers$(): Observable<any[]> {
    return this._customers$.asObservable();
  }

  get customer$(): Observable<Customer> {
    return this._currentCustomer$.asObservable();
  }
  // D o c u m e n t a t i o n     o n l y       n o t    u s e d  ! ! !
  // we'll compose the todos$ observable with map operator to create a stream of only removed customers
  readonly removedCustomers$ = this.customers$.pipe(
    map(customers => customers.filter(customer => true))
  )

  // the getter will return the last value emitted in _customers subject
  get customers(): Customer[] {
    return this._customers$.getValue();
  }

  set customers(val: Customer[]) {
    this._customers$.next(val);
  }

  // the getter will return the last value emitted in _customer subject
  get customer(): Customer {
    return this._currentCustomer$.getValue();
  }

  set customer(val: Customer) {
    this._currentCustomer$.next(val);
  }

  constructor(private customerService: CustomerService) {
    this.fetchAll();
  }

  async addCustomer(customer: Customer) {
    const tmpId = uuid();
    //const tmpCustomer = {id: tmpId};

    // Add new customer in memory
    this.customers = [
      ...this.customers, 
      customer
    ];

    // Add new customer in DB
    try {
      const todo = await this.customerService
        .create(customer)
        .toPromise();

      // swap the local tmp record with the record from the server (id must be updated)
      const index = this.customers.indexOf(this.customers.find(t => (""+t._id) === tmpId));
      this.customers[index] = {
        ...todo
      }
      this.customers = [...this.customers];
    } catch (e) {
      // if server sends back an error, revert the changes
      console.error(e);
      //this.removeCustomer(tmpId, false);
    }


  }

  async updateCustomer(customer: Customer) {

    // Optimistic update ensuring an immutable state (copy = source.concat())
    let index = this.customers.findIndex(c => c._id === customer._id);

    /* not working ....
    this.customers = this.customers.concat(
      ...this.customers.slice(0, index),
      customer,
      ...this.customers.slice(index + 1)
    );
    */
    
    this.customers = [
      ...this.customers.slice(0, index),
      customer,
      ...this.customers.slice(index + 1)
    ];
    
    // Update Customer in DB
    try {
      await this.customerService
        .update(customer)
        .toPromise();

      this.customers = [...this.customers];
    } catch (e) {
      // if server sends back an error, revert the changes
      console.error(e);
      // TODO: revert changes !!!!
    }
  }


  async removeCustomer(id: number, serverRemove = true) {
    // optimistic memory update
    const customer = this.customers.find(c => c._id === id);
    this.customers = this.customers.filter(c => c._id !== id);

    // Delete from DB 
    if(serverRemove) {
      try {
        await this.customerService.remove(id).toPromise();
      } catch (e) {
        console.error(e);
        this.customers = [...this.customers, customer];
      }

    }

  }

  // New customer selected
  async selectCustomer(customer: Customer) {
    this._currentCustomer$.next(customer);
  }

  // Get all Customers from DB
  async fetchAll() {
    this.customers = await this.customerService.getAll().toPromise();
  }

}

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
