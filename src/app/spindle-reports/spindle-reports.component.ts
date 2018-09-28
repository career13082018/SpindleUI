import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpindleService } from '../service/SpindleMachineDetailsService.service';
import { SpindleMachineDetailsBean } from '../model/SpindleMachineDetailsBean.model';
import { SpindleMasterDetailsBean } from '../model/SpindleMasterDetailsBean.model';

@Component({
  selector: 'app-spindle-reports',
  templateUrl: './spindle-reports.component.html',
  styleUrls: ['./spindle-reports.component.css']
})
export class SpindleReportsComponent implements OnInit{

  spindles: SpindleMasterDetailsBean[];

  constructor(private router:Router, private spindleService:SpindleService) { }

  ngOnInit() {
    this.spindleService.getSpindleReports()
      .subscribe( data => {
        this.spindles = data;
      });
  };

}
