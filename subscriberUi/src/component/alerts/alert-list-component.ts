import {Component,OnInit} from "@angular/core";
import {AlertService} from "../../service/alert.service";

@Component({
  selector : 'alert-lisr',
  template : `
  <div>
    <h1>
      <alert-lisr> </alert-lisr>
    </h1>
  </div>
  `
})

export class AlertListComponent implements OnInit{
  alerts:any[];
  constructor(private alertService : AlertService){
  }

  ngOnInit(){
    this.alertService.getAlerts('/server/api/v1/alerts/').subscribe((alerts:any[])=>{this.alerts = alerts})
  }
}
