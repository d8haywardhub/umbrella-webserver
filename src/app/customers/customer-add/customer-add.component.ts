import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Customer } from "../../models";
import { CustomerService } from 'src/app/store/customer/customer.service';
import { Observable } from 'rxjs';
import { CustomerStoreService } from 'src/app/store/customer/customer-store.service';

@Component({
  selector: "app-customer-add",
  templateUrl: "./customer-add.component.html",
  styleUrls: ["./customer-add.component.css"]
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;

  customers$: Observable<Customer[]>;
  error$: Observable<String>;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private customerStoreService: CustomerStoreService
  ) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: ["", Validators.required],
      personOfContact: ["", Validators.required],
      phone: ["", Validators.required],
      location: ["", Validators.required],
      numberOfEmployees: ["", Validators.required]
    });
  }

  createCustomer() {
    const newCustomer: Customer = {
      name: this.customerForm.get("name").value,
      personOfContact: this.customerForm.get("personOfContact").value,
      phone: this.customerForm.get("phone").value,
      location: this.customerForm.get("location").value,
      numberOfEmployees: this.customerForm.get("numberOfEmployees").value
    };

    // Dispatch
    this.customerStoreService.addCustomer(newCustomer);

    this.customerForm.reset();
  }
}
