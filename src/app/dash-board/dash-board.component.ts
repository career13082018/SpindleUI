import { Component, OnInit } from '@angular/core';
import { SpindleMachineDetailsBean } from '../model/SpindleMachineDetailsBean.model';
import { SpindleService } from '../service/SpindleMachineDetailsService.service';
import { Router } from '@angular/router';
import { SpindleMasterDetailsBean } from '../model/SpindleMasterDetailsBean.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  spindles: SpindleMachineDetailsBean[];

  name:string;
  interval: any;
  keys: string[]=[];
  spindleMasterAddressArr: number []=[1,2,3,4,5,6,7,8,9,10];
  constructor(private router:Router, private spindleService:SpindleService) { }

  ngOnInit() {

    this.refreshData();
    this.interval = setInterval(() => { 
        this.refreshData(); 
    }, 1000);

   
  };

 
  refreshData(){
    this.spindleService.getSpindleReports()
    .subscribe( data => {
      this.spindles = data;
      // this.keys= Object.keys(this.spindles[1])
    });   
  }
}
