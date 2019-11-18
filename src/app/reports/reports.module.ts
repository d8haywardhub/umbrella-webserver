import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { RainingComponent } from './raining/raining.component';


const customerRoutes: Routes = [{ path: "", component: RainingComponent }];


@NgModule({
  declarations: [RainingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
  ]
})
export class ReportsModule { }
