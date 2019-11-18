import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "customer",
    loadChildren: "../app/customers/customers.module#CustomersModule"
    //data: { preload: true},
  },
  /*{
    path: "report",
    loadChildren: "../app/reports/reports.module#ReportsModule"
    //data: { preload: true},
  },*/
  {
    path: "reports",
    loadChildren: "../app/reports/reports.module#ReportsModule"
    //data: { preload: true},
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
