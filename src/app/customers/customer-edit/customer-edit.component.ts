import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Observable } from "rxjs";

import { Customer } from "../../models";
import { CustomerStoreService } from 'src/app/store/customer/customer-store.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customer$: Observable<Customer>;

  constructor(
    private fb: FormBuilder,
    private customerStore: CustomerStoreService
  ) { }

  ngOnInit() {
    this.customer$ = this.customerStore.customer$

    this.customerForm = this.fb.group({
      name: ["", Validators.required],
      personOfContact: ["", Validators.required],
      phone: ["", Validators.required],
      location: ["", Validators.required],
      numberOfEmployees: ["", Validators.required]
      //id: null
    })

    this.customer$.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          name: currentCustomer.name,
          personOfContact: currentCustomer.personOfContact,
          phone: currentCustomer.phone,
          location: currentCustomer.location,
          numberOfEmployees: currentCustomer.numberOfEmployees,
          //id: currentCustomer.id
        });
      }
    })
  }

  updateCustomer() {
    const updatedCustomer: Customer = {
      //id: this.customerForm.get("id").value
      name: this.customerForm.get("name").value,
      personOfContact: this.customerForm.get("personOfContact").value,
      phone: this.customerForm.get("phone").value,
      location: this.customerForm.get("location").value,
      numberOfEmployees: this.customerForm.get("numberOfEmployees").value
    };

    // Dispatch
    this.customerStore.updateCustomer(updatedCustomer);
  }

}
