import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SpindleService } from '../service/SpindleMachineDetailsService.service';
import { SpindleMachineDetailsBean } from '../model/SpindleMachineDetailsBean.model';
import { SpindleMasterDetailsBean } from '../model/SpindleMasterDetailsBean.model';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-spindle-reports',
  templateUrl: './spindle-reports.component.html',
  styleUrls: ['./spindle-reports.component.css']
})
export class SpindleReportsComponent implements OnInit{

  spindles: SpindleMasterDetailsBean[];

 constructor(private router:Router, private spindleService:SpindleService) { }

//   constructor(httpClient: HttpClient, @Inject('spindleUrl') baseUrl: string) {
//     httpClient.get<SpindleMasterDetailsBean[]>(baseUrl + 'WeatherForecasts').subscribe(result => {
//         this.forecasts = result;
//     }, error => console.error(error));
// }

filterForeCasts(filterVal: any) {
  if (filterVal == "0")
    console.log("one "+filterVal);
  else
  {
    this.spindleService.getSpeedwiseReport()
    .subscribe( data => {
      this.spindles = data;
    });
  console.log("else  "+filterVal);
  }
    // this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
}

  ngOnInit() {
    this.spindleService.getSpeedwiseReport()
      .subscribe( data => {
        this.spindles = data;
      });
  };

}
