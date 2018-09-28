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

  spindles: SpindleMasterDetailsBean[];

  name:string;
  keys: string[]=[];
  
  constructor(private router:Router, private spindleService:SpindleService) { }

  ngOnInit() {
    this.spindleService.getSpindleReports()
      .subscribe( data => {
        this.spindles = data;
        // this.keys= Object.keys(this.spindles[1])
      });
  };
}
