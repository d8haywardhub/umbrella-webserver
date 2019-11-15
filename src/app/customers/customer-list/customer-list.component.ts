import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../../models';
import { CustomerStoreService } from 'src/app/store/customer/customer-store.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  error$: Observable<String>;
  
  constructor(private customerStore: CustomerStoreService) { }

  ngOnInit() {
    this.customers$ = this.customerStore.customers$;
  }

  deleteCustomer(customer: Customer) {
    if (confirm("Are You Sure You want to Delete the Customer?")) {
      // Dispatch
      this.customerStore.removeCustomer(customer._id)

    }
  }

  selectCustomer(customer: Customer) {
    this.customerStore.selectCustomer(customer)
  }
}




