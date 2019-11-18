import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/store/reports/report.service';
import { Observable } from 'rxjs';

import { CustomerReport } from '../../models';

@Component({
  selector: 'app-top4',
  templateUrl: './top4.component.html',
  styleUrls: ['./top4.component.css']
})
export class Top4Component implements OnInit {
  report: Observable<CustomerReport[]>;  //any;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.report = this.reportService.getTop4();
    console.log(this.report);
  }

}
