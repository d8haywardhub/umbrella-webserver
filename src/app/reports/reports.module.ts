import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { RainingComponent } from './raining/raining.component';
import { Top4Component } from './top4/top4.component';


const customerRoutes: Routes = [
  //{ path: "", component: RainingComponent },
  { path: "raining", component: RainingComponent },
  { path: "top4", component: Top4Component }
];


@NgModule({
  declarations: [RainingComponent, Top4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
  ]
})
export class ReportsModule { }
