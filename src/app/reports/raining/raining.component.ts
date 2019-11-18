import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/store/reports/report.service';
import { Observable } from 'rxjs';

import { CustomerReport } from '../../models';


@Component({
  selector: 'app-raining',
  templateUrl: './raining.component.html',
  styleUrls: ['./raining.component.css']
})
export class RainingComponent implements OnInit {
  reports: Observable<CustomerReport[]>;  //any;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reports = this.reportService.getRaining();
    console.log(this.reports);
  }

  toggleRainDetails() {
    console.log("TBD: Toggle rain details");
  }

}
